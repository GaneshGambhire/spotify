document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.toggle-icon');

        // Toggle visibility
        answer.classList.toggle('show');

        // Change icon
        if (answer.classList.contains('show')) {
            icon.textContent = 'v'; // Minus icon
        } else {
            icon.textContent = '^'; // Plus icon
        }
    });
});