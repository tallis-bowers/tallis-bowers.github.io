/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
  
  var hdivs = document.getElementsByClassName("hobby_div");
        for(var i = 0; i < hdivs.length; i++) {
            var hdiv = hdivs[i];
            hdiv.style.marginLeft = "200px";
        }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
  document.getElementById("main").style.marginLeft = "0";
  
  var hdivs = document.getElementsByClassName("hobby_div");
        for(var i = 0; i < hdivs.length; i++) {
            var hdiv = hdivs[i];
            hdiv.style.marginLeft = "0px";
        }
}