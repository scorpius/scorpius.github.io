
// =============
// === Popup ===
// =============
function popup(sPicURL) {
	window.open("popup.htm?"+sPicURL, "", "resizable=1,width=640,height=480");
}

var newWindow
function popup2(jpg_or_htm, w, h) {
	var safari = navigator.userAgent.indexOf('Safari') != -1 ;
	var l, t;
	if (!w || !h) {
		w = 640;
		h = 480;
	}

	if(navigator.appName == "Netscape") {
		w += 20
		h += 20;
	} else {
		w += 38;
		h += 38;
	}
	if (safari) {
		w -= 20;
		h -= 20;
	}

	l = (screen.availWidth-w-10);
	t = 0	//(screen.availHeight-h);
	if (!newWindow || newWindow.closed) {
		newWindow = window.open(jpg_or_htm,"NOTIFY",'left='+l + ',top='+t + ',height='+h + ',width='+w+ ",toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=1,titlebar=0");
		newWindow.focus();
	} else {   // the window is already open, bring it to the front
		newWindow.close();
		newWindow = window.open(jpg_or_htm,"NOTIFY",'left='+l + ',top='+t + ',height='+h + ',width='+w+ ",toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=1,titlebar=0");
		newWindow.focus();
	}
	newWindow.document.bgColor = "#c0c0c0";
}


// =================
// === Fix Flash ===
// =================
theObjects = document.getElementsByTagName("object");
for (var i = 0; i < theObjects.length; i++) {
	theObjects[i].outerHTML = theObjects[i].outerHTML;
}

// ================
// === Rollover ===
// ================
window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = rollOut;

	thisImage.overImage = new Image();
	thisImage.overImage.src = "thumb/_zoom.gif";
	thisImage.onmouseover = rollOver;
}

function rollOver() {
	this.src = this.overImage.src;
}

function rollOut() {
	this.src = this.outImage.src;
}

