var firebaseConfig = {
    apiKey: "AIzaSyCF2Cw6NfyZMHe3iajCL8shaP5obm_yjAg",
    authDomain: "find-teammate-56e62.firebaseapp.com",
    projectId: "find-teammate-56e62",
    storageBucket: "find-teammate-56e62.appspot.com",
    messagingSenderId: "384265739063",
    appId: "1:384265739063:web:1cdf7819cd7890170658b2",
    measurementId: "G-3HRE2BB4C0"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var nameV, ageV, genderV;

// function Ready(){
//     nameV = document.getElementById('name').value;
//     ageV = document.getElementById('ageField').value;
//     genderV = document.getElementById('Gender').value;
// }

// document.getElementById('insert').onclick = function(){
//     Ready();
//     firebase.database().ref('User/'+nameV).set({
//         nameofUser: nameV,+getElementById("name").value
//         age: ageV,
//         gender: genderV
//     });
// }

 function writeData() {
     firebase.database().ref('User').push().set({
         Name: document.getElementById("name").value,
         age: document.getElementById("ageField").value,
         gender: document.getElementById("Gender").value
   },function(error, completed, snapshot){
         if(error){
             console.log(error)
      }
    //  if(completed){
   //       alert("Information uploaded successfully")
       else{
       alert("Information uploaded successfully ")
       }
    }
    )
    getdata();
}

function getData() {
    firebase.database().ref('/').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['name'] + ", " + childData['age'];
        })
    })
}
getdata();

