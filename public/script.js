document.addEventListener('DOMContentLoaded', () => {

    // 1. Initial Page Load Animation (Fade in content)
    document.body.classList.add('page-loaded');

    // 2. Intercept navigation for smooth page transitions
    const transitionLinks = document.querySelectorAll('a.transition-link');

    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only intercept internal links that aren't opening new tabs
            if (link.hostname === window.location.hostname && !link.target) {
                e.preventDefault();
                const targetUrl = link.href;

                // Add fade-out class to body
                document.body.classList.remove('page-loaded');
                document.body.classList.add('page-exiting');

                // Wait for CSS transition to finish before actually navigating
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400); // Wait 400ms (matches CSS transition time)
            }
        });
    });

    // 3. Navbar Hide/Show on Scroll (Still relevant for longer pages)
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Downscroll
                navbar.classList.add('hidden');
            } else {
                // Upscroll
                navbar.classList.remove('hidden');
            }
            lastScrollTop = scrollTop;
        }, { passive: true });
    }
});
