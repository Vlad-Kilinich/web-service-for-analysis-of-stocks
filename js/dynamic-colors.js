document.addEventListener('DOMContentLoaded', function() {
    const marketChanges = document.querySelectorAll('.market-change');

    marketChanges.forEach(function(change) {
        const value = parseFloat(change.textContent.replace('%', ''));
        if (value < 0) {
            change.classList.add('down');
            change.classList.remove('up');
        } else {
            change.classList.add('up');
            change.classList.remove('down');
        }
    });
});
