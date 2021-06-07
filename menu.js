function addToCart(itemclass) {
    
    let menuList = JSON.parse(localStorage.getItem("menu"));
    for (let i = 0; i < menuList.length; i++){
        if (menuList[i].class === itemclass) {
            let cartarr = localStorage.getItem("cartItems");
            if (cartarr == null) {
                cartarr = [];
            } else {
                cartarr = JSON.parse(cartarr);
            }
            cartarr.push(menuList[i]);
            localStorage.setItem("cartItems", JSON.stringify(cartarr));
            return;
        }
    }
}

let foodItems = [
    {
        class: "foodItem1",
        image: "https://via.placeholder.com/200x200",
        price: 500,
        description: "Biryani",
        timeTP: "30 min"
    },
    {
        class: "foodItem2",
        image: "https://via.placeholder.com/200x200",
        price: 400,
        description: "Shahi Paneer",
        timeTP: "40 min"
    },
    {
        class: "foodItem3",
        image: "https://via.placeholder.com/200x200",
        price: 450,
        description: "Butter Chicken",
        timeTP: "45 min"
    },
    {
        class: "foodItem4",
        image: "https://via.placeholder.com/200x200",
        price: 200,
        description: "Aloo Paratha",
        timeTP: "20 min"
    }

]
localStorage.setItem("menu", JSON.stringify(foodItems))

function goToCart() {
    window.location.href = "cart.html";
}