const redColorProductContainer = document.querySelector('#red_product_wrap');
const greenColorProductContainer = document.querySelector('#green_product_wrap');
const pinkColorProductContainer = document.querySelector('#pink_product_wrap');
const redColorBtn = document.querySelector('.red_color .color_title button');
const greenColorBtn = document.querySelector('.green_color .color_title button');
const pinkColorBtn = document.querySelector('.pink_color .color_title button');
const pinkColorTitleBorder = document.querySelector('.pink_color .color_title');
const bestProductWrap = document.querySelector('.best50_product_wrap');
const artProductWrap = document.querySelector('.art_product_wrap ul');
const weekBestProductWrap = document.querySelector('.week_best_product_container')
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
redColorProductContainer.style.opacity = 1;
greenColorProductContainer.style.opacity = 0;
pinkColorProductContainer.style.opacity = 0;
greenColorProductContainer.style.maxHeight = '0px';
greenColorProductContainer.style.padding = '0px 50px';
pinkColorProductContainer.style.maxHeight = '0px';
pinkColorProductContainer.style.padding = '0px 50px';
redColorBtn.addEventListener('click',()=>{
    if(redColorProductContainer.style.opacity == 0){
        redColorProductContainer.style.opacity = 1;
        redColorProductContainer.style.maxHeight = '500px';
        redColorProductContainer.style.padding = '30px 50px';
        redColorBtn.children[0].src = './images/icon/uparrow.png';
        greenColorProductContainer.style.opacity = 0;
        greenColorProductContainer.style.maxHeight = '0px';
        greenColorProductContainer.style.padding = '0px 50px';
        greenColorBtn.children[0].src = './images/icon/downarrow.png';
        pinkColorProductContainer.style.opacity = 0;
        pinkColorProductContainer.style.maxHeight = '0px';
        pinkColorProductContainer.style.padding = '0px 50px';
        pinkColorBtn.children[0].src = './images/icon/downarrow.png';
    }else{
        redColorProductContainer.style.opacity = 0;
        redColorProductContainer.style.maxHeight = '0px';
        redColorProductContainer.style.padding = '0px 50px';
        redColorBtn.children[0].src = './images/icon/downarrow.png';
    }
})
greenColorBtn.addEventListener('click',()=>{
    if(greenColorProductContainer.style.opacity == 0){
        greenColorProductContainer.style.opacity = 1;
        greenColorProductContainer.style.maxHeight = '500px';
        greenColorProductContainer.style.padding = '30px 50px';
        greenColorBtn.children[0].src = './images/icon/uparrow.png';
        redColorProductContainer.style.opacity = 0;
        redColorProductContainer.style.maxHeight = '0px';
        redColorProductContainer.style.padding = '0px 50px';
        redColorBtn.children[0].src = './images/icon/downarrow.png';
        pinkColorProductContainer.style.opacity = 0;
        pinkColorProductContainer.style.maxHeight = '0px';
        pinkColorProductContainer.style.padding = '0px 50px';
        pinkColorBtn.children[0].src = './images/icon/downarrow.png';
    }else{
        greenColorProductContainer.style.opacity = 0;
        greenColorProductContainer.style.maxHeight = '0px';
        greenColorProductContainer.style.padding = '0px 50px';
        greenColorBtn.children[0].src = './images/icon/downarrow.png';
    }
})
pinkColorBtn.addEventListener('click',()=>{
    if(pinkColorProductContainer.style.opacity == 0){
        pinkColorProductContainer.style.opacity = 1;
        pinkColorProductContainer.style.maxHeight = '500px';
        pinkColorProductContainer.style.padding = '30px 50px';
        pinkColorBtn.children[0].src = './images/icon/uparrow.png';
        redColorProductContainer.style.opacity = 0;
        redColorProductContainer.style.maxHeight = '0px';
        redColorProductContainer.style.padding = '0px 50px';
        redColorBtn.children[0].src = './images/icon/downarrow.png';
        greenColorProductContainer.style.opacity = 0;
        greenColorProductContainer.style.maxHeight = '0px';
        greenColorProductContainer.style.padding = '0px 50px';
        greenColorBtn.children[0].src = './images/icon/downarrow.png';
        
    }else{
        pinkColorProductContainer.style.opacity = 0;
        pinkColorProductContainer.style.maxHeight = '0px';
        pinkColorProductContainer.style.padding = '0px 50px';
        pinkColorBtn.children[0].src = './images/icon/downarrow.png';
    }
})
for(let i = 0; i<4; i++){
    const bestProductList = document.querySelector('.best50_product_wrap li');
    const clonebestProduct = bestProductList.cloneNode(true);
    bestProductWrap.appendChild(clonebestProduct);
}
const bestProducts = document.querySelectorAll('.best50_product_wrap li');
bestProducts.forEach((obj,idx)=>{
    obj.children[0].children[0].children[0].textContent = bestProductDB[idx].num;
    obj.children[0].children[0].children[1].src = bestProductDB[idx].src;
    obj.children[1].children[0].children[0].textContent = bestProductDB[idx].brand;
    obj.children[1].children[1].children[0].children[0].textContent = bestProductDB[idx].title;
    obj.children[1].children[1].children[1].children[0].children[0].textContent = `${bestProductDB[idx].price.toLocaleString('ko-kr')}원`;
    obj.children[1].children[1].children[1].children[0].children[1].children[0].textContent = `${bestProductDB[idx].salePrice.toLocaleString('ko-kr')}원`;
    obj.children[1].children[1].children[1].children[0].children[1].children[1].textContent = `${bestProductDB[idx].percent}%`;
    obj.children[1].children[2].children[0].textContent = `최대 ${bestProductDB[idx].point}% M포인트`;
    obj.children[1].children[2].children[1].textContent = `${bestProductDB[idx].delivery}배송`;
    if(bestProductDB[idx].price == ''){
        obj.children[1].children[1].children[1].children[0].children[0].textContent = '';
    }
    if(bestProductDB[idx].percent == ''){
        obj.children[1].children[1].children[1].children[0].children[1].children[1].textContent = ''
    }
})
for(let i = 0; i<2; i++){
    const artProductList = document.querySelector('.art_product_wrap ul li');
    cloneArtProduct = artProductList.cloneNode(true);
    artProductWrap.appendChild(cloneArtProduct);
}
const artProducts = document.querySelectorAll('.art_product_wrap ul li');
artProducts.forEach((obj, idx)=>{
    console.log(obj.children[0].children[1].children[1])
    obj.children[0].children[0].src = artProductDB[idx].src
    obj.children[0].children[1].children[0].textContent = artProductDB[idx].brand;
    obj.children[0].children[1].children[1].textContent = artProductDB[idx].title;
    obj.children[0].children[1].children[2].textContent = `${artProductDB[idx].price.toLocaleString('ko-kr')}원`;
})
const loveBrandSw = new Swiper('.love_brands',{
    slidesPerView:6.5,
    spaceBetween:70,
})
for(let i = 0; i<4; i++){
    const weekBestProductList = document.querySelector('.week_best_product_container li');
    const cloneWeekBestProduct = weekBestProductList.cloneNode(true);
    weekBestProductWrap.appendChild(cloneWeekBestProduct);
}
const weekBestProducts = document.querySelectorAll('.week_best_product_container li');
weekBestProducts.forEach((obj,idx)=>{
    console.log(obj,idx)
    obj.children[0].children[0].children[0].src = weekBestProductDB[idx].src;
    obj.children[0].children[1].children[0].textContent = weekBestProductDB[idx].brand;
    obj.children[0].children[1].children[1].children[1].textContent = weekBestProductDB[idx].reviewnum;
    obj.children[0].children[2].children[0].children[0].textContent = weekBestProductDB[idx].title;
    obj.children[0].children[2].children[0].children[1].textContent = `${weekBestProductDB[idx].price.toLocaleString('ko-kr')}원`;
})