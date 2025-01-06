// Animation de fondu savoyarde X)
window.onload = () => {
    const textIndex = document.querySelector('.textindex');
    textIndex.style.opacity = 0;
  
    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.01;
      textIndex.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 10);
  };  

// Je test des trucs "RGB"
window.onload = () => {
    const textpub = document.querySelector('.textpub');
    textpub.style.opacity = 0;
  
    let opacity = 0;
    const fadeIn = setInterval(() => {
      opacity += 0.01;
      textpub.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fadeIn);
    }, 10);
  }; 

// Zoom  qui agrandi l'image quand je passe la souris dessus
document.addEventListener('DOMContentLoaded', () => {
    const bannerImage = document.querySelector('.banner-image');
  
    bannerImage.addEventListener('mouseover', () => {
      bannerImage.style.transform = 'scale(1.3)';
    });
  
    bannerImage.addEventListener('mouseout', () => {
      bannerImage.style.transform = 'scale(1)';
    });
  });

// Le titre avec l'ID "reverse-title"
const title = document.getElementById('reverse-title');
let inverted = false; // État initial de l'inversion

// Inverser le sens du texte
function toggleReverse() {
    inverted = !inverted; // Inverser l'état
    if (inverted) {
        title.style.transform = 'scaleX(-1)'; // L'inversion horizontale
    } else {
        title.style.transform = 'scaleX(1)'; // Réinitialiser
    }
}

// Clic pour inverser le titre
title.addEventListener('click', toggleReverse);

// Inversion auto par sec
setInterval(() => {
    inverted = !inverted; // Changer l'état d'inversion
    title.style.transform = inverted ? 'scaleX(-1)' : 'scaleX(1)';
}, 1000); // Intervalle de 1 sec
