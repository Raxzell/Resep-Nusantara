// Load recipes from API or Firebase

// Fungsi untuk memeriksa status login
function checkAuthStatus() {
    // Cek apakah user sudah login (contoh: dari localStorage)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    
    const guestView = document.getElementById('guest-view');
    const userView = document.getElementById('user-view');
    
    if (isLoggedIn) {
        // Tampilkan user view
        if (guestView) guestView.classList.add('hidden');
        if (userView) userView.classList.remove('hidden');
        
        // Isi data user
        const usernameDisplay = document.getElementById('username-display');
        const userAvatar = document.getElementById('user-avatar');
        
        if (usernameDisplay) {
            usernameDisplay.textContent = userData.username || 'Pengguna';
        }
        
        if (userAvatar) {
            if (userData.avatar) {
                userAvatar.src = userData.avatar;
            } else {
                // Default avatar SVG jika tidak ada gambar
                userAvatar.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz48L3N2Zz4=';
                userAvatar.style.backgroundColor = '#999';
            }
        }
    } else {
        // Tampilkan guest view
        if (guestView) guestView.classList.remove('hidden');
        if (userView) userView.classList.add('hidden');
    }
}

// Fungsi untuk logout
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hapus data login
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            
            // Redirect ke halaman login
            window.location.href = 'login.html';
        });
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    setupLogout();
    
    // Untuk testing - bisa dihapus di production
    window.simulateLogin = function() {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify({
            username: 'JohnDoe',
            avatar: 'https://example.com/path/to/avatar.jpg'
        }));
        checkAuthStatus();
    };
    
    window.simulateLogout = function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        checkAuthStatus();
    };
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
    
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// sampai sini yang baru


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Load popular recipes
    loadRecipes('.popular-recipes .recipe-grid', [
        {
            id: 1,
            title: 'Gudeg',
            image: 'gudeg.jpg',
            time: 30,
            servings: 2,
            rating: 4.8,
            author: 'Fransesca',
            authorImage: 'woman.jpg'
        },
        {
            id: 2,
            title: 'Mie Celor',
            image: 'miecelor.jpg',
            time: 60,
            servings: 4,
            rating: 4.9,
            author: 'Mikasa',
            authorImage: 'woman2.jpg'
        },

        {
            id: 2,
            title: 'Tahu Sumedang',
            image: 'tahu sumedang.jpg',
            time: 60,
            servings: 4,
            rating: 4.9,
            author: 'Budianto',
            authorImage: '=man.jpg'
        },
        // Add more sample recipes
    ]);
    
    // Load top rated recipes
   

function loadRecipes(containerSelector, recipes) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    container.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <a href="recipe-detail.html?id=${recipe.id}">
                <div class="recipe-img">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time} menit</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.servings} porsi</span>
                    </div>
                    <div class="recipe-rating">
                        ${generateRatingStars(recipe.rating)}
                        <span>${recipe.rating}</span>
                    </div>
                    <div class="recipe-author">
                        <img src="${recipe.authorImage}" alt="${recipe.author}" class="author-avatar">
                        <span class="author-name">${recipe.author}</span>
                    </div>
                </div>
            </a>
        `;
        container.appendChild(recipeCard);
    });
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// event

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let intervalId;
    const slideInterval = 5000; // 5 detik
    
    function updateCarousel() {
        // Update slide position
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active class for items
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function startAutoSlide() {
        intervalId = setInterval(nextSlide, slideInterval);
    }
    
    function resetAutoSlide() {
        clearInterval(intervalId);
        startAutoSlide();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });
    
    // Start auto slide
    startAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(intervalId);
    }, {passive: true});
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, {passive: true});
    
    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextSlide(); // Swipe left
        } else if (touchEndX > touchStartX + threshold) {
            prevSlide(); // Swipe right
        }
    }

       // Ambil username dari localStorage
    const username = localStorage.getItem('loggedInUsername');

    // Tampilkan di pojok kanan atas
    const displayUsername = document.getElementById('displayUsername');
    if (username) {
      displayUsername.textContent = username;
    } else {
      displayUsername.textContent = "Halo";
    }

    // Di dalam DOMContentLoaded atau fungsi init Anda
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Hentikan perilaku default
        e.preventDefault();
        
        // Dapatkan tujuan dari href
        const targetPage = this.getAttribute('href');
        
        // Redirect ke halaman tujuan
        window.location.href = targetPage;
    });
});
});