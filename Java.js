const image = document.getElementById('imageToMove');
let topPosition = 150;
let leftPosition = 1350;

// Event listener to detect arrow key presses
window.addEventListener('keydown', function(event) {
  const step = 2; // Number of pixels to move the image

  if (event.ctrlKey && event.key === "0") {
    // Do Something, may be an 'Undo' operation
    leftPosition -= step;
  }
  //switch(event.key) {
    //case 'ArrowUp':
      //topPosition -= step;
      //break;
    //case 'ArrowDown':
      //topPosition += step;
      //break;
    //case 'ArrowLeft':
      //leftPosition -= step;
      //break;
    //case 'ArrowRight':
      //leftPosition += step;
      //break;
  //}
  //Above moves "imageToMove" with arrow keys

  // Update the position of the image
  image.style.top = `${topPosition}px`;
  image.style.left = `${leftPosition}px`;
});