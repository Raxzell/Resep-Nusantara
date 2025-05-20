document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    // Fungsi pencarian
    function searchRecipes(query) {
        query = query.toLowerCase().trim();
        if (!query) return;

        // Ambil semua resep dari localStorage
        const allRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        
        // Filter resep berdasarkan query
        const results = allRecipes.filter(recipe => {
            return (
                recipe.title.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
                recipe.steps.some(step => step.toLowerCase().includes(query))
            );
        });

        // Simpan hasil pencarian ke localStorage
        localStorage.setItem('searchResults', JSON.stringify(results));
        
        // Redirect ke halaman hasil pencarian
        window.location.href = 'search-result.html' + encodeURIComponent(query);
    }

    // Event listener untuk tombol search
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        searchRecipes(searchInput.value);
    });

    // Event listener untuk tekan Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchRecipes(searchInput.value);
        }
    });
});