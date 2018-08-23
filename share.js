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
 var geturl = get("id");
 var website = "https://www.ckonkol.com/aquareference/capture.php?id=" + geturl;
 document.getElementById("MyList").innerHTML = '';
 document.getElementById("MyList").innerHTML = '<iframe src=' + website + ' width="200" height="200"></iframe>';
 
