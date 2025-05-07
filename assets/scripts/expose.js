// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //DOM element references
  /* even though const type we can still use or modify the element 
  it points to */
  const hornSelect = document.getElementById('horn-select');
  //select the first <img> element inside the #expose element in .css
  const hornImage = document.querySelector('#expose img');
  //finds the first audio tag in expose.html
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti();
 
  //horn
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = `${selected} image`;
    hornAudio.src = `assets/audio/${selected}.mp3`;
  });
  
  //When button is clocked play horn and if it is the party horn add confetti
  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
  

  //When the volume slider is being dragged change the volume
  volumeSlider.addEventListener('input', () => {
    hornAudio.volume = volumeSlider.value / 100;
    
    //Get volume level
    const volume = volumeSlider.value; 
    // Update the icon based on the volume
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume >= 1 && volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
  
}