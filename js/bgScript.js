// Функция для обработки события прокрутки
function handleScroll() {
    // Рассчитываем значение размытия в зависимости от прокрутки
    let blurValue = Math.min(10, (window.scrollY / 150));
    // Применяем размытие к фоновому изображению
    document.querySelector('#bg_img').style.filter = `blur(${blurValue}px)`;
}
// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', handleScroll);