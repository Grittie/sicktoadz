document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const audio = document.getElementById('audio');
    
    textElement.addEventListener('click', () => {
        // Change background and text when clicked
        document.body.style.backgroundImage = 'url("monkey.gif")';
        textElement.textContent = "how it feels when sick toadz is whole.";
        textElement.style.cursor = 'default';
        
        // Play audio
        audio.play();
        
        // Once audio is done, change background and text back
        audio.addEventListener('ended', () => {
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = 'black';
            textElement.textContent = "we are so back.";
        });
    });
});
