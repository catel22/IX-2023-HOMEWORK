import {
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    query,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Profile } from '../models/Profile';
  
  class ProfileService {
    constructor() {
      this.collection = 'profiles';
    }
  
    // get all profiles from firebase
    async fetchProfiles() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const profiles = [];
      querySnapshot.forEach((doc) => {
        profiles.push(Profile.fromFirebase(doc));
      });
  
      return profiles;
    }
  
    // get specific profile
    async fetchMyProfile(user) {
      const docRef = doc(db, this.collection, user.id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // create profile for docSnap
        return Profile.fromFirebase(docSnap);
      } else {
        // return a new profile with the userId
        return new Profile({ id: user.id });
      }
    }
  
    async saveProfile(profile) {
      const docRef = doc(db, this.collection, profile.id);
      await setDoc(docRef, profile.toJson());
    }
  }
  
  const service = new ProfileService();
  export default service;