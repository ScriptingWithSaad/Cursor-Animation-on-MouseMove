document.addEventListener('mousemove', function(e) {
    // Create a new span element
    const span = document.createElement('span');
    
    // Set the position of the span element to the mouse position
    span.style.left = e.pageX + 'px';
    span.style.top = e.pageY + 'px';
    
    // Append the span element to the body
    document.body.appendChild(span);
    
    // Remove the span element after animation completes
    setTimeout(() => {
        span.remove();
    }, 2000); // Match this with your CSS animation duration
});

// Optional: Touch support for mobile devices
document.addEventListener('touchmove', function(e) {
    // Prevent default touch behavior
    e.preventDefault();
    
    // Get touch position
    const touch = e.touches[0];
    
    // Create a new span element
    const span = document.createElement('span');
    
    // Set the position of the span element to the touch position
    span.style.left = touch.pageX + 'px';
    span.style.top = touch.pageY + 'px';
    
    // Append the span element to the body
    document.body.appendChild(span);
    
    // Remove the span element after animation completes
    setTimeout(() => {
        span.remove();
    }, 2000); // Match this with your CSS animation duration
});