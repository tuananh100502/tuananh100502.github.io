    function SortBy(){
      document.getElementById("myContent").classList.toggle("show"); 
      document.getElementById("icon").classList.toggle("rotate");
    }
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown1_button')) {
        var dropdowns = document.getElementsByClassName("dropdown1_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
function Show(){
  document.getElementById("myFilters").style.width="80%";
  document.getElementById("column_side1").style.marginLeft="20%";
  document.getElementById("column_side1").style.width="25%";
  document.getElementById("column_side2").style.width="25%";
  document.getElementById("column_side3").style.width="25%";
  document.getElementById("filter_text").innerHTML="Hide Filters";
  }
  
  function Hide(){
  document.getElementById("myFilters").style.width="0";
  document.getElementById("column_side1").style.marginLeft="150px";
  document.getElementById("column_side1").style.width="30%";
  document.getElementById("column_side2").style.width="30%";
  document.getElementById("column_side3").style.width="30%";
  document.getElementById("filter_text").innerHTML="Show Filters";
  }


