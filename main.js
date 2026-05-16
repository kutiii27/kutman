// Ждем загрузки DOM дерева
document.addEventListener('DOMContentLoaded', () => {
    console.log("Сайт КУМУ успешно инициализирован!");

    // Пример добавления обработчика клика на кнопки
    const primaryBtn = document.querySelector('.btn-primary, .bg-emerald-500');

    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            alert('Добро пожаловать в Кыргызско-Узбекский Международный Университет!');
        });
    }
});