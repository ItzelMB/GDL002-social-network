import { initRouter } from './changePage.js';

const config = {
   apiKey: "AIzaSyANXB1QICy5UrOliUFpOzNOBt_2fKyC0_M",
   authDomain: "poua-8a563.firebaseapp.com",
   databaseURL: "https://poua-8a563.firebaseio.com",
   projectId: "poua-8a563",
   storageBucket: "poua-8a563.appspot.com",
   messagingSenderId: "777091228447"
};

firebase.initializeApp(config);
      
initRouter();

