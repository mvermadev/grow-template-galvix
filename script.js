const fallingBox = document.querySelector(".falling-box");

fallingBox.addEventListener("animationiteration", () => {
  // Reset the animation when it's complete
  fallingBox.style.animation = "none";
  void fallingBox.offsetWidth; // Trigger reflow to restart the animation
  fallingBox.style.animation = "fallAndBounce 3s ease infinite";
});
