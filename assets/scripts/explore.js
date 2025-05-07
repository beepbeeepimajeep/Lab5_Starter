// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  //load api
  const synth = window.speechSynthesis;
  //voice selectior
  const voiceSelect = document.getElementById('voice-select');
  //Get text from the box
  const textToSpeak = document.getElementById('text-to-speak');
  //button used to play voice
  const talkButton = document.querySelector('button');
  //image of face
  const face = document.querySelector('img');
  let voices = [];

  // Load and populate voices, borrowed from example
  function populateVoiceList() {
    voices = synth.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.value = voices[i].name;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
//used from example, load voices into form
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Handle button click to speak
  talkButton.addEventListener('click', () => {
    //speaking function used in example
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);

    // Set voice
    const selectedVoiceName = voiceSelect.value;
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
      }
    }
    // Change face when speaking
    utterThis.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
    });

    utterThis.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

    synth.speak(utterThis);
  });
}