let cartList = JSON.parse(localStorage.getItem("cartItems"));
let parent = document.getElementById("cont");
for (let i = 0; i < cartList.length; i++){
    let div = document.createElement("div");
    let p_price = document.createElement("p")
    let p_desc = document.createElement("p")
    let p_time = document.createElement("p")
    let image = document.createElement("img");
    p_price.innerHTML = `Price: ${cartList[i].price}`
    p_desc.innerHTML = `Description: ${cartList[i].description}`
    p_time.innerHTML = `Time to prepare: ${cartList[i].timeTP}`;
    image.src = cartList[i].image;
    div.append(image, p_price, p_desc, p_time);
    parent.append(div);
}

function submit() {
    alert("Your order is accepted");
    setTimeout(() => {
        alert("Your order is being cooked")
    }, 3000);
    setTimeout(() => {
        alert("Your order is ready")
    }, 8000);
    setTimeout(() => {
        alert("Order out for delivery")
    }, 10000);
    setTimeout(() => {
        alert("Order delivered")
    }, 12000);
}