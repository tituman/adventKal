
function clickFun(){
	
	if (!checkCookie('username')) {
		setCookie('username', 'bliblu');
		alert('cookie set!');
	}	
	else {
		alert('cookie exists!');
	}

	
}

function setCookie(cname,cvalue) {
	var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	var expires = "expires="+midnight.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(checkUser) {
    var user=getCookie(checkUser);
    if (user != "") {
        return true;
    } else {
       //user = prompt("Please enter your name:","");
       /*if (user != "" && user != null) {
           setCookie("username", user, 30);
       }*/
	   return false;
    }
}