const slider = document.getElementById('speed-slider');
const valueDisplay = document.getElementById('speed-value');
const root = document.documentElement;

// Update CSS variable when slider moves
slider.addEventListener('input', (e) => {
  const duration = parseFloat(e.target.value);
  root.style.setProperty('--duration', `${duration}s`);
  valueDisplay.textContent = `${duration.toFixed(1)}s`;
});

// Initialize display
valueDisplay.textContent = `${parseFloat(slider.value).toFixed(1)}s`;
