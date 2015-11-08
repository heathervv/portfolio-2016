window.onload = init;

function init(){
  	var button = document.getElementById('_cta'),
  		delay = 1,
		scrollAmount = 10;

  	button.addEventListener("click",function(e){
		scrollToBottom();
		e.preventDefault();
	},false);

	function scrollToBottom() {  
		interval = setInterval(animatedScroll,delay);
	}

	function animatedScroll() {
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		  clearInterval(interval);
		} else {
		  window.scrollBy(0,scrollAmount);
		}
	}

	// var reveal = document.getElementsByClassName('intro__content')[0].getElementsByTagName("a");

	// for(var i = 0, len = reveal.length; i < len; i++) {
	// 	reveal[i].addEventListener('mouseover',function() {
	// 		document.getElementsByTagName('body')[0].className = 'hovered';
	// 	},false);
	// 	reveal[i].addEventListener('mouseout',function() {
	// 		document.getElementsByTagName('body')[0].className -= 'hovered';
	// 	},false);
	// }
};

function getMousePos(evt) {
    var doc = document.documentElement || document.body;
    var pos = {
        x: evt ? evt.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
        y: evt ? evt.pageY : window.event.clientY + doc.scrollTop - doc.clientTop
    };
    return pos;
}

document.onmousemove = moveMouse;

function moveMouse(evt) {
    var pos = getMousePos(evt),
		gradient = document.getElementById("_gradient");
    gradient.style.backgroundPosition = pos.x + "px " + pos.y + "px";
}