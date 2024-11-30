// Simple pop-up suggestion system
window.onload = function() {
    const mapElements = document.querySelectorAll('.map-pin'); // Assuming you have pins on the map

    mapElements.forEach(pin => {
        pin.addEventListener('click', () => {
            const info = document.createElement('div');
            info.classList.add('popup');
            info.innerHTML = `<p>Explore more about this location!</p>`;
            document.body.appendChild(info);
        });
    });

    // Close pop-up on click outside
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('map-pin')) {
            const popups = document.querySelectorAll('.popup');
            popups.forEach(popup => popup.remove());
        }
    });
};