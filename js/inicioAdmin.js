
const botellas = JSON.parse(localStorage.getItem('botellaDest')) || [];
const tragos = JSON.parse(localStorage.getItem('tragoDest')) || [];

cardsInicioAdminBotella.innerHTML = botellas.map((botella) => `
<div class="card mb-3 cardsInicioAdmin">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${botella.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">${botella.name}</h4>
        <p class="card-text fs-5 fs-5">${botella.licor}</p>
        <p class="card-text fs-5">$${botella.price}</p>
        <p class="card-text fs-5 descrp-bot-admin">${botella.descrp}</p>
        </div>
    </div>
    <div class="card-footer">
    <a href="/html/ADMIN/botellasAdmin.html" class="text-decoration-none"><button type="button" class="btn btn-info w-0  text-light">Ir a BOTELLAS</button></a>
</div>
  </div>
</div>
` ).join('')

cardsInicioAdminTrago.innerHTML = tragos.map((trago) => `
<div class="card mb-3 cardsInicioAdmin">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${trago.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h4 class="card-title text-center">${trago.name}</h4>
      <ul class="lista-ingredientes fs-5"> 
        <li>${trago.ingred.ingred1}</li>
        <li>${trago.ingred.ingred2}</li>
        <li>${trago.ingred.ingred3}</li>
        <li>${trago.ingred.ingred4}</li>
        <li>${trago.ingred.ingred5}</li>
      </ul>
      </div>
    </div>
    <div class="card-footer">
    <a href="/html/ADMIN/tragosAdmin.html" class="text-decoration-nonew-100"><button type="button" class="btn btn-info w-50 text-light ">Ir a TRAGOS</button></a>
  </div>
 </div>

` )