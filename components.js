// Dynamic component loader
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error('Error loading component:', error);
    document.getElementById(elementId).innerHTML = '<div class="text-danger">Failed to load component</div>';
  }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('navbar-placeholder')) {
    loadComponent('navbar-placeholder', 'navbar.html');
  }
  if (document.getElementById('footer-placeholder')) {
    loadComponent('footer-placeholder', 'footer.html');
  }
});