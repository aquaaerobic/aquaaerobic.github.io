$(document).ready(function() {
  
          $('html')
  .append('<center><img src="home.jpg" width="400"></center>');
  
$('body').css('display', 'none')
.delay(4000).fadeIn(1000, function() {
  $('.onLoad').fadeOut(1000);
  window.location = 'about:blank';
});
            
          //  $("#driver").click(function(event){
               $.getJSON('https://ckonkol.com/aquareference/json.php', function(data) {
                      var items = [];
                          $.each( data, function( key, val ) {
                                 var name = val.aqua_name;
                                 var menu = val.aqua_menu;
                                 if (name === menu){
                                      items.push( "<b><a href='https://aquaaerobic.github.io/share.html?id=" + val.aqua_key + "'>" + val.aqua_menu  + "</a></b><br>" );
                                 }else{
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
