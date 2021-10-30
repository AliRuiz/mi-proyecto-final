function toggleCategory(category) {
    var categoria1Element = document.getElementById("categoria1");
    var categoria2Element = document.getElementById("categoria2");
    var categoria3Element = document.getElementById("categoria3");


   var categoria1Button = document.getElementById('cate1Btn');
   var categoria2Button = document.getElementById('cate2Btn');
   var categoria3Button = document.getElementById('cate3Btn');


    
if (category === 'cate1') {
categoria1Element.style.display = "block";
categoria2Element.style.display = "none";
categoria3Element.style.display = "none";  

categoria1Button.style.backgroundColor = 'rgb(207, 102, 116)';
categoria2Button.style.backgroundColor = '#eeb4a6';
categoria3Button.style.backgroundColor = '#eeb4a6';


} else if (category === 'cate2') {
    categoria2Element.style.display = "block";
    categoria1Element.style.display = "none";
    categoria3Element.style.display = "none";  

categoria1Button.style.backgroundColor = '#eeb4a6';
categoria2Button.style.backgroundColor = 'rgb(207, 102, 116)';
categoria3Button.style.backgroundColor = '#eeb4a6';

} else {
    categoria3Element.style.display = "block";
    categoria1Element.style.display = "none";
    categoria2Element.style.display = "none";  

categoria1Button.style.backgroundColor = '#eeb4a6';
categoria2Button.style.backgroundColor = '#eeb4a6';
categoria3Button.style.backgroundColor = 'rgb(207, 102, 116)';

}

}


