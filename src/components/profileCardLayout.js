import React, { useEffect, useState } from "react";
import './profileCardLayout.css'
import ProfileCard from './profileCard'
import { firestore } from "firebase";

const ProfileCardLayout = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [])

    //Function to retrive user data and determine random users to be displayed on slider.
    const fetchUsers = () => {
        //Retrieve all users from the database
        const db = firestore();
        db.collection("users")
          .get() 
          .then(snapshot => {
            const users = []
            snapshot.forEach(doc => {
                const data = doc.data()
                users.push(data);
                console.log(doc.image);
            })
            setUsers(users)

            let randNum = 0;
            let randArray = [];

            //Choose 6 random users from the retrieved users
            for (var i=0; i < 6; i++) {
                randNum = Math.floor(Math.random() * users.length);
                randArray.push(users.splice(randNum,1));
            }
            randArray = [].concat.apply([], randArray);
            setUsers(randArray);
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <>
        <h2 className="header">Meet other <u>like-minded</u> Professionals</h2>
            <ul className="layout">
                {
                    users && 
                    users.map(user => {
                        return (
                            <li className="card">
                            {/* Create profile card based on whether the user has an uploaded image */}
                                {user.imageUrl ? 
                                    <ProfileCard 
                                        className="cardStyle" 
                                        name={user.fullname} 
                                        occupation={user.occupation} 
                                        imageUrl={user.imageUrl}
                                    />
                                :  
                                    <ProfileCard 
                                        className="cardStyle" 
                                        name={user.fullname} 
                                        occupation={user.occupation}
                                    />
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ProfileCardLayout;
