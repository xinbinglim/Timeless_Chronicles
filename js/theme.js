document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const playMusicBtn = document.getElementById('play-music-btn');
    const bgMusic = document.getElementById('bg-music');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.getElementById('volume-label');

    
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);

    if (toggleThemeBtn) {
        if (currentTheme === 'dark-theme') {
            toggleThemeBtn.innerHTML = '☀️ Light Theme'; 
        } else {
            toggleThemeBtn.innerHTML = '🌙 Dark Theme'; 
        }

        toggleThemeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                toggleThemeBtn.innerHTML = '☀️ Light Theme';
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
                toggleThemeBtn.innerHTML = '🌙 Dark Theme';
            }
        });
    }

    
    let isPlaying = localStorage.getItem('musicPlaying') === 'true'; 

    
    const savedVolume = localStorage.getItem('musicVolume');
    if (volumeSlider) {
        volumeSlider.value = savedVolume !== null ? savedVolume : 0.5;
        if (bgMusic) {
            bgMusic.volume = volumeSlider.value;
        }
        if (volumeLabel) {
            volumeLabel.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}%`;
        }

        volumeSlider.addEventListener('input', () => {
            if (bgMusic) {
                bgMusic.volume = volumeSlider.value;
            }
            localStorage.setItem('musicVolume', volumeSlider.value);
            if (volumeLabel) {
                volumeLabel.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}%`;
            }
        });
    }

    
    if (bgMusic && isPlaying) {
        bgMusic.play().then(() => {
            if (playMusicBtn) {
                playMusicBtn.textContent = '⏸️ Pause Music'; 
            }
        }).catch(e => {
            console.warn("Autoplay was prevented:", e);
            
            isPlaying = false;
            if (playMusicBtn) {
                playMusicBtn.textContent = '🎵 Play Music';
            }
            localStorage.setItem('musicPlaying', 'false');
        });
    }


    if (playMusicBtn && bgMusic) {
        playMusicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    playMusicBtn.textContent = '⏸️ Pause Music';
                    isPlaying = true;
                    localStorage.setItem('musicPlaying', 'true');
                }).catch(e => {
                    console.error("Failed to play music:", e);
                    
                });
            } else {
                bgMusic.pause();
                playMusicBtn.textContent = '🎵 Play Music';
                isPlaying = false;
                localStorage.setItem('musicPlaying', 'false');
            }
        });
    }
});