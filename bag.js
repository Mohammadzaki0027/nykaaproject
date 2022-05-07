import {footer} from "./foot.js";

let  n =document.getElementById("footer");
n.innerHTML=footer();


import {navbar} from "./nav.js";

let  f =document.getElementById("navbar");
f.innerHTML=navbar();









let cartarr=JSON.parse(localStorage.getItem("cart"))||[]
console.log(cartarr)
function hand()
{
let selected=document.getElementById("sortnam").value
console.log(selected)
}
var total =cartarr.reduce(function (sum, elem) {
return sum + Number(elem.Price);
}, 0);

let length=cartarr.length
let h1=document.getElementById("item")
h1.innerHTML=`The cart Amount  ${total} and total no of product in the cart ${length}`
