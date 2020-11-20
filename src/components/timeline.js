import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Auth';
import { firestore } from "firebase";
import config from '../config/timelineConfig.js'

import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from 'react-activity-feed';
import 'react-activity-feed/dist/index.es.css';

//Creates the timeline shown on the user profile
const Timeline = () => {
  const containerRef = React.createRef();

  const [fullname, setFullName] = useState('');
  const [id, setId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { currentUser } = useContext(AuthContext);
  
  //Function to retrieve user data and store in state variables.
  const getUserData = () => {
      if (currentUser) {
          const db = firestore();
          db.collection("users").doc(currentUser.uid)
              .get()
              .then(snapshot => {
                  const userData = snapshot.data();
                  setFullName(userData.fullname);
                  setId(currentUser.uid);
                  setImageUrl(userData.imageUrl);
              })
            
      }
  }
  
    return (
      <div
        ref={containerRef}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <StreamApp apiKey={config.apiKey} appId={config.appId} token={config.token}>
          <div
            style={{
              background: '#fff', 
              height: 60,
              borderRadius: 4,
              margin: '10px 0',
              padding: '0 200px',
              boxShadow: '0px 0px 4px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h3>Shared Feed</h3>
            <NotificationDropdown arrow right />
          </div>
          <StatusUpdateForm
          />
          <FlatFeed
            feedGroup="user"
            notify
            options={{
              limit: 6,
            }}
            Paginator={(props) => (
              <InfiniteScrollPaginator
                useWindow={true}
                threshold={10}
                {...props}
                getScrollParent={() => containerRef}
              />
            )}
            Activity={(activityProps) => (
              <Activity
                {...activityProps}
                Footer={() => (
                  <React.Fragment>
                    <CommentField
                      activity={activityProps.activity}
                      onAddReaction={activityProps.onAddReaction}
                    />
                    <CommentList
                      activityId={activityProps.activity.id}
                      CommentItem={(props) => (
                        <React.Fragment>
                          <CommentItem {...props} />
                          <LikeButton
                            reaction={props.comment}
                            {...activityProps}
                          />
                        </React.Fragment>
                      )}
                    />
                  </React.Fragment>
                )}
              />
            )}
          />{getUserData()}
        </StreamApp>
      </div>
    );
};

export default Timeline;
