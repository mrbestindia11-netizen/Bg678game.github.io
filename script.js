// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("BG678 Landing Page Loaded!");

    // Example: Add a simple scroll-to-top button (if needed for long pages)
    // You'd also need HTML for the button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        scrollToTopBtn.addEventListener("click", () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // You can add more complex JS here later:
    // - Form validation (beyond basic 'required' in HTML)
    // - Dynamic content loading
    // - Analytics tracking (e.g., Google Analytics event tracking for CTA clicks)
    // - Interactive bonus calculators, etc.
});

