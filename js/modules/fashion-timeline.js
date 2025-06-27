document.addEventListener('DOMContentLoaded', () => {
    
    const fashionTimelineButtons = document.querySelectorAll('.fashion-timeline-navigation button');
    const fashionTimelineContent = document.getElementById('fashion-timeline-content');

    
    const fashionPeriods = window.fashionEras

    
    function updateTextColors(element) {
        
        const textElements = element.querySelectorAll('h4, p, li, strong'); 
        const textColor = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--text-color)';
        const headingColor = document.body.classList.contains('dark-theme') ? 'var(--primary-color-dark)' : 'var(--primary-color)';

        textElements.forEach(el => {
            if (el.tagName === 'H4') { 
                el.style.color = headingColor;
            } else {
                el.style.color = textColor;
            }
        });
    }

    
    function showFashionPeriod(era) {
        const period = fashionPeriods[era];
        if (period) {
            let contentHTML = `
                <div class="era-details">
                    <h4>${period.era}</h4>
                    <p class="era-description">${period.description}</p>
            `;

            
            if (period.image && period.image.src) { 
                contentHTML += `
                    <div class="fashion-single-image">
                        <img src="${period.image.src}" alt="${period.image.caption || period.era}" loading="lazy">
                        <p class="fashion-caption">${period.image.caption || 'No caption available.'}</p>
                    </div>
                `;
            }

            contentHTML += `</div>`; 

            fashionTimelineContent.innerHTML = contentHTML;
            updateTextColors(fashionTimelineContent); 

        } else {
            fashionTimelineContent.innerHTML = '<p class="text-center timeline-placeholder-text">No information available for this period. Please select another era.</p>';
            
            fashionTimelineContent.querySelector('.timeline-placeholder-text').style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--text-color)';
        }
    }

    
    fashionTimelineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            showFashionPeriod(era);
            
            
            fashionTimelineButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    
    updateTextColors(fashionTimelineContent);

    
    document.body.addEventListener('themeChange', () => {
        
        const currentActiveEra = document.querySelector('.fashion-timeline-navigation button.active');
        if (currentActiveEra) {
            showFashionPeriod(currentActiveEra.getAttribute('data-era'));
        } else {
            
            updateTextColors(fashionTimelineContent);
        }
    });

    
    
    const defaultEra = 'ancient';
    const defaultButton = document.querySelector(`.fashion-timeline-navigation button[data-era="${defaultEra}"]`);
    if (defaultButton) {
        defaultButton.click(); 
    }
});