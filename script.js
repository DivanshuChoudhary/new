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

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.textContent === "♡"){
            button.textContent = "♥";
            button.style.color = "#fff";
            button.style.background = "#e50914";
        }else{
            button.textContent = "♡";
            button.style.color = "#e50914";
            button.style.background = "#fff";
        }

    });

});