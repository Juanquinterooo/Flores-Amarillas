document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const gifContainer = document.querySelector(".gif-container img");

  const gifs = [
    { src: "assets/fondo.gif", duration: 3000 }
  ];

  let index = 0;

  function changeGif() {
    gifContainer.src = gifs[index].src;
    setTimeout(() => {
      index = (index + 1) % gifs.length; 
      changeGif(); 
    }, gifs[index].duration);
  }

  changeGif(); 
  document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.innerHTML = "❤️"; 
        // Posición aleatoria
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 y 5 segundos

        document.body.appendChild(heart);

        // Eliminar corazones después de que desaparezcan
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones cada 500ms
    setInterval(createHeart, 500);
});
});
