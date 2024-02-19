document.addEventListener('DOMContentLoaded', function () {
  var productContainer = document.getElementById('contatti');

    var productItem = document.createElement('div');
    productItem.className = 'row mx-0 pt-5 px-sm-3 px-lg-5 mt-4';
    productItem.innerHTML = `
      <div class="col-lg-4 align-items-center col-md-6 mb-5">
          <h4 class="text-white text-uppercase mb-4" style="letter-spacing: 3px;">Contatti</h4>
          <p><i class="fa fa-map-marker-alt mr-2"></i>Via della stazione 7, Ceprano(FR)</p>
          <p><i class="fa fa-phone-alt mr-2"></i>Info 348 231 7351</p>
          <p><i class="fa fa-phone-alt mr-2"></i>Consegne 3356662404</p>
          <p><i class="fa fa-phone-alt mr-2"></i>Assistenza 3471973645</p>
          <p class="m-0"><i class="fa fa-envelope mr-2"></i><a href="mailto:ciollicaffe@gmail.com">ciollicaffe@gmail.com</a></p>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
          <h4 class="text-white text-uppercase mb-4" style="letter-spacing: 3px;">Seguici</h4>
          <p>Ti aspettiamo sui nostri social per <br> rimanere sempre aggiornato sulle <br> ultime novità in store</p>
          <div class="d-flex justify-content-start">
              <a target="_blank" class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://www.facebook.com/ciollicaffeespresso"><i class="fab fa-facebook-f"></i></a>
              <a target="_blank" class="btn btn-lg btn-outline-light btn-lg-square" href="https://www.instagram.com/ciolli.caffe/"><i class="fab fa-instagram"></i></a>
          </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
          <h4 class="text-white text-uppercase mb-4" style="letter-spacing: 3px;">Orari</h4>
          <div>
              <p>08.30 - 13.00</p>
              <p>15.30 - 19.30</p>
              <h6 class="text-white text-uppercase">domenica chiuso</h6>
          </div>
      </div>
      <div class="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
        <p class="mb-2 text-white">Ciolli Caffè. Diritti riservati</a></p>
        <p class="m-0 text-white">Designed by <a class="font-weight-bold" href="https://www.behance.net/ileniaventura">Ilenia Ventura</a></p>
      </div>
    `;
    productContainer.appendChild(productItem);
  });
