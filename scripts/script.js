
window.addEventListener('DOMContentLoaded', () => {
    fetch('/menu.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('sidebar-placeholder').innerHTML = data;

            addMenuListeners();
        })
        .catch(error => console.error('Hiba a menü betöltésekor:', error));

});


function addMenuListeners() {
    const toggles = document.querySelectorAll('.menu-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
}