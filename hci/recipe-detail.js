document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            
            // Update tampilan bintang
            stars.forEach((s, index) => {
                if (index < value) {
                    s.innerHTML = '<i class="fas fa-star"></i>';
                    s.classList.add('active');
                } else {
                    s.innerHTML = '<i class="far fa-star"></i>';
                    s.classList.remove('active');
                }
            });
            
            // Di sini Anda bisa menambahkan kode untuk menyimpan rating
            console.log('Rating diberikan:', value);
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Save recipe functionality
    const saveRecipeBtn = document.getElementById('saveRecipeBtn');
    const recipeTitle = document.getElementById('recipeTitle').textContent;
    const recipeImage = document.getElementById('recipeImage').src;
    const recipeId = window.location.pathname.split('/').pop().replace('.html', ''); // Get filename as ID
    
    // Check if recipe is already saved
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const isSaved = savedRecipes.some(recipe => recipe.id === recipeId);
    
    if (isSaved) {
        saveRecipeBtn.innerHTML = '<i class="fas fa-bookmark"></i> Disimpan';
        saveRecipeBtn.classList.add('saved');
    }
    
    // Save recipe handler
    saveRecipeBtn.addEventListener('click', function() {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        const recipeIndex = savedRecipes.findIndex(recipe => recipe.id === recipeId);
        
        if (recipeIndex === -1) {
            // Add to saved recipes
            savedRecipes.push({
                id: recipeId,
                title: recipeTitle,
                image: recipeImage,
                author: document.getElementById('authorName').textContent,
                time: document.getElementById('cookingTime').textContent,
                servings: document.getElementById('servings').textContent,
                savedAt: new Date().toISOString()
            });
            
            saveRecipeBtn.innerHTML = '<i class="fas fa-bookmark"></i> Disimpan';
            saveRecipeBtn.classList.add('saved');
        } else {
            // Remove from saved recipes
            savedRecipes.splice(recipeIndex, 1);
            saveRecipeBtn.innerHTML = '<i class="far fa-bookmark"></i> Simpan';
            saveRecipeBtn.classList.remove('saved');
        }
        
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});