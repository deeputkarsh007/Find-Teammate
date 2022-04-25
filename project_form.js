




// firebase.auth().onAuthStateChanged((user) => {
//     if (!user) {
//         location.replace("Log_in.html")
//     }
//     else {
//         document.getElementById("user").innerHTML = "HELLO , " + user.email
//     }
// })



function logout() {
    firebase.auth().signOut()
}

function writeData() {
    firebase.database().ref('Project').push().set({
        PN: document.getElementById("PN").value,
        contact: document.getElementById("Contact").value,
        PW: document.getElementById("PW").value,
        OA: document.getElementById("OA").value,
        ON: document.getElementById("ON").value,
        DoP: document.getElementById("DoP").value,
        Linked_In: document.getElementById("Linked In").value,
        Git_Hub: document.getElementById("Git Hub").value,
        NoMA: document.getElementById("NoMA").value,
        email_address: document.getElementById("Mail").value,
        DoT: document.getElementById("DoT").value,
        Other: document.getElementById("Other").value,
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
``