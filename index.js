document.addEventListener('DOMContentLoaded', function() {
  const bars = [
    { id: 'progressBar1', textId: 'progressText1', targetWidth: 100 },
    { id: 'progressBar2', textId: 'progressText2', targetWidth: 100 },
    { id: 'progressBar3', textId: 'progressText3', targetWidth: 100 }
  ];

  bars.forEach(barInfo => {
    const progressBar = document.getElementById(barInfo.id);
    const progressText = document.getElementById(barInfo.textId);
    let currentWidth = 0;
    const increment = barInfo.targetWidth / 100; 

    const animateProgress = setInterval(() => {
      if (currentWidth >= barInfo.targetWidth) {
        clearInterval(animateProgress);
      } else {
        currentWidth += increment;
        progressBar.style.width = currentWidth + '%';

      }
    }, 20); 
  });
});

console.log("Amador Baggerly");