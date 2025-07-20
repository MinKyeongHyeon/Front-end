let position = 0; //박스 위치
const box = document.querySelector('.box');
//키보드 입력 이벤트
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    position += 5;
    box.style.transform = `tanslate(${position}px)`;
  }
  if (e.key === 'ArrowLeft') {
    position -= 5;
    box.style.transform = `translate(${position}px)`;
  }
});
