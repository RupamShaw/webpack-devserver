var msg = require('./script-2');
require('./css/introComponent.css');
require('./css/introComponents.scss');
require('./css/imageload.css')
//alert(msg);
function fieldSwap(image){
	var sf = document.getElementById('sf');
	if(sf.value == ""){
	  sf.style.background = "url(../../images/"+image+") no-repeat";
	}
}
function buttonSwap(image){
	var sb = document.getElementById('sb');
	sb.src = "../../images/"+image;
}