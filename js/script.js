console.log('JS OK!')

const ShoppingListHTMLElement = document.getElementById('shopping-list')

const ArrList = ['Cheese','Bread','Chicken','Salad','Fruit'] ;

let i = 0;

while (i < ArrList.lenght) {


    
    ShoppingListHTMLElement.innerHTML += `<div> ${ArrList[i]} </div>`
    
    i++;
}