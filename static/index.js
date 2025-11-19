//taking food items from django and fooditem.js/template
import {foodItem} from '/fooditems/'
// used for displaying items by their ID
function displayItems(){
    var bestseller= document.getElementById('bestseller');
    var meals=  document.getElementById('meals');
    var burger=  document.getElementById('burger');
    var thickshake=  document.getElementById('thickshake');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');

// array to filter food item categorywise
    const bestsellerData= foodItem.filter((item)=>item.category=='bestseller');
    const mealsData= foodItem.filter((item)=>item.category=='meals');
    const burgerData= foodItem.filter((item)=>item.category=='burger');
    const thickshakeData= foodItem.filter((item)=>item.category=='thickshake');
    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    const southData= foodItem.filter((item)=>item.category=='south indian');
      
    // category mapping 
    // Created a container div for each food item in the bestseller category. 
    bestsellerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        // cardTop: Container for rating (stars) and a heart icon (for adding to the cart).
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        // Adds a star rating icon and displays the rating.
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        // Adds a clickable heart icon, uniquely identified by the item's ID, to allow adding items to the cart.
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        // star or heart(add to cart ko append kiya)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        // food items ki image add karra
        var img= document.createElement('img');
        img.src=item.img;
        // Displays the name and price of the food item.
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        // Appends all the child elements (rating, heart, image, name, price) to itemCard.
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        // Adds the itemCard to the respective category container (e.g., bestseller).
        bestseller.appendChild(itemCard);
    })
    // same as best seller data 
    mealsData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        var img= document.createElement('img');
        img.src=item.img;
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        meals.appendChild(itemCard)
    })
    // same as best seller data
    burgerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        var img= document.createElement('img');
        img.src=item.img;
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        burger.appendChild(itemCard)
    })
    // same as best seller data
    thickshakeData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        var img= document.createElement('img');
        img.src=item.img;
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        thickshake.appendChild(itemCard)
    })
    // same as best seller data 
    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        var img= document.createElement('img');
        img.src=item.img;
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        chinese.appendChild(itemCard)    
    })
    // same as best seller data 
    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')
        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-cart-plus add-to-cart');
        heart.setAttribute('id',item.id)
        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        var img= document.createElement('img');
        img.src=item.img;
        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : ₹ ' + item.price;
        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        southIndian.appendChild(itemCard)
    })
}
displayItems();
const thickData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(thickData);

// For generating a list of categories for quick navigation. and each category has an image and a (text) link that scrolls to the respective section.
function selectTaste(){
    var categoryList= document.getElementById('category-list');
    thickData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
        var listImg= document.createElement('img');
        listImg.src= item.img;
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category);
        listCard.appendChild(listImg);
        listCard.appendChild(listName);
        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();

// cart management (adds event listeners to all "Add to Cart" buttons) [Initializes the cart from localStorage.]
document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

// data stored in cartData
var cartData= JSON.parse(localStorage.getItem('cartData') || '[]');

// add to cart
// Adds a selected item to the cart and toggles the heart icon.
function addToCart(){  
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);
    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        // If the item is already in the cart, it alerts the user.
        alert("Added to cart!");
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
}
// cart items (Populates the cart items in a table. Each row includes: Image Name Quantity controls (+/- buttons) Price)
function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';
    var cartData = JSON.parse(localStorage.getItem('cart') , "[]")
    cartData.map(item=> {
        var tableRow= document.createElement('tr');       
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
    var cartItems11 = JSON.parse(localStorage.getItem('cart') , "[]");                          
    document.getElementById("id_products").value = cartItems11.map(item => `${item?.id}:${item?.quantity}`).join(",");
}
// increment/decrement  (Adjusts the quantity and price of items dynamically.)
function incrementItem(){
    var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;   
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    localStorage.setItem('cart', JSON.stringify(cartData));
    totalAmount()
    cartItems();
}
var currPrice= 0;
function decrementItem(){
    var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    totalAmount()
    cartItems()
}
// total amount return from json
function totalAmount(){
    let cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : ₹ ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : ₹ ' + sum;
}
// Used for showing no item alert 
document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);
var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}

// responsiveness
// Reorganizes DOM elements based on screen size for responsiveness.
window.onresize= window.onload= function(){
    var size= window.screen.width;
    console.log(size)
    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if(size>800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

// add to cart , increase and decrease item
function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
    }