
function Popupremove() {
    const blockingPopup = document.querySelector('xpromo-nsfw-blocking-modal');
    if (blockingPopup) {
      blockingPopup.remove();
    }
  }
  

  window.addEventListener('load', Popupremove);
  