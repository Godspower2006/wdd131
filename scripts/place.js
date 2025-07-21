// static values
const temp = 8;      // °C
const speed = 10;    // km/h

// 1‑line wind chill formula (metric)
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16;
}

// Only compute if T ≤10°C and V >4.8 km/h
document.addEventListener("DOMContentLoaded", () => {
  const wcEl = document.getElementById("windchill");
  if (temp <= 10 && speed > 4.8) {
    wcEl.textContent = calculateWindChill(temp, speed).toFixed(1) + " °C";
  } else {
    wcEl.textContent = "N/A";
  }

  // Footer year & last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modified").textContent = document.lastModified;
});
