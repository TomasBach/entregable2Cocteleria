
const botellas = JSON.parse(localStorage.getItem('botellaDest')) || [];
const tragos = JSON.parse(localStorage.getItem('tragoDest')) || [];

cardsInicioAdminBotella.innerHTML = botellas.map((botella) => `
<div class="card" style="width: 18rem; height:50%">
  <img src="${botella.img}"class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${botella.name}</h5>
    <p class="">${botella.price}</p>
    <p class="">${botella.licor}</p>
    <p class="">${botella.descrp}</p>
  </div>
</div>
` ).join('') 

cardsInicioAdminTrago.innerHTML = tragos.map((trago) => `
<div class="card" style="width: 18rem;height:50%">
  <img src="${trago.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${trago.name}</h5>
    <ul class="lista-ingredientes "> 
      <li>${trago.ingred.ingred1}</li>
      <li>${trago.ingred.ingred2}</li>
      <li>${trago.ingred.ingred3}</li>
      <li>${trago.ingred.ingred4}</li>
      <li>${trago.ingred.ingred5}</li>
    </ul>
  </div>
</div>
` )