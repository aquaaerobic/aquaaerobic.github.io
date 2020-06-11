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
                                      if (name === "CALENDAR OF EVENTS" || name === "CORPORATE NOTIFICATIONS")
                                      {
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
                                          items.push( "<b><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_menu  + "</a></b><br>" );
                                      }
                                 }else{
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
                                  items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name  + "</a><br>" );
                                 }
                                 
                          });
                         
                          $( "<ul/>", {
                            "class": "my-new-list",
                            html: items.join( "" )
                          }).appendTo( "body" );
               });
            });
                
        // });
