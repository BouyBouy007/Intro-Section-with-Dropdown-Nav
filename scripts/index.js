const dropdownButtons = document.querySelectorAll('.dropdown');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const downArrow = button.querySelector('.arrow-down-icon');
    const upArrow = button.querySelector('.arrow-up-icon');
    const menu = button.querySelector('.menu');

    downArrow.classList.toggle('hide-element');
    upArrow.classList.toggle('display-element');
    button.classList.toggle('activate-button');
    menu.classList.toggle('display-element');
  });
});