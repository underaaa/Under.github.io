var screenWidth = window.innerWidth;

const x = 40;

const y = 100;

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  if (screenWidth > 650) {
    document.getElementById("mySidepanel").style.width = (x + "%");
  }
  else {
    document.getElementById("mySidepanel").style.width = (y + "%");
  }
}
  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

const mySidepanel = document.getElementById("mySidepanel")

const resizeObserver = new ResizeObserver(() => { sidePanelResized = true; });

resizeObserver.observe(mySidepanel);

document.getElementById("mySidepanel").addEventListener("click", function openNav() {
  if (sidePanelResized) {
    openNav();
  }
});

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
});
