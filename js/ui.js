document.addEventListener('DOMContentLoaded', () => {
    
    const loader = document.getElementById('loader');
    if (loader) {
        
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            
            loader.addEventListener('transitionend', () => loader.remove());
        }, 500); 
    }

    
    const backToTopBtn = document.getElementById('top-btn');
    if (backToTopBtn) {
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { 
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                
                setTimeout(() => {
                    if (window.scrollY <= 300) { 
                        backToTopBtn.style.display = 'none';
                    }
                }, 300); 
            }
        });

        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});