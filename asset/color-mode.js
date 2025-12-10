var toggleColorMode = function toggleColorMode(e) {
    var isLight = e.currentTarget.classList.contains("sun");
    var newMode = isLight ? "light" : "dark";
    
    // Change color mode first
    document.documentElement.setAttribute("color-mode", newMode);
    localStorage.setItem("color-mode", newMode);
    
    // Send message to iframe to update its theme too
    var chartIframe = document.getElementById("chart");
    if (chartIframe && chartIframe.contentWindow) {
      chartIframe.contentWindow.postMessage({ colorMode: newMode }, "*");
    }
    
    // Add jump animation to the moon button that will become visible
    setTimeout(function() {
      var moonBtn = document.querySelector(".color-mode-btn.moon");
      if (moonBtn) {
        moonBtn.classList.add("jump");
        setTimeout(function() {
          moonBtn.classList.remove("jump");
        }, 500);
      }
    }, 50);
    
    // Add jump animation to the sun button that will become visible
    setTimeout(function() {
      var sunBtn = document.querySelector(".color-mode-btn.sun");
      if (sunBtn) {
        sunBtn.classList.add("jump");
        setTimeout(function() {
          sunBtn.classList.remove("jump");
        }, 500);
      }
    }, 50);
  };

  // Get the buttons in the DOM
  var toggleColorButtons = document.querySelectorAll(".color-mode-btn");
  
  // Set up event listeners
  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });