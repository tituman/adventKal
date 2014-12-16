
function clickFun(){
	
	if (true || !checkCookie('username')) {
		setCookie('username', 'bliblu');
		//alert('cookie set!');
		var x = document.getElementById("demo");   // Get the element with id="demo"
		var date = new Date();
		date = date.getDate();
		var messageForBlock = "today's date is " + date + ",  your randomly generated number is " + openAdvent(date);
		x.innerText = x.innerHMTL = x.textContent = x.outerHTML = messageForBlock;                     // Change the color of the element
		;
	}	
	else {
		alert('you have tried already!');
	}
	

	
}

function openAdvent(date) {
	var randNum = Math.floor((Math.random() * 25) + 1);
	//alert(randNum);
	//alert(date.getDate());
	if (date == randNum) {
		alert('You got it!');
	}
	return randNum;
}

function setCookie(cname,cvalue) {
	var date = new Date();
	var time = date.getTime();
	time += 3600 * 1000;
	date.setTime(time);
	//var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	var expires = "expires="+date.toUTCString();
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