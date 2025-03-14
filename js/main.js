const snbBtn = document.querySelector('#snb .btn-menu');
const subMenu = document.querySelector('#snb .sub-menu');

snbBtn.addEventListener('click', () => {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});

// git add .
// git statua
// git commit -m "20250314 main.js 기능 추가"
// git push
