const colorProductContainer = document.querySelector('#red_product_wrap');
const colorProduct = document.querySelectorAll('.red_product_container');
const colorProductLine = document.querySelector('.red_product_container+li');
for(let i = 0; i < 4; i++){
    const copyProduct = colorProduct[0].cloneNode(true);
    const copyLine = colorProductLine.cloneNode(true);
    colorProductContainer.appendChild(copyProduct)
    if(i < 3){
        colorProductContainer.appendChild(copyLine)
    }
}
console.log(colorProductContainer.children[2])