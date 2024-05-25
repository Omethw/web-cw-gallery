animal = [{
    id: '01',
    img: './asset/sea-horse.jpg',
    desc:'\n' +
        'Seahorses, with their unique appearance and captivating behavior, are enchanting creatures found in tropical and temperate waters. Their most remarkable trait is the male\'s role in pregnancy. Despite their charm, seahorses are threatened by habitat loss and overexploitation. Conservation efforts are crucial for their survival and the preservation of marine biodiversity.'
}, {
    id: '02',
    img: './asset/turtle.jpg',
    desc:'\n' +
        'Sea turtles, ancient and graceful, roam the ocean with endurance and beauty. Their streamlined bodies and powerful flippers enable them to migrate vast distances, maintaining the health of marine ecosystems. However, they face threats like habitat destruction and poaching, highlighting the importance of conservation efforts to protect these gentle giants and the seas they call home.'
}, {
    id: '03',
    img: './asset/Starfish.jpg',
    desc: 'Starfish, also known scientifically as sea stars, are captivating marine creatures that inhabit oceans across the globe. Characterized by their distinctive radial symmetry and typically sporting five arms (though some species may have more), starfish display an array of colors and patterns, making them a sight to behold. Despite their name, starfish aren\'t fish but belong to the class Asteroidea, closely related to sea urchins and sand dollars. These echinoderms play pivotal roles in marine ecosystems, serving as both predators and scavengers. Their unique feeding mechanism involves evert their stomachs to digest prey externally before retracting them back into their bodies. Equipped with a remarkable ability to regenerate lost limbs, starfish are subjects of fascination for scientists and nature enthusiasts, highlighting the intricacies and wonders of marine life.',
}, {
    id: '04',
    img: './asset/whale.jpg',
    desc: 'Whales, the largest animals on Earth, are majestic marine mammals divided into two main groups: baleen whales and toothed whales. Baleen whales filter feed on small fish and plankton, while toothed whales hunt prey like fish and squid using their teeth. Highly social, whales communicate through various vocalizations and exhibit behaviours like breaching and spy hopping. Despite facing threats such as habitat degradation and pollution, these intelligent creatures continue to capture the awe and fascination of people worldwide.'
}, {
    id: '05',
    img: './asset/butterfly_fish.jpg',
    desc:'Butterflyfish, adorned with vibrant colors and graceful movements, are tropical marine fish found worldwide. Their compressed bodies and elongated fins make them stand out among coral reefs, where they feed on coral polyps and small invertebrates. Often forming monogamous pairs, they contribute to the diversity and beauty of reef ecosystems. However, they are vulnerable to habitat loss and overfishing, emphasizing the need for conservation measures to safeguard their populations and the health of coral reefs.'
}, {
    id: '06',
    img: './asset/jelly_fish.jpg',
    desc:'Jellyfish, with their gelatinous bodies and stinging tentacles, are fascinating marine creatures found worldwide. Despite their delicate appearance, they are efficient predators, feeding on plankton and small fish. While some species have short lifespans, others exhibit remarkable longevity. Although jellyfish play important roles in marine ecosystems, their blooms can have negative impacts on fisheries and tourism. Understanding these enigmatic creatures is essential for maintaining the balance of marine ecosystems'
},]

let containerElement = document.querySelector('.container');
let detailsWindowElement = document.getElementById('details-window');
let windowCloseIcon = document.getElementById('close-icon');
let detailsElement = document.querySelector('.details');
let colorPicerElement = document.getElementById('color');
let textChangeElement = document.getElementById('text');

document.addEventListener('DOMContentLoaded', () => {
    renderImages();
})

//Render Images TO Gallery Items
function renderImages() {
    return (containerElement.innerHTML = animal.map((images) => {
        return `
            <div class="item" data-id="${images.id}">
                <img src=${images.img} alt="">
                <div class="view-details"><span>View Details</span></div>
            </div>
        `
    }).join(""));
    checkClickItem();
}

//open pop window when click on view Details
containerElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-details')) {
        const clickedElement = event.target;
        const parentItem = clickedElement.closest('.item');
        const id = parentItem.dataset.id;
        detailsWindowElement.style.display = 'flex'

        const clickItem = animal.find(item => item.id === id);

        //Set image and Description Dynamically
        detailsElement.innerHTML = `
            <img src=${clickItem.img} alt="">
            <p id="${clickItem.id}" class="animal-details">${clickItem.desc}</p>
        `
        //Change color
        colorPicerElement.addEventListener('input', (event) => {
            const selectedColor = event.target.value;
            const descriptionElement = document.getElementById(clickItem.id);
            if (descriptionElement) {
                descriptionElement.style.color = selectedColor;
            }
        })

        //change font
        textChangeElement.addEventListener('change', (event) => {
            const selectedFont = event.target.value;
            const descriptionElement = document.getElementById(clickItem.id);
            if (descriptionElement) {
                descriptionElement.style.fontFamily = selectedFont;
            }
        })
    }
});

//Details window close
windowCloseIcon.addEventListener('click', () => {
    detailsWindowElement.style.display = 'none'
})


