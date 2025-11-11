
function toggleMenu() {
  document.getElementById("main-header-menu-links").classList.toggle("show");
}
const sizeButtons = document.querySelectorAll('.product-colour-blue, .product-colour-red');

sizeButtons.forEach(sizeAddButton => {
  sizeAddButton.addEventListener('click', () => {
    sizeButtons.forEach(sizeRemoveButton => sizeRemoveButton.classList.remove('selected'));
    sizeAddButton.classList.add('selected');
  });
});

const colourButtons = document.querySelectorAll('.product-size, .menu-link-content');

colourButtons.forEach(colourAddButton => {
  colourAddButton.addEventListener('click', () => {
    colourButtons.forEach(colourRemoveButton => colourRemoveButton.classList.remove('selected'));
    colourAddButton.classList.add('selected');
  });
});


 const icon = document.getElementById("wishlistIcon");

    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
      icon.name = icon.name === "heart-outline" ? "heart" : "heart-outline";
    });


const quantityDisplay = document.getElementById('product-quantity-display');
const increaseButton = document.getElementById('plus');
const decreaseButton = document.getElementById('minus');

increaseButton.addEventListener('click', () => {
  let current = parseInt(quantityDisplay.textContent);
  quantityDisplay.textContent = current + 1;
});

decreaseButton.addEventListener('click', () => {
  let current = parseInt(quantityDisplay.textContent);
  if (current > 0) {
    quantityDisplay.textContent = current - 1;
  }
});

const year = new Date().getFullYear();
document.getElementById("copyright-text").textContent = `Copyright Rimel ${year}. All right reserved`;

const observer = new MutationObserver(() => {
  const lang = document.body.getAttribute("data-lang");
  if (lang) loadLanguage(lang);
});

observer.observe(document.body, { attributes: true, attributeFilter: ["data-lang"] });
