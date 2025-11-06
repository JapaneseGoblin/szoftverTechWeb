// Amikor az ablak betöltődik...
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lépés: Töltsük be a menüt
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            // Beillesztjük a menu.html tartalmát a helyőrzőbe
            document.getElementById('sidebar-placeholder').innerHTML = data;
            
            // 2. Lépés: Csak a menü betöltése UTÁN adjuk hozzá az eseményfigyelőket
            // (Különben nem találná meg a gombokat)
            addMenuListeners();
        })
        .catch(error => console.error('Hiba a menü betöltésekor:', error));

});

// Ezt a funkciót csak azután hívjuk meg, hogy a menü betöltődött
function addMenuListeners() {
    // Megkeressük az összes menü-lenyitó gombot (már a betöltött menüben)
    const toggles = document.querySelectorAll('.menu-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            
            // Egyszerűbb váltogatás (toggle)
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
}