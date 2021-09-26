function myFunction() {
    document.getElementById("category_submenu").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.icon_link')) {
      var dropdowns = document.getElementsByClassName("sub-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }