<script>
document.addEventListener('DOMContentLoaded', function () {
    const toggleLinks = document.querySelectorAll('.read-toggle-link');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const wrapper = this.closest('.read-more-wrapper');
            const moreText = wrapper.querySelector('.more-text');
            
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'block';
                this.textContent = 'Less';
            } else {
                moreText.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
</script>
