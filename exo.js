let titleHover = document.getElementById("title");

//questa variabile contiene la versione stinga degli elementi HTML che vogliamo inniettare solo DOPO che sia avvenuto il click.//

let card = ` 
<div class="card">
    <img src="assets/honey.jpg" alt="img">
    <div class="row">
        <div class="title">
            <h4>100% Bio-Honey</h4>
            <p>italian, not treated</p>
        </div>
        <div class="price">7$/Kg</div>
    </div>
    <button>Add to Cart</button>
</div>` /*utilizzando doppi apici ho avuto un errore.*/

titleHover.addEventListener("click", function() {
  let main = document.querySelector("main");
  main.innerHTML = card;
}) 