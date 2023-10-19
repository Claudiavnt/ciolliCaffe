document.addEventListener('DOMContentLoaded', function () {
  var productContainer = document.getElementById('navbar');

  var currentPage = window.location.pathname.split('/').pop(); // Ottieni il nome della pagina corrente
  var isProdottiPage = (
    currentPage !== 'index.html' &&
    currentPage !== 'index.html#chisiamo' &&
    currentPage !== 'index.html#servizi' &&
    currentPage !== 'index.html#contatti') ? true : false

    var productItem = document.createElement('nav');
    productItem.className = 'navbar navbar-expand-lg bg-none navbar-dark py-3';
    productItem.innerHTML = `
      <a href="index.html" class="navbar-brand col-6 px-lg-4 m-0">
        <img class="w-25 m-0" src="img/logo.png" alt="Logo">
      </a>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav ml-auto p-4">
              <a href="index.html" class="nav-item nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
              <a href="index.html#chisiamo" class="nav-item nav-link ${currentPage === 'index.html#chisiamo' ? 'active' : ''}">Chi Siamo</a>
              <a href="index.html#servizi" class="nav-item nav-link ${currentPage === 'index.html#servizi' ? 'active' : ''}">Servizi</a>
              <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle ${isProdottiPage ? 'active' : ''}" data-toggle="dropdown">Prodotti</a>
                  <div class="dropdown-menu text-capitalize">
                      <a href="capsule.html" class="dropdown-item">Capsule</a>
                      <a href="cialde.html?from=prodotti" class="dropdown-item">Cialde</a>
                      <a href="macchine.html" class="dropdown-item">Macchine</a>
                      <a href="sistemi_chiusi.html" class="dropdown-item">Sistemi Chiusi</a>
                      <a href="brand.html" class="dropdown-item">Brand Partner</a>
                      <a href="accessori.html" class="dropdown-item">Accessori</a>
                  </div>
              </div>
              <a href="#contatti" class="nav-item nav-link ${currentPage === 'index.html#contatti' ? 'active' : ''}">Contatti</a>
          </div>
      </div>
    `;
    productContainer.appendChild(productItem);
  });
