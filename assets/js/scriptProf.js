/**
 * refereces
 */
var priceEl = document.getElementById('price');
var button = document.getElementById('button');
var nameUser = document.getElementById('name');
var ingrediets = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById('coupon');

/**
 * settings
 */
var defaultPrice = 50;
var coupons = ['sconto2021', 'sconto-bool'];
var discount = 0.3;
writePrice(defaultPrice, priceEl);

/**
 * events
 */
button.addEventListener('click', function(){

  // controllo del nome
  var nomeInserito = nameUser.value.trim();

  // verifico la presenza del nome
  if(nomeInserito.length === 0){
    alert("Inserisci il nome del burger");
  }else{

    // ipotesi di funzione
    //calcPrice(defaultPrice, priceEl)

    // sommare gli elementi checked
    var priceIngredient = 0;
    // ciclo la lista degli inputo checkbox
    for(var i = 0; i < ingrediets.length; i++){
      var ingredient = ingrediets[i];
      
      // se un checbox è checked === true summo iil suo value
      if(ingredient.checked === true){
        priceIngredient += parseInt(ingredient.value);
      }

    }

    var totalPrice = defaultPrice + priceIngredient;
    
    // verifico la presnza del codice inserito dentro l'array dei coupons
    if(coupons.includes(coupon.value) === true){
      totalPrice -= totalPrice * discount;
      //totalPrice *= (1 - discount);
    }
    
    // stampo il prezzo totale
    writePrice(totalPrice, priceEl);

  }

});



/**
 * functions
 */

 // calcole del prezzo (ipotesi di funzione)
function calcPrice(value, target){
      // tutto la logica del calcolo
      // poi stampo il prezzo con la fuzione dedicata
}

// riceve il velare da scrivere e l'elemento dove deve esere scritto
function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
}