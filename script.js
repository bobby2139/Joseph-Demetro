// Smooth scroll for navigation with offset for header
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Get the height of the header
        const headerOffset = document.querySelector('header').offsetHeight;
        const sectionPosition = targetSection.offsetTop - headerOffset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });
});

// Modal functionality for viewing larger images
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const imgSrc = element.previousElementSibling.src;

    modal.style.display = 'block';
    modalImg.src = imgSrc;

    // Ensure image scales properly based on window size
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90vh'; // Limits height to 90% of the viewport
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal when clicking on the close button (×)
document.querySelector('.close').addEventListener('click', closeModal);
