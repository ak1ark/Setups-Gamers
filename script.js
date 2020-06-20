$(".menu-toggle-btn").click(function() {
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});