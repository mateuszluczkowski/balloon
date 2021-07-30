document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".anim-bg");

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  document.addEventListener("mousemove", (event) => {
    console.log(event);
    const { clientX, clientY } = event;
    elements.forEach((element) => {
      const ratioX = -element.getAttribute("ratioX");
      const ratioY = -element.getAttribute("ratioY");

      const moveX = clientX - centerX;
      const moveY = clientY - centerY;
      element.style.transform = `translate(${moveX * ratioX}px,${
        moveY * ratioY
      }px)`;
    });
  });
});
