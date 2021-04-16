//TARGETS
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var price = document.getElementById("price");
var btn = document.getElementById("button");
var coupon = document.getElementById("coupon");

//VARIABLES
var coupons =["boolean","sconto2021"];
var defaultPrice = 50;
price.innerHTML = defaultPrice.toFixed(2);

// CHECK PRICE
btn.addEventListener("click",
  function (){
    var validName = true
    var surPlus = 0;
    var discountAmount = 0.2;
    if(getvalue(burgerName).trim() === ""){
      alert("Hai inserito un nome non valido")
      price.innerHTML = defaultPrice.toFixed(2); // RESET PREZZO NEL CASO IN CUI CREDO UN SECONDO PANINO NON VALIDO DOPO AVERNE MESSO UNO VALIDO
      validName=false;
    }
    
    if(validName){ // PER EVITARE CHE SI CALCOLI IL PREZZO SE NON HO INSERITO UN NOME VALIDO
      var discountable = isDiscount(getvalue(coupon), coupons)
    console.log("La possibilita' di avere uno sconto e' : " +discountable);
    if(!discountable) {
      discountAmount = 0;
      // ULTERIORE IF PER ESCLUDERE IL CASO VUOTO
      if(getvalue(coupon)!= "") alert("Discount-Code NON VALIDO")
    }
    //  CHECK SURPLUS PRICE
    for( var i =0; i<ingredients.length;i++){
      if(isChecked(ingredients[i])) surPlus += parseInt(getvalue(ingredients[i]))
    }
    calculatePrice(defaultPrice,surPlus,discountAmount);
    }
  })


  function getvalue(target){
    return target.value;
  } 
  
  function isChecked(target){
    return target.checked;
  }
  function calculatePrice(defaultPrice, plusPrice, discountValue){
    price.innerHTML = ((defaultPrice+plusPrice)*(1-discountValue)).toFixed(2);
  }

  function isDiscount(str,listCoupons){
    if(listCoupons.includes(str)) return true;
    else return false;
  }