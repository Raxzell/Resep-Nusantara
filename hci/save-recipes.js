// document.addEventListener('DOMContentLoaded', function() {
//     const savedRecipesContainer = document.getElementById('savedRecipesContainer');
    
//     function loadSavedRecipes() {
//         const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//         const allRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        
//         const savedRecipesData = allRecipes.filter(recipe => 
//             savedRecipes.includes(recipe.id)
//         );
        
//         if (savedRecipesData.length === 0) {
//             savedRecipesContainer.innerHTML = `
//                 <div class="empty-state">
//                     <i class="far fa-bookmark"></i>
//                     <p>Anda belum menyimpan resep apapun</p>
//                     <a href="index.html" class="btn-primary">Jelajahi Resep</a>
//                 </div>
//             `;
//             return;
//         }
        
//         savedRecipesContainer.innerHTML = '';
        
//         savedRecipesData.forEach(recipe => {
//             const recipeCard = document.createElement('div');
//             recipeCard.className = 'recipe-card';
//             recipeCard.innerHTML = `
//                 <div class="recipe-img">
//                     <img src="${recipe.image}" alt="${recipe.title}">
//                 </div>
//                 <div class="recipe-info">
//                     <h3 class="recipe-title">${recipe.title}</h3>
//                     <div class="recipe-meta">
//                         <span><i class="far fa-clock"></i> ${recipe.cookingTime} menit</span>
//                         <span><i class="fas fa-utensils"></i> ${recipe.servings} porsi</span>
//                     </div>
//                     <div class="recipe-actions">
//                         <a href="recipe-detail.html?id=${recipe.id}" class="btn-view">
//                             <i class="fas fa-eye"></i> Lihat
//                         </a>
//                         <button class="btn-remove" onclick="removeSavedRecipe('${recipe.id}')">
//                             <i class="fas fa-trash"></i> Hapus
//                         </button>
//                     </div>
//                 </div>
//             `;
//             savedRecipesContainer.appendChild(recipeCard);
//         });
//     }
    
//     window.removeSavedRecipe = function(recipeId) {
//         if (confirm('Apakah Anda yakin ingin menghapus resep ini dari koleksi?')) {
//             const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
//             const updatedSavedRecipes = savedRecipes.filter(id => id !== recipeId);
//             localStorage.setItem('savedRecipes', JSON.stringify(updatedSavedRecipes));
//             loadSavedRecipes();
//         }
//     }
    
//     // Muat resep yang disimpan saat halaman dimuat
//     loadSavedRecipes();
// });

document.addEventListener('DOMContentLoaded', function() {
    const savedRecipesContainer = document.getElementById('savedRecipesContainer');
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    if (savedRecipes.length === 0) {
        savedRecipesContainer.innerHTML = `
            <div class="empty-state">
                <i class="far fa-bookmark"></i>
                <p>Anda belum menyimpan resep apapun</p>
                <a href="afterlogin.html" class="btn-primary">Jelajahi Resep</a>
            </div>
        `;
    } else {
        savedRecipesContainer.innerHTML = '';
        
        savedRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <a href="${recipe.id}.html">
                    <div class="recipe-img">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </div>
                    <div class="recipe-info">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <div class="recipe-meta">
                            <span><i class="far fa-clock"></i> ${recipe.time} menit</span>
                            <span><i class="fas fa-utensils"></i> ${recipe.servings} porsi</span>
                        </div>
                        <div class="recipe-author">
                            <span class="author-name">${recipe.author}</span>
                        </div>
                    </div>
                </a>
            `;
            savedRecipesContainer.appendChild(recipeCard);
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});