let lastScrollPosition = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // 下スクロール時にヘッダーを隠す
        header.style.transform = 'translateY(-100%)';
    } else {
        // 上スクロール時にヘッダーを表示
        header.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScrollPosition;
});
