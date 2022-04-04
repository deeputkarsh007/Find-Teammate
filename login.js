import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//here I made a change in accordace to the video
const firebaseApp = initializeApp({
        apiKey: "AIzaSyCF2Cw6NfyZMHe3iajCL8shaP5obm_yjAg",
        authDomain: "find-teammate-56e62.firebaseapp.com",
        projectId: "find-teammate-56e62",
        storageBucket: "find-teammate-56e62.appspot.com",
        messagingSenderId: "384265739063",
        appId: "1:384265739063:web:1cdf7819cd7890170658b2",
        measurementId: "G-3HRE2BB4C0"
    
})

const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, function (user) {
        if (user) {
            console.log("User logged in.");
        } else {
            console.log("No user logged in");
        }
    })

auth().onAuthStateChanged(getAuthfirebaseApp(),(user)=>{
    if(user){
        console.log("User logged in.");
    }else{
        console.log("No user logged in");
    }
})