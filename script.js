const videos = document.querySelectorAll("video");

function restartVideo(v) {
    v.pause();
    v.currentTime = 6;
    v.play();
};

for (const video of videos) {
    video.onplay = () => {
        video.currentTime = 6;
        setTimeout(restartVideo, 13000, video);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    const navItems = document.querySelector('.nav-items');
    const laurels = document.querySelector('.laurels');

    // Check for saved user preference, if any, on load of the website
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        navItems.classList.add('dark-mode');
        if (laurels !== null) laurels.classList.add('dark-mode');
        toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', () => {

        navItems.classList.toggle('dark-mode', toggleButton.checked);
        if (laurels !== null) laurels.classList.toggle('dark-mode', toggleButton.checked);
        document.body.classList.toggle('dark-mode', toggleButton.checked);


        // Save the user preference in local storage
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled);
    });
});
