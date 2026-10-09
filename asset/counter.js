document.addEventListener("DOMContentLoaded", function() {
  
  // Set Year automatically
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const countEl = document.getElementById('count');
  if (!countEl) return;

  const namespace = encodeURIComponent("freakster22.github.io");
  const key = encodeURIComponent("visitors");
  const callbackName = "updatePortfolioVisitorCount";
  const script = document.createElement("script");
  const timeout = window.setTimeout(() => {
    countEl.textContent = "—";
    console.error("Timed out fetching visitor count.");
    script.remove();
    delete window[callbackName];
  }, 10000);

  window[callbackName] = function(data) {
    window.clearTimeout(timeout);
    script.remove();

    if (data && Number.isFinite(data.value)) {
      countEl.textContent = data.value.toLocaleString();
    } else {
      countEl.textContent = "—";
      console.error("Visitor count API returned an invalid response.", data);
    }
    delete window[callbackName];
  };

  script.async = true;
  script.src = `https://abacus.jasoncameron.dev/hit/${namespace}/${key}?callback=${callbackName}`;
  script.onerror = function() {
    window.clearTimeout(timeout);
    countEl.textContent = "—";
    script.remove();
    delete window[callbackName];
    console.error("Failed to load visitor count from Abacus.");
  };
  document.head.appendChild(script);
});
