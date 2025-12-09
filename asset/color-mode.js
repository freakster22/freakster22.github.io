var toggleColorMode = function toggleColorMode(e) {
    var isLight = e.currentTarget.classList.contains("sun");
    
    // Change color mode first
    if (isLight) {
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("color-mode", "light");
      
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
    } else {
      document.documentElement.setAttribute("color-mode", "dark");
      localStorage.setItem("color-mode", "dark");
      
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
    }
  };

  // Get the buttons in the DOM
  var toggleColorButtons = document.querySelectorAll(".color-mode-btn");
  
  // Set up event listeners
  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });