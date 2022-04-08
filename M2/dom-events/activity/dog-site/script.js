const articles = document.querySelectorAll('article p.likes');

for (let i = 0; i < articles.length; i++) {
  const increment = articles[i].querySelector('.increment');
  const decrement = articles[i].querySelector('.decrement');

  increment.addEventListener('click', (e) => {
    const hearts = articles[i].querySelector('.hearts');
    const heartsLen = hearts.textContent.length;
    if (heartsLen >= 1 && heartsLen <= 2) {
      hearts.textContent += '❤';
    }
  });

  decrement.addEventListener('click', (e) => {
    const hearts = articles[i].querySelector('.hearts');
    const heartsLen = hearts.textContent.length;
    if (heartsLen < 1) {
      hearts.textContent = '❤';
    } else {
      hearts.textContent -= '❤';
    }
  });
}
