// Intercepter le submit du formulaire pour rediriger vers results.html avec les paramètres dans l'URL
document.getElementById('selectionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const filiere = document.getElementById('filiere').value;
    const concours = document.getElementById('concours').value;
    const theme = document.getElementById('theme').value;
    // Redirection vers results.html avec les critères en paramètres GET
    window.location.href = `results.html?filiere=${encodeURIComponent(filiere)}&concours=${encodeURIComponent(concours)}&theme=${encodeURIComponent(theme)}`;
});