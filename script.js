const toggle_btn = document.querySelector(".toggle_btn");
const links = document.querySelector(".navbar ul");

toggle_btn.addEventListener("click", () => {
    console.log("Toggle button clicked"); // Debug log to verify functionality
    toggle_btn.classList.toggle("active"); // Add/remove 'active' class for toggle animation
    links.classList.toggle("active"); // Show/hide the navigation menu
});


//awit
// Intersection Observer to add "show" class
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Select all elements with the "about-me" class
const aboutmeElements = document.querySelectorAll('.about-me, .introduction, .skills, .home-info, .services-section-title, .stat, .basics, .section-title, .section-subtitle, .card, .contacts-body');

// Attach observer to each element
aboutmeElements.forEach((el) => observer.observe(el));

//glow
document.addEventListener("DOMContentLoaded", () => {
    const target_bg = document.querySelector(".target_bg");

    const moveRadialBGColor = (e) => {
        const clientX = e.clientX; // Get mouse X-coordinate
        const clientY = e.clientY; // Get mouse Y-coordinate

        // Set the radial gradient dynamically
        target_bg.style.background = `radial-gradient(300px at ${clientX}px ${clientY}px, rgba(126, 21, 255, 0.25), transparent 90%)`;
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", moveRadialBGColor, { passive: true });
});


//dl
document.getElementById("download-link").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "download/resume.pdf";  // File path
    link.download = "resume.pdf";  // Optional: You can change the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });