document.addEventListener('DOMContentLoaded', function() {
    const triggerSection = document.getElementById('triggerSection');
    const fixedImage = document.getElementById('scrollingImage');
    const viewportHeight = triggerSection.scrollHeight;
    const desiredTriggerPosition = viewportHeight - 500;

    // Function to update the position of the fixed image based on scroll
    function updateFixedImagePosition() {
        const scrollPosition = window.scrollY;
        let lastScrollTop = 0;

        // Check if the scroll position is below the desired trigger position
        if (scrollPosition >= desiredTriggerPosition) {
                const scrollPosition = window.scrollY;
                const scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up'; // Determine scroll direction
            
                // Calculate the target position based on scroll direction and intensity
                let targetPosition = scrollPosition * .80; // Adjust multiplier for desired speed
            
                // Apply exponential scaling for increased speed
                if (scrollDirection === 'down') {
                    targetPosition = -Math.pow(targetPosition, 1.01); // Exponential decrease for upward movement
                } else {
                    targetPosition = Math.pow(-targetPosition, 1.01); // Exponential increase for downward movement
                }
            
                // Apply the target position as translateY transform
                scrollingImage.style.transform = `translateY(${targetPosition}px)`;
            
                // Update last scroll position
                lastScrollTop = scrollPosition;
        } else {
            // Reset the transform when scroll position is above the trigger position
            fixedImage.style.transform = 'translateY(0)';
        }

        // Request animation frame to continuously update the image position
        requestAnimationFrame(updateFixedImagePosition);
    }

    // Event listener for scroll events
    window.addEventListener('scroll', function() {
        updateFixedImagePosition();
    });

    // Initial call to update the fixed image position on page load
    updateFixedImagePosition();
});

