// Populate the current year in the footer
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Populate the last modified timestamp in the footer
const lastModP = document.getElementById('lastModified');
if (lastModP) {
  lastModP.textContent = 'Last modification: ' + document.lastModified;
}
