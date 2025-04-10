// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Expand Profile Photo on Click
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('click', () => {
    profilePhoto.classList.toggle('profile-photo-expanded');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adjust Project Cards for Full Description Display
document.querySelectorAll('.project-card p').forEach(desc => {
    desc.style.maxHeight = 'none'; // Ensures full visibility
    desc.style.overflow = 'visible';
});

// Dynamic Certificate Grid Resizing for Better Layout
window.addEventListener('resize', () => {
    const grid = document.querySelector('.certificate-grid');
    if (window.innerWidth < 768) {
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    } else {
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    }
});
