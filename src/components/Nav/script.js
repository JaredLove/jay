

// NAV bar Hamburger
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    // Get scroll position values
    const trigger = window.scrollY;
    // The top position when we change the opacity
    const navbarHeight = navbar.clientHeight;

    if (trigger >= navbarHeight) {
      navbar.setAttribute('style', 'background-color: hsl(0 100% 100% / 0.7)');
    } else {
      navbar.setAttribute('style', 'background-color: hsl(0 100% 100% / 0.7)');
    }
  });
});
