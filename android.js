window.onload = function() {
    loadFirebase();
};

function loadFirebase{
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
    alert("Hello");
}

//aquaguideandroid/database/aquaguideandroid/data/message
//db.ref("-Users/-message").set("NOTIFICATION: NEW AquaNereda Video Presented by Terry Reid, P.E.");
//db.ref("message").set("NOTIFICATION: NEW AquaNereda Video Presented by Terry Reid, P.E.");

function validateForm(message) {
    var x = message; //document.getElementById("message").value;
    alert(x);
    if (x == "") {
        alert("Message must be filled out");
    }else{
        alert("Message sent");
        db.ref("message").set("Happy ThanksGiving!");
         alert("Message sent");
    }
}
