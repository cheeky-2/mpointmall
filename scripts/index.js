const redColorProductContainer = document.querySelector('#red_product_wrap');
const greenColorProductContainer = document.querySelector('#green_product_wrap');
const pinkColorProductContainer = document.querySelector('#pink_product_wrap');
const redColorBtn = document.querySelector('.red_color .color_title button');
const greenColorBtn = document.querySelector('.green_color .color_title button');
const pinkColorBtn = document.querySelector('.pink_color .color_title button');
console.log(greenColorProductContainer);
for(let i = 0; i < 4; i++){
    const colorProduct = document.querySelector('.red_product_container');
    const copyProduct = colorProduct.cloneNode(true);
    redColorProductContainer.appendChild(copyProduct)
}
for(let i = 0; i < 5; i++){
    redColorProductContainer.children[i].children[0].children[0].children[0].children[0].src = redColorDB[i].src;
    redColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[0].textContent = redColorDB[i].platform;
    redColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[2].textContent = redColorDB[i].brand;
    redColorProductContainer.children[i].children[0].children[1].children[1].children[0].children[0].textContent = redColorDB[i].title;
    redColorProductContainer.children[i].children[0].children[1].children[1].children[1].children[0].textContent = `${redColorDB[i].price.toLocaleString('ko-kr')}원`;
    redColorProductContainer.children[i].children[0].children[1].children[2].children[0].textContent = `최대 ${redColorDB[i].point}% M포인트`
    redColorProductContainer.children[i].children[0].children[1].children[2].children[1].textContent = `${redColorDB[i].delivery}배송`
    if(i>2){
        redColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[1].style.display = 'none';
    }
}
for(let i = 0; i < 4; i++){
    const colorProduct = document.querySelector('.green_product_container');
    const copyProduct = colorProduct.cloneNode(true);
    greenColorProductContainer.appendChild(copyProduct)
}
for(let i = 0; i < 5; i++){
    greenColorProductContainer.children[i].children[0].children[0].children[0].children[0].src = greenColorDB[i].src;
    greenColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[0].textContent = greenColorDB[i].platform;
    greenColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[2].textContent = greenColorDB[i].brand;
    greenColorProductContainer.children[i].children[0].children[1].children[1].children[0].children[0].textContent = greenColorDB[i].title;
    greenColorProductContainer.children[i].children[0].children[1].children[1].children[1].children[0].textContent = `${greenColorDB[i].price.toLocaleString('ko-kr')}원`;
    greenColorProductContainer.children[i].children[0].children[1].children[2].children[0].textContent = `최대 ${greenColorDB[i].point}% M포인트`
    greenColorProductContainer.children[i].children[0].children[1].children[2].children[1].textContent = `${greenColorDB[i].delivery}배송`
    greenColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[1].style.display = 'none';
    greenColorProductContainer.children[i].children[0].children[1].children[2].children[1].style.display = 'none';
}
for(let i = 0; i < 4; i++){
    const colorProduct = document.querySelector('.pink_product_container');
    const copyProduct = colorProduct.cloneNode(true);
    pinkColorProductContainer.appendChild(copyProduct)
}
for(let i = 0; i < 5; i++){
    pinkColorProductContainer.children[i].children[0].children[0].children[0].children[0].src = pinkColorDB[i].src;
    pinkColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[0].textContent = pinkColorDB[i].platform;
    pinkColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[2].textContent = pinkColorDB[i].brand;
    pinkColorProductContainer.children[i].children[0].children[1].children[1].children[0].children[0].textContent = pinkColorDB[i].title;
    pinkColorProductContainer.children[i].children[0].children[1].children[1].children[1].children[0].textContent = `${pinkColorDB[i].price.toLocaleString('ko-kr')}원`;
    pinkColorProductContainer.children[i].children[0].children[1].children[2].children[0].textContent = `최대 ${pinkColorDB[i].point}% M포인트`
    pinkColorProductContainer.children[i].children[0].children[1].children[2].children[1].textContent = `${pinkColorDB[i].delivery}배송`
    if(i>2){
        pinkColorProductContainer.children[i].children[0].children[1].children[0].children[0].children[1].style.display = 'none';
    }
}