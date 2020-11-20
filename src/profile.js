import React from 'react';
import './profile.css';
import ProfilePage from './components/ProfilePage';
import { withRouter } from 'react-router';

const Profile = () => {

    return (
        <div>
            <div className="app text-align-center">
                <ProfilePage />
            </div>
        </div>
    );
}

export default withRouter(Profile);
