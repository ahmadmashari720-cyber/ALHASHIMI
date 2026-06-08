const furnitureItems = [
    { id: 1, name: "طاولة عتيقة", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88" },
    { id: 2, name: "أريكة مودرن", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
    { id: 3, name: "كرسي ذراع أنتيك", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7" },
    { id: 4, name: "خزانة كتب خشبية", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156" },
    { id: 5, name: "طاولة قهوة رخام", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d" },
    { id: 6, name: "طقم كراسي سفرة", image: "https://images.unsplash.com/photo-1503602642458-232111445657" }
];

const phoneNumber = "96565090804";

function displayFurniture() {
    const grid = document.getElementById('furniture-grid');

    furnitureItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const message = encodeURIComponent(`مرحباً، أنا مهتم بـ ${item.name}. هل لا يزال متوفراً؟`);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

        card.innerHTML = `
            <img src="${item.image}?auto=format&fit=crop&w=400&q=80" alt="${item.name}">
            <div class="card-content">
                <h4>${item.name}</h4>
                <a href="${whatsappLink}" target="_blank" class="whatsapp-btn">تواصل عبر واتساب</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayFurniture);
