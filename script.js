/**
 * DATA MENU KANTIN
 */
const menuData = {
    'Kantin Cocomadin': [
        { name: 'Es teh', desc: 'Es Teh Manis yang menyegarkan.', img: 'estehcocomadin.png' },
        { name: 'Cup Food', desc: 'Pentol kenyal, mie gelas lembut, pangsit crispy, semua disiram kuah hangat yang seimbang, bikin nyaman di hati!.', img: 'pentolcocomadin.png' },
        { name: 'Ayam Geprek dan Nasi Daun Jeruk', desc: 'Ayam geprek krispi dengan trio sambel: bawang gurih, matah segar, lava pedas membara!.', img: 'geprekcocomadin.png' }
    ],
    'Kantin Bunga': [
        { name: 'Ayam Kremes', desc: 'Nasi dengan ayam kremes potong panas.', img: 'kremes.png' },
        { name: 'Matcha Oreo', desc: 'Susu Matcha dengan campuran oreo yang crispy.', img: 'matchaoreo.png' },
        { name: 'Macaroni', desc: 'Macaroni crispy yang dapat dinikmati kapan saja.', img: 'macroni.png' }
    ],
    'Kantin Doremi': [
        { name: 'Nasi Ayam Katsu', desc: 'Nasi hangat, ayam katsu renyah dengan salad sayur dan mayonaise.', img: 'katsudoremi.png.jpg' },
        { name: 'Nasi Ayam Geprek', desc: 'Nasi hangat dengan ayam goreng dan sambal geprek.', img: 'geprekdoremi.png' },
        { name: 'Risol Mayo', desc: 'Risol renyah dengan mayo creamy gurih.', img: 'risol.png' }
    ],
    'Kantin Mawar': [
        { name: 'Mie Instan', desc: 'Mie dengan berbagai varian, dapat dinikmati kapan saja.', img: 'popmie.png.jpg' },
        { name: 'Pisang Goreng', desc: 'Pisang goreng manis yang lezat.', img: 'gorenganmawar.png.jpg' },
        { name: 'Ayam Geprek dan Katsu', desc: 'Nasi hangat dengan ayam geprek/ayam katsu yang crispy.', img: 'ayammawar.png.jpg' }
    ],
    'Kantin Melati': [
        { name: 'Soto Ayam', desc: ' Nasi kuah soto panas yang gurih .', img: 'sotoayam.jpg' },
        { name: 'Pecel', desc: 'Aneka sayur fresh dengan bumbu kacang yang gurih.', img: 'pecel.jpeg' },
        { name: 'Gorengan', desc: ' luarnya kriuk, dalamnya lembut, gurihnya bikin gantungan!.', img: 'gorenganmelati.png.jpg' }
    ],
    'Kantin Kenanga': [
        { name: 'Aneka Gorengan', desc: 'Berbagai macam gorengan untuk camilan.', img: 'gorengankenanga.jpg' },
        { name: 'Onigiri', desc: 'Nasi kepal Jepang berisi tuna & ayam gurih, praktis & lezat.', img: 'onigiri.jpg' },
        { name: 'Nasi Goreng', desc: 'Nasi goreng denga telur dan lalapan.', img: 'nasgor.png' }
    ],
    'Kantin Anggrek': [
        { name: 'Mie instan', desc: 'Mie hangat berbumbu gurih, nikmat kapan saja.', img: 'mieanggrek.png' },
        { name: 'Ayam Geprek', desc: 'Nasi dengan ayam dan sambal geprek.', img: 'geprekanggrek.png' },
        { name: 'Minuman Sachet', desc: 'Berbagai minuman sachet yang dapat dinikmati kapanpun.', img: 'sachet.png' }
    ]
};

/**
 * Navigasi antar halaman
 */
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (pageId === 'home-page' && link.id === 'link-home') link.classList.add('active');
        if (pageId === 'location-page' && link.id === 'link-location') link.classList.add('active');
        if (pageId === 'about-page' && link.id === 'link-about') link.classList.add('active');
        if (pageId === 'menu-page' && link.id === 'link-home') link.classList.add('active');
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Membuka menu spesifik kantin
 */
function openMenu(name) {
    const foodContainer = document.getElementById('foodContainer');
    const menuTitle = document.getElementById('menuTitle');
    
    menuTitle.innerText = name;
    foodContainer.innerHTML = '';
    
    if (menuData[name]) {
        menuData[name].forEach(food => {
            foodContainer.innerHTML += `
                <div class="food-item">
                    <img src="${food.img}" alt="${food.name}">
                    <h4 style="color: var(--navy); font-size: 1.2rem; font-weight: 700;">${food.name}</h4>
                    <p style="font-size:0.9rem; color:#666; margin-top:12px; line-height:1.6;">${food.desc}</p>
                </div>
            `;
        });
    }
    navigateTo('menu-page');
}
