let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;

        btn.textContent = "Added ✔";
        btn.style.background = "green";
    });
});