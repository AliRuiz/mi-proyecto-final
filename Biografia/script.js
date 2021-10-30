function toggleText() {
  
    // Elementos //       
   var points = 
       document.getElementById("points");
   var showMoreText =
       document.getElementById("moreText");
   var buttonText =
       document.getElementById("textButton");

   if (points.style.display === "none") {
       showMoreText.style.display = "none"; // Esconde el texto dentro de SPAN //
       points.style.display = "inline";
       buttonText.innerHTML = "Leer mas";
   }

   else {

       showMoreText.style.display = "inline"; // Muestra el texto completo //
       points.style.display = "none";
       buttonText.innerHTML = "Leer menos";
   }
}