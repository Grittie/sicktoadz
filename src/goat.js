document.addEventListener('DOMContentLoaded', () => {
    const leFunny = document.getElementById('lole');
    const goatScream = document.getElementById('dagoat');

    leFunny.addEventListener('click', () => {
        goatScream.currentTime = 0;
        goatScream.play();
        // yummers...
        document.body.style.backgroundImage = 'url("../assets/yummers.gif")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        goatScream.addEventListener('ended', () => {
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = 'white';
        });
    });
});