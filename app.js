const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

//
const workout = [
    'Lets start workout now , please select the following workout. one-bench press. two-bicept curl. three-shoulder press',
];

const selection = [
    'start the select workout now',
    'start now'
];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can to microphoneee');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I dont know what you said';

    if(message.includes('I want to start workout')){
        const finalText = workout[Math.floor(Math.random() * workout.length)];
        speech.text = finalText;
    }
    
   
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}