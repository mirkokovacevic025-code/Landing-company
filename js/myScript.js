document.getElementById('sendMessage').addEventListener('click', () => {
  const btn = document.getElementById('sendMessage');

  btn.classList.remove('animate__animated', 'animate__backOutDown');
  void btn.offsetWidth;
  btn.classList.add('animate__animated', 'animate__backOutDown');
  btn.addEventListener('animationend', () => {
    btn.style.display = 'none';
  }, { once: true });
});