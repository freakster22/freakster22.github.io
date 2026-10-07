document.addEventListener("DOMContentLoaded", function() {
  
  // Set Year automatically
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // CONFIGURATION FOR VISITOR COUNT (ABACUS)
  // Create a unique identifier for YOUR site. 
  // Example: "arib-portfolio-hits"
  const counterId = encodeURIComponent("arib-portfolio-v1"); 
  
  // API Endpoint for ABACUS
  // GET request increments count by 1 and returns JSON
  const apiUrl = `https://abacus.jasoncameron.dev/hit/${counterId}/increment`;

  async function fetchVisitorCount() {
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      
      // Update DOM
      const countEl = document.getElementById('count');
      if(countEl && typeof data.count !== 'undefined') {
        // Format number with commas (e.g., 1,234)
        countEl.innerText = data.count.toLocaleString();
      } else if (countEl) {
         countEl.innerText = "0"; // Fallback if data structure changes
      }

    } catch (error) {
      console.error("Error fetching visitor count:", error);
      const countEl = document.getElementById('count');
      if(countEl) countEl.innerText = "—"; // Show dash instead of ugly error text
    }
  }

  fetchVisitorCount();
});