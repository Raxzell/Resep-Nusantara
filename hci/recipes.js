document.addEventListener('DOMContentLoaded', function() {
    const recipesContainer = document.getElementById('recipesContainer');
    
    function loadRecipes() {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const currentUser = "Fredelica"; // Ganti dengan sistem auth jika ada
        
        // Filter resep milik user saat ini
        const userRecipes = recipes.filter(recipe => recipe.author.name === currentUser);
        
        if (userRecipes.length === 0) {
            recipesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-utensils"></i>
                    <p>Anda belum memiliki resep</p>
                    <a href="upload.html" class="btn-upload">Upload Resep Pertama Anda</a>
                </div>
            `;
            return;
        }
        
        recipesContainer.innerHTML = '';
        
        userRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <div class="recipe-img">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.cookingTime} menit</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.servings} porsi</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="btn-edit" onclick="editRecipe('${recipe.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn-delete" onclick="deleteRecipe('${recipe.id}')">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                </div>
            `;
            recipesContainer.appendChild(recipeCard);
        });
    }
    
    // Fungsi untuk menghapus resep
    window.deleteRecipe = function(id) {
        if (confirm('Apakah Anda yakin ingin menghapus resep ini?')) {
            const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
            const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
            localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            loadRecipes();
            alert('Resep berhasil dihapus');
        }
    }
    
    // Fungsi untuk mengedit resep (bisa dikembangkan)
    window.editRecipe = function(id) {
        alert('Fitur edit akan dikembangkan lebih lanjut');
        // Bisa diarahkan ke halaman upload.html dengan parameter id
    }
    
    // Muat resep saat halaman dimuat
    loadRecipes();
});