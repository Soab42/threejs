const audio = new Audio("./audio/joyful.mp3");

// Attempt to autoplay
audio.play().catch(function (error) {
  console.warn("Autoplay failed:", error);

  // Setup interaction listeners to play audio
  const playAudio = () => {
    audio.play().catch(function (playError) {
      console.error(
        "Error attempting to play audio after user interaction:",
        playError
      );
    });

    // Remove the event listeners after the first interaction
    document.removeEventListener("click", playAudio);
    document.removeEventListener("keydown", playAudio);
  };

  document.addEventListener("click", playAudio);
  document.addEventListener("keydown", playAudio);
});
