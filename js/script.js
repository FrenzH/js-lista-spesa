console.log('JS OK!')
const ArrList = ['Cheese','Bread','Chicken','Salad','Fruit'] ;


const ShoppingListHTMLElement = document.getElementById('shopping-list')

let i = 0;

while (i < ArrList.length) {


    
    ShoppingListHTMLElement.innerHTML += `<li> ${ArrList[i]} </li>`;
    
    i++;
}