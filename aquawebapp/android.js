var config = {
    apiKey: "AIzaSyCBPpzOO2yZbOiNjRlbOooay_aEbq4Ah-k",
    authDomain: "aquaguideandroid.firebaseapp.com",
    databaseURL: "https://aquaguideandroid.firebaseio.com",
    projectId: "aquaguideandroid",
    storageBucket: "aquaguideandroid.appspot.com",
    messagingSenderId: "747886344944"
    };
    firebase.initializeApp(config);
    var db = firebase.database();

//v4.0 Add popup describing app when visitors load webpage the first time
window.onload = function() {
    alert("Welcome to 'Aqua One Minute Guide Send Notifcations' App!\n\nType message in available textbox, then submit");
    clearFocus();
};

function validateForm(message) {
    var x = message; //document.getElementById("message").value;
    alert(x);
    if (x == "") {
        alert("Message must be filled out");
    }else{
        db.ref("message").set(x);
         alert("Message sent");
        document.getElementById("message").innerHTML = ' ';
    }
}
function clearFocus()
{
  document.getElementById("message").value = "";
 //  document.getElementById("cost").value = "";
  document.getElementById("message").focus();
}

