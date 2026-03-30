document.querySelectorAll('.book-small').forEach(button => {
    button.addEventListener('click', () => {
        const roomName = button.closest('.room-card').querySelector('h3').innerText;
        alert(`Redirecting to secure booking for: ${roomName}`);
        // In a real site, you would use: window.location.href = 'booking.html';
    });
});