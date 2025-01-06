//* First variant

// document.addEventListener('DOMContentLoaded', () => {
//   const accordionContainers = document.querySelectorAll(
//     '.accordion-content_item'
//   );

//   for (let i = 0; i < accordionContainers.length; i++) {
//     accordionContainers[i].addEventListener('click', function () {
//       this.classList.toggle('open');
//     });
//   }
// });

//* Second variant

// document.addEventListener('DOMContentLoaded', () => {
//   const accordionContainer = document.querySelector('.accordion-content');

//   accordionContainer.addEventListener('click', function (event) {
//     const targetElement = event.target.closest('.accordion-content_item');

//     if (targetElement) {
//       targetElement.classList.toggle('open');
//     }
//   });
// });

// * Third variant

document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.querySelector('.accordion-content');

  accordionContainer.addEventListener('click', function (event) {
    const targetElement = event.target.closest('.accordion-content_item');

    if (targetElement) {
      const openItems = accordionContainer.querySelectorAll(
        '.accordion-content_item.open'
      );

      //! Close all open items before opening the new one
      for (let i = 0; i < openItems.length; i++) {
        openItems[i].classList.remove('open');
      }

      targetElement.classList.toggle('open');
    }
  });
});
