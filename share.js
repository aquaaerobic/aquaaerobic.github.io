var firebaseConfig = {
    apiKey: "AIzaSyBu4FaHCylofeNVO5gHkyS4IYFcYZLOiA4",
    authDomain: "aquaguide2018.firebaseapp.com",
    databaseURL: "https://aquaguide2018.firebaseio.com",
    projectId: "aquaguide2018",
    storageBucket: "aquaguide2018.appspot.com",
    messagingSenderId: "333575317068",
    appId: "1:333575317068:web:5ab37f19fd58d8c96ab6e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
function get(name){
    var url = window.location.search;
    var num = url.search(name);
    var namel = name.length;
    var frontlength = namel+num+1; //length of everything before the value
    var front = url.substring(0, frontlength);
    url = url.replace(front, "");
    num = url.search("&");
    if(num>=0) return url.substr(0,num);
    if(num<0)  return url;
}

//v4.0 Add popup describing app when visitors load webpage the first time
window.onload = function() {
    populateshoppinglistonload();
    //<a href="#" onclick="javascript:window.close();opener.window.focus();" >Close Window</a><br><br>
   //  document.getElementById("CloseB").innerHTML = '<button onclick="closeWindow();" >Close Window</button><br><br>';
    //<button onclick="myFunction()">Click me</button>
};
function populateshoppinglistonload()
{
 var geturl = get("id");
 var phonename = "Android";
var d = new Date();
var day = d.toLocaleDateString();
var time = d.toLocaleTimeString();
var datenow = day + " " + time;
var section = "";

   $.getJSON('https://ckonkol.com/aquareference/json.php', function(data) {
                      var items = [];
                          $.each( data, function( key, val ) {
                                 var name = val.aqua_name;
                                 var menu = val.aqua_menu;
                                 var id = val.aqua_key;
                                 if (id === geturl){   
    db.collection("users").add({
    date: datenow,
    device: phonename,
    visited: name
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
                                 }
                          });
               });
 var website = "https://www.ckonkol.com/aquareference/myaqua.php?id=" + geturl
 document.getElementById("MyList").innerHTML = '';
 document.getElementById("MyList").innerHTML = '<iframe frameborder="0" src=' + website + ' width="100%" height="1200"></iframe>';   
}

function closeWindow() {
        window.open('','_parent','');
        window.close();
}

function goBack() {
  window.history.back();
}
 
