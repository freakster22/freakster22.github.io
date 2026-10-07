var applyTheme = function applyTheme(mode) {
    var root = document.documentElement;
    var themeToggle = document.getElementById("theme-toggle");
  
    root.setAttribute("color-mode", mode);
    localStorage.setItem("color-mode", mode);
  
    if (themeToggle) {
      themeToggle.checked = mode === "dark";
    }
  
    var chartIframe = document.getElementById("chart");
    if (chartIframe && chartIframe.contentWindow) {
      chartIframe.contentWindow.postMessage({ colorMode: mode }, "*");
    }
  };
  
  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      applyTheme(themeToggle.checked ? "dark" : "light");
    });
  }
  
  var initialMode = localStorage.getItem("color-mode") || "light";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("color-mode")) {
    initialMode = "dark";
  }
  applyTheme(initialMode);