const getUA = () => {
    let device = "Unknown";
    const ua = {
        "Generic Linux": /Linux/i,
        "Android": /Android/i,
        "BlackBerry": /BlackBerry/i,
        "Bluebird": /EF500/i,
        "Chrome OS": /CrOS/i,
        "Datalogic": /DL-AXIS/i,
        "Honeywell": /CT50/i,
        "iPad": /iPad/i,
        "iPhone": /iPhone/i,
        "iPod": /iPod/i,
        "macOS": /Macintosh/i,
        "Windows": /IEMobile|Windows/i,
        "Zebra": /TC70|TC55/i,
    }
    Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
    return device;
}
window.onload = function() {
   callwhenback();
};

function  callwhenback() {
jQuery.get('notification.txt', function(data) {
         //alert(data.length);
          // initialize title and body variables
        if (data.length > 3){
        var notifs = data;
        var Titles = "1-Minute Guide";
    if (getCookie('displaypopup')) {
		return;
	}
    createDialog(notifs , Titles);
// The popup was displayed. Set the cookie for 1 day.
	setCookie('displaypopup', 'yes', 3600);
}
});
}

function  callback() {
    jQuery.get('notification.txt', function(data) {
        //alert(data.length);
        // initialize title and body variables
        if (data.length > 3){
            var notifs = data;
            var Titles = "1-Minute Guide";
 
            createDialog(notifs , Titles);
             setTimeout(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
       }, 15);
        }
    });
}


var createDialog = function(text , title) {
    //create dialog <div> shell
    //create dialog <div> shell
    var dialog =  '<div id="dialog" title="1-Minute Reference Guide!" style="font-size: 11px;">' + text + '</div>';
    
    // create the dialog <div>
    $('body').append(dialog);
    
    // update the <div>'s title
     //$('#dialog').prop('title' , title);
     $('#dialog').dialog({
	      modal:true,
    open: function(event, ui) {
	  var win = $(window);  
	        $(".ui-widget-overlay").css({
            opacity: .7,
            filter: "Alpha(Opacity=100)",
            backgroundColor: "#AAAAAA"
        });
       // $('.ui-dialog-titlebar-close')
       //     .removeClass("ui-dialog-titlebar-close")
       //      .html('<a href="javascript:closeit();" style="color: yellow;font-size: small;">Click here to close &amp; view our website!</a>');
	$(this).closest('.ui-dialog').css({'width':'370px'});
        $(this).closest('.ui-dialog').css({'position':'absolute',left: (win.width() - $(this).parent().outerWidth()) / 2,top: 100});
	$(".ui-dialog-title" ).css("float", "none" );
	 $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
    }
}).prev(".ui-dialog-titlebar").css({'background':'#D55355','color':'white','text-align':'center'});
	  document.getElementById("modalClose").addEventListener("click", closeit);
}

function checkCookie() {
    // Get cookie using our custom function
    var notif = getCookie("notification");
    if(notif != "") {
      return true;
    } else {
      setCookie("notification","notif", 2);
      return false;    
    }
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(name, value, maxAgeSeconds) {
    var maxAgeSegment = "; max-age=" + maxAgeSeconds;
    document.cookie = encodeURI(name) + "=" + encodeURI(value) + maxAgeSegment;
}
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function closeit(){
  $('#dialog').dialog('close');
    location.reload();
}



