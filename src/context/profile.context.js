import { auth, database } from '../misc/firebase';
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    let userRef;
    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt, avatar } = snap.val();
          const data = {
            name,
            createdAt,
            avatar,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setisLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
        setisLoading(false);
      }
    });
    return () => {
      authUnsub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
