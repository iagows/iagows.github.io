function copyMe(argument) {
	var copyText = document.getElementById(argument);
	
	var text = copyText.select();
	text.setSelectionRange(0, 99999); /*For mobile devices*/
	document.execCommand("copy");

	copyText.setAttribute("value", "Copied");
}