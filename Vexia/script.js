document.addEventListener('DOMContentLoaded', () => {
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    function showCartNotification() {
        const notification = document.getElementById('cart-notification');
        notification.style.display = 'block'; 
        setTimeout(() => {
            notification.style.display = 'none'; 
        }, 3000);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', showCartNotification);
    });

    window.onscroll = changeHeaderColor;

    function changeHeaderColor() {
        const header = document.querySelector('header');
        const sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
