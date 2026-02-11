document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = navLinks.querySelectorAll("a");

    // 1. Contact Form Submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        const nameInput = form.querySelector('input[type="text"]').value;
        if (nameInput) {
            alert(`Thanks for reaching out, ${nameInput}! I'll get back to you soon.`); 
            form.reset(); 
        } else {
            alert("Please fill out all fields.");
        }
    });

    // 2. Mobile Menu Toggle Functionality
    // This function handles both opening and closing (toggling) the menu
    const toggleMenu = () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    };

    menuToggle.addEventListener("click", toggleMenu); // Event listener for the hamburger icon

    // 3. Smooth Scrolling and Menu Closing
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Stop default jump behavior

            // Close the menu if it's active (on mobile)
            if (navLinks.classList.contains("active")) {
                toggleMenu(); // Closes the menu by removing the 'active' class
            }

            // Get the target section ID (e.g., #hero, #about)
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });
});