document.addEventListener('DOMContentLoaded', () => {
    const artTimelineButtons = document.querySelectorAll('.art-timeline-navigation button'); 
    const artTimelineContent = document.getElementById('art-timeline-content');

    const artPeriods = window.artPeriods;

    function updateTextColors(element) {
        const textColor = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
        element.querySelectorAll('h3, p').forEach(el => el.style.color = textColor);
    }

    function showArtPeriod(era) {
        const period = artPeriods[era];
        if (period) {
            let content = `<h3 class="text-center">${period.title}</h3><p class="text-center">${period.description}</p>`;
            if (period.artworks && period.artworks.length > 0) {
                content += '<div class="art-grid">';
                period.artworks.forEach(artwork => {
                    content += `
                        <div class="art-item">
                            <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(artwork.alt)}" target="_blank" rel="noopener noreferrer">
                                <img src="${artwork.src}" alt="${artwork.alt}">
                            </a>
                            <p>${artwork.alt}</p>
                        </div>
                    `;
                });
                content += '</div>';
                content += '<p class="art-tip text-center">📚 Tip: Click on any artwork image to explore more on Wikipedia!</p>';
            }
            artTimelineContent.innerHTML = content;
            updateTextColors(artTimelineContent);

            const artGrid = artTimelineContent.querySelector('.art-grid');
            if (artGrid) {
                const imageCount = period.artworks.length;
                if (imageCount === 1) {
                    artGrid.style.gridTemplateColumns = '1fr'; 
                } else if (imageCount === 2) {
                    artGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; 
                } else if (imageCount <= 4) {
                    artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
                } else {
                    artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
                }
            }

        } else {
            artTimelineContent.innerHTML = '<p class="text-center">No information available for this period.</p>';
            artTimelineContent.style.color = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
        }
    }

    artTimelineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            showArtPeriod(era);
            artTimelineButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    updateTextColors(artTimelineContent);
});