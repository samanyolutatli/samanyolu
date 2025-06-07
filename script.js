// Ayran boyutuna göre fiyatı ayarlayan fonksiyon
function setPrice(size) {
    const priceElement = document.getElementById('ayran-price');
    if (size === 'small') {
        priceElement.textContent = '15₺';
    } else if (size === 'large') {
        priceElement.textContent = '20₺';
    }
}

// AOS (Animate On Scroll) başlatma
AOS.init();

function showMenu(category, event) {
    document.querySelectorAll('.portfolio').forEach(function(menu) {
        menu.style.display = 'none';
    });

    document.getElementById(category + '-menu').style.display = 'grid';

    document.querySelectorAll('.menu-btn').forEach(function(button) {
        button.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 💡 AOS'u yeniden başlat
    AOS.refresh();
}


// Sayfa yüklendiğinde 'Yukarı Dön' butonunu gizle
window.onload = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.style.display = 'none';
    }
};

// Sayfa kaydırıldığında 'Yukarı Dön' butonunu göster/gizle
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
window.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      setTimeout(() => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });

        setTimeout(() => {
          scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
        }, 700); // geri dönüş süresi
      }, 800); // sayfa yüklendikten sonra bekleme süresi
    }
});
if (window.innerWidth < 768) {
  // animasyonu çalıştır
}

// Menü kısmına yumuşak kaydırma
function scrollToMenu(event) {
    event.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}
