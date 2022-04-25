




firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("Log_in.html")
    }
    else {
        document.getElementById("user").innerHTML = "HELLO , " + user.email
    }
})



function logout() {
    firebase.auth().signOut()
}


// firebase.database().ref().on("value", (snapshot) => {
//     document.getElementById("practice").innerHTML = "Your username is given as " + snapshot.val();
// })
// firebase.database().ref().set(getElementById("Name").value)



function writeData() {
    firebase.database().ref('User').push().set({
        name: document.getElementById("Name").value,
        contact: document.getElementById("Contact").value,
        gender: document.getElementById("Gender").value,
        college: document.getElementById("College").value,
        Year_of_Study: document.getElementById("Year of study").value,
        Linked_In: document.getElementById("Linked In").value,
        Git_Hub: document.getElementById("Git Hub").value,
        Date_of_Birth: document.getElementById("DOB").value,
        email_address: document.getElementById("Mail").value,
        expertise: document.getElementById("expertise").value,
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
