
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces",    averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits",  averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product <select> dynamically
function populateProducts() {
  const select = document.getElementById('product');
  // Sort alphabetically by name
  products.sort((a, b) => a.name.localeCompare(b.name));
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.name} (${p.averagerating.toFixed(1)}★)`;
    select.appendChild(opt);
  });
}

// Handle form submission: track via localStorage and show confirmation
function handleFormSubmit(event) {
  // Increment review count in localStorage
  let count = parseInt(localStorage.getItem('reviewCount') || '0', 10);
  count += 1;
  localStorage.setItem('reviewCount', count);

  // Store the count in sessionStorage to display on confirmation page
  sessionStorage.setItem('latestReviewCount', count);
  // Let the form submit to review.html
}

// Initialize page behaviors
document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  const form = document.getElementById('review-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});
