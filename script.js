
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', () => {
            navList.classList.toggle('active');

            // Toggle Icon
            const icon = mobileBtn.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Optional: Add sticky header class on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

});
