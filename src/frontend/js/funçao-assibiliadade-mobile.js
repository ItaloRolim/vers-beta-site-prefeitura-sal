
    document.addEventListener('DOMContentLoaded', function () {
        const mobileAccessibilityToggle = document.getElementById('mobile-toggleAccessibilityMenu');
        const mobileAccessibilityMenu = document.getElementById('mobile-accessibility-menu');

        mobileAccessibilityToggle.addEventListener('click', function () {
            mobileAccessibilityMenu.classList.toggle('hidden');
        });
    });
