import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7B-yHk1nDiPmyRWBF-_8tNX9r7NDwxms",
  authDomain: "searchjob-d9fbb.firebaseapp.com",
  databaseURL: "https://searchjob-d9fbb.firebaseio.com",
  projectId: "searchjob-d9fbb",
  storageBucket: "",
  messagingSenderId: "926320837457"
};
const fire =  firebase.initializeApp(config);

export default fire;
