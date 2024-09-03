/* ********************************************************** */
// Code pour fermer la popup
/* ********************************************************** */

 $(document).ready(function() {
    // Vérifie si la popup a déjà été affichée lors de cette session
    if (!sessionStorage.getItem('popupDisplayed')) {
        $('.popup-overlay').fadeIn();
        sessionStorage.setItem('popupDisplayed', 'true'); // Marque la popup comme affichée
    }

    // Ferme la popup lorsque l'utilisateur clique sur le bouton de fermeture
    $('.popup-close').click(function() {
        $('.popup-overlay').fadeOut();
    });

    // Option : Ferme la popup si l'utilisateur clique en dehors de la boîte
    $('.popup-overlay').click(function(event) {
        if ($(event.target).closest('.popup-salon').length === 0) {
            $(this).fadeOut();
        }
    });
}); 
