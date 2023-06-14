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
              $.getJSON('https://aquaguide.app/app/json.php', function(data) {
                      var items = [];
                          $.each( data, function( key, val ) {
                                 var name = val.aqua_name;
                                 var menu = val.aqua_menu;
                                 if (name === menu){  
                                  var m1 = val.aqua_menu;
                                  var mitem1 = "CALENDAR OF EVENTS";
                                  var mitem2 = "CORPORATE NOTIFICATIONS";
                                     if (m1.startsWith(mitem1) || m1.startsWith(mitem2)) {
                                      if (m1.startsWith(mitem1)) {
                                          items.push( "<b><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_menu  + "</a></b><br>" );
                                      }
                                      if (m1.startsWith(mitem2)) {
                                          items.push( "<b><a href='https://aquaaerobic.github.io/notifications.html'>" + val.aqua_menu  + "</a></b><br>" );
                                      }
                                   
                                   }else{
                                      items.push( "<b>" + val.aqua_menu  + "</b><br>" );
                                   }
                                 //  items.push( "<b>" + val.aqua_menu  + "</b><br>" );
                                   // items.push( "<b><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_menu  + "</a></b><br>" );
                                 }else{
                                  var value = val.aqua_name;
                                  var space = "Online Webinars";
                                  if (value.startsWith(space)) {
                                      items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  val.aqua_name  + "<br>" );
                                   }else{
                                    var value2 = val.aqua_name;
                                    var space1 = "Aqua TechTalk Webinar Series";
                                    var space2 = "Learn and Earn Rep Training";
                                    var space3 = "AquaBucks";
                                    var space4 = "Invitations";
                                    var space5 = "R&T Center Brochure";
                                    var space6 = "Rep Fees";
                                    var space7 = "Videos and Resources";
                                    var space8 = "Related Resources";
                                     if (value2.trim().startsWith(space1)) {
                                      items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                     }else if (value2.trim().startsWith(space2)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space3)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space4)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space5)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space6)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space7)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                                 }else if (value2.trim().startsWith(space8)) {
                                       items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name.trim()  + "</a><br>" );
                    
                                     }else{
                                     
                                            items.push("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name  + "</a><br>" );
                                           // items.push("<li><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_name  + "</a></li>" );
                                     
                                     }
                                     }
                                  
                                 }
                                 
                          });
                         
                          $( "<ul/>", {
                            "class": "my-new-list",
                            html: items.join( "" )
                          }).appendTo("body");
         
               });
            
            });
                
        // });
