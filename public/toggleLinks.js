let links = document.getElementById('links');
let linkButton = document.getElementById('linkButton');

linkButton.addEventListener('click', function(){
if(links.style.display == "none"){
	links.style.display = "grid"
} else {
	links.style.display = "none"
}
}, false);
