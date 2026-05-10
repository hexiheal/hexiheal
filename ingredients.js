const ingredientsData = [

  // Core Jari Bootiyan
  {
    id: 5,
    name: "Nirgundi",
    image: "nirghnudhi.avif",
    description: "Powerful herb for joint pain and inflammation relief.",
    benefit: "Joint Pain Relief"
  },
  {
    id: 6,
    name: "Ashwagandha",
    image: "ashwagandha.jpeg",
    description: "Reduces stress-related muscle tension and pain.",
    benefit: "Stress Relief"
  },

  {
    id: 8,
    name: "Ratanjot",
    image: "ratanjot.jpg",
    description: "Traditional herb used for healing and skin benefits.",
    benefit: "Healing Support"
  },
  {
    id: 9,
    name: "Akarkara",
    image: "akarkara.webp",
    description: "Stimulating herb used for nerve and pain relief.",
    benefit: "Nerve Stimulation"
  },

  // Base Oils
  {
    id: 1,
    name: "Coconut Oil",
    image: "coconut-oil.jpg",
    description: "Deep moisturizing carrier oil for herbal absorption.",
    benefit: "Base Carrier"
  },
  {
    id: 2,
    name: "Sesame Oil",
    image: "seasame-oil.webp",
    description: "Traditional herbal oil for joint and muscle support.",
    benefit: "Joint Support"
  },
  {
    id: 4,
    name: "Castor Oil",
    image: "castor-oil.avif",
    description: "Thick oil used for deep tissue pain relief.",
    benefit: "Deep Healing"
  },

  // Cooling & Pain Relief Agents
  {
    id: 12,
    name: "Eucalyptus Oil",
    image: "Eucalyptus-Oil.jpg",
    description: "Opens pores and reduces muscle stiffness.",
    benefit: "Muscle Relaxation"
  },
  {
    id: 13,
    name: "Peppermint Oil",
    image: "Peppermint Oil.webp",
    description: "Cooling oil that reduces headache and pain.",
    benefit: "Headache Relief"
  },
  {
    id: 14,
    name: "Wintergreen Oil",
    image: "Wintergreen Oil.jpg",
    description: "Strong analgesic used for deep pain relief.",
    benefit: "Deep Pain Relief"
  },

  // Anti-inflammatory Herbs
  {
    id: 15,
    name: "Turmeric Extract",
    image: "turmeric.jpg",
    description: "Reduces inflammation and joint pain.",
    benefit: "Anti-inflammatory"
  },
  {
    id: 17,
    name: "Boswellia (Salai Guggul)",
    image: "Boswellia_Serrata.jpg",
    description: "Strong herbal anti-inflammatory resin.",
    benefit: "Joint Care"
  },
  {
    id: 18,
    name: "Neem Oil",
    image: "neem oil.jpg",
    description: "Natural antibacterial and pain-soothing oil.",
    benefit: "Healing"
  },

  // Muscle & Joint Support
  {
    id: 20,
    name: "Moringa Extract",
    image: "moringa.jpg",
    description: "Rich in nutrients for joint and muscle health.",
    benefit: "Nutrition Boost"
  },
  {
    id: 21,
    name: "Garlic Infused Oil",
    image: "garlic-oil.jpg",
    description: "Improves circulation and reduces stiffness.",
    benefit: "Blood Flow"
  },
  {
    id: 22,
    name: "Flaxseed Oil",
    image: "flaxseed oil.webp",
    description: "Omega-3 rich oil for joint lubrication.",
    benefit: "Joint Lubrication"
  },

  // Relaxation Oils
  {
    id: 23,
    name: "Clove Oil",
    image: "cloveOil.jpg",
    description: "Natural painkiller and numbing agent.",
    benefit: "Pain Relief"
  },
  {
    id: 24,
    name: "Lavender Oil",
    image: "lavender oil.jpg",
    description: "Calms nerves and reduces stress pain.",
    benefit: "Relaxation"
  },
  {
    id: 26,
    name: "Basil (Tulsi) Oil",
    image: "basil oil.webp",
    description: "Traditional herb for pain and immunity support.",
    benefit: "Immunity Support"
  },
  {
    id: 27,
    name: "Cardamom Oil",
    image: "cardamom oil.webp",
    description: "Mild warming oil that supports circulation.",
    benefit: "Circulation Support"
  },

  // Circulation Boosters
  {
    id: 28,
    name: "Black Pepper Oil",
    image: "black pepper oil.jpg",
    description: "Enhances absorption and reduces stiffness.",
    benefit: "Absorption Boost"
  },
  {
    id: 29,
    name: "Cinnamon Oil",
    image: "Cinnamon_Oil.avif",
    description: "Warming oil that improves blood flow.",
    benefit: "Warming Effect"
  },
  {
    id: 30,
    name: "Ajwain Infused Oil",
    image: "ajwain oil.webp",
    description: "Traditional oil for muscle and gas pain relief.",
    benefit: "Muscle Relief"
  },

  // Final Card
  {
    id: 31,
    name: "And Much More...",
    image: "much more.webp",
    description: "A powerful blend of additional secret herbal herbs and natural oils for enhanced pain relief.",
    benefit: "Proprietary Blend"
  }
];

// Render all ingredients on ingredients page
function renderIngredients() {
  const container = document.getElementById('ingredients-container');
  if (!container) return;

  container.innerHTML = ingredientsData.map(ingredient => `
    <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
      <div class="ingredient-card">
        <img 
          src="${ingredient.image}" 
          class="ingredient-img" 
          alt="${ingredient.name}"
          onerror="this.src='https://placehold.co/300x250/92b85a/ffffff?text=${ingredient.name}'"
        >

        <div class="ingredient-info">
          <h4>${ingredient.name}</h4>
          <p>${ingredient.description}</p>

          <span class="benefit-badge">
            <i class="fas fa-leaf"></i>
            ${ingredient.benefit}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render featured ingredients on homepage
function renderFeaturedIngredients() {
  const container = document.getElementById('featured-preview');
  if (!container) return;

  const featured = ingredientsData.slice(0, 4);

  container.innerHTML = featured.map(ingredient => `
    <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
      <div class="ingredient-card">

        <img 
          src="${ingredient.image}" 
          class="ingredient-img" 
          alt="${ingredient.name}"
          style="height: 200px;"
          onerror="this.src='https://placehold.co/300x200/92b85a/ffffff?text=${ingredient.name}'"
        >

        <div class="ingredient-info">
          <h5>${ingredient.name}</h5>
          <p>${ingredient.benefit}</p>
        </div>

      </div>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderIngredients();
  renderFeaturedIngredients();
});