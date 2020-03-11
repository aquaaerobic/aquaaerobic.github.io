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
 var website = "https://www.ckonkol.com/aquareference/myaqua.php?id=" + geturl
 document.getElementById("MyList").innerHTML = '';
 document.getElementById("MyList").innerHTML = '<iframe frameborder="0" src=' + website + ' width="100%" height="1200"></iframe>';   
}

function closeWindow() {
        window.open('','_parent','');
        window.close();
}
 
