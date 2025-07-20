
document.addEventListener("DOMContentLoaded", function() {
  var screenWidth = window.innerWidth;
  const x = 40;
  const y = 100;

  window.openNav = function() {
    var panel = document.getElementById("mySidepanel");
    if (!panel) return;
    if (window.innerWidth > 650) {
      panel.style.width = x + "%";
    } else {
      panel.style.width = y + "%";
    }
  };

  window.closeNav = function() {
    var panel = document.getElementById("mySidepanel");
    if (!panel) return;
    panel.style.width = "0";
  };

  window.addEventListener("resize", function() {
    screenWidth = window.innerWidth;
  });
});


