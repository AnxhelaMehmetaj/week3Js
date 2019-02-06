function displayBrowserWidth() {
	// You can get the Width of the Browser from the window Variable (More on Window later)
	var browserWidth = window.innerWidth;
	// You can use QuerySelector find a specific element based on a CSS Selector
	var textSpan = document.querySelector('.width-title #browserWidth');
	// Each DOM element has an innerHTML Property, allowing you to set the HTML contents of it 
	textSpan.innerHTML = browserWidth;
	textSpan.dataset.width = browserWidth;
}

displayBrowserWidth();
// Events can be bound to a specific element. 
// Other in this case, the entire window 
window.addEventListener('resize', displayBrowserWidth);


function modifyRedAlert (isRedAlert) {
	// You can use QuerySelector find a specific element based on a CSS Selector
	var alertHeader = document.querySelector('#alert-header');
	// You can modify the classes or styling of HTML with a DOM reference
	if (isRedAlert) {
		alertHeader.className = 'text-center text-danger';
	} else {
		alertHeader.className = 'text-center';
	}
}
// Here we bind an event to a specifc element as opposed to an entire window
// You can provide an Annymous or named function as a callback to the event listener
document.querySelector('#redTrue').addEventListener('click', function () {
	modifyRedAlert(true);
});
document.querySelector('#redFalse').addEventListener('click', function () {
	modifyRedAlert(false);
});