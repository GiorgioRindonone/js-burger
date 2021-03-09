
// 0. definiamo le variabili che useremo nel nostro programma

var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-name-input');
var ingredients = document.getElementsByClassName('add-ingredient');
var coupon = document.getElementById('coupon-input');
var total = document.getElementById('total');
var coupons = ["PANINO20", "VIP20", "BRUM20"];


// 1. aggiungo l'evento click al bottone

calculate.addEventListener("click",
  function () {
    // alert("funge");

    // 2. controlliamo se il nome è stato inserito controllo il VALUE dell'input
    if ( burgerName.value != "" ) {
      // console.log(burgerName.value);

      // 3. controlliamo i checkbox
      console.log(cheese.checked);

      // 4. ciclo di ingredienti
      var sum = 50;
      for (var i = 0; i < ingredients.length; i++) {
        // console.log(ingredients[i].checked);
        // 5. controllo true o false e se true lo sommo al costo del panino
        if ( ingredients[i].checked ) {
          sum += parseInt(ingredients[i].value)
        }
      }
      // 6. calcolo il discount
      if (coupons.includes(coupon.value) == true) {
        sum -= sum * 0.2;
        var indexCoupon = coupons.indexOf(coupon.value);
        coupons.splice(indexCoupon, 1);
      }

      // 7. stampo il risultato
      total.innerHTML = sum + "$";

    } else {
      // 8. chiedo di inserire il nome in caso non lo avesse aggiunto
      alert("inserisci il nome del panino");
    }
  }
);
