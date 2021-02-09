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
  
$(document).ready(function() {
  
//$('html').append('<center><img src="home.jpg" width="400"></center>');
  
$('body').css('display', 'none')
.delay(1000).fadeIn(500, function() {
  $('.onLoad').fadeOut(500);
});
  
var phonename = "Android";
var d = new Date();
var day = d.toLocaleDateString();
var time = d.toLocaleTimeString();
var datenow = day + " " + time;
var section = "";
            
          //  $("#driver").click(function(event){
               $.getJSON('https://ckonkol.com/aquareference/json.php', function(data) {
                      var items = [];
                          $.each( data, function( key, val ) {
                                 var name = val.aqua_name;
                                 var menu = val.aqua_menu;
                                 if (name === menu){   
                                          items.push( "<b><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_menu  + "</a></b><br>" );
                                 }else{
                                  var value = val.aqua_name;
                                  var space = " ";
                                  if (value.startsWith(space)) {
                                      items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  val.aqua_name  + "<br>" );
                                   }else{
                                     items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name  + "</a><br>" );
                                   }
                                  
                                 }
                                 
                          });
                         
                          $( "<ul/>", {
                            "class": "my-new-list",
                            html: items.join( "" )
                          }).appendTo( "body" );
               });
            });
                
        // });
