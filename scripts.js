document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentDiv = document.getElementById('content');

    // Function to load page content
    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;

                // Set active navigation item
                navItems.forEach(item => item.classList.remove('active'));
                document.querySelector(`[data-target="${page}"]`).classList.add('active');
            });
    }

    // Add click event listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-target');
            loadContent(targetPage);
        });
    });

    // Load the default page
    loadContent('home');
});



// Get Cards
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('data.json')
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById('cards-container');
            
//             data.forEach(district => {
//                 const card = document.createElement('div');
//                 card.className = 'cards';
                
//                 card.innerHTML = `
//                     <div class="card-header">
//                         <h3>${district.districtName}</h3>
//                         <p>District Code: ${district.districtCode}</p>
//                     </div>
//                     <div class="card-body">
//                         <p>Total Farmers: ${district.totalFarmers}</p>
//                         <p>Crop Area: ${district.cropArea} hectares</p>
//                         <p>Number of AEOs: ${district.numberOfAEOs}</p>
//                     </div>
//                 `;
                
//                 container.appendChild(card);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });
