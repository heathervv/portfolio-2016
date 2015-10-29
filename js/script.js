window.onload = init;

function init(){
  	var button = document.getElementById('_cta'),
  		delay = 1,
		scrollAmount = 10;

  	button.addEventListener("click",function(e){
		scrollToBottom();
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
};