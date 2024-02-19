document.addEventListener('DOMContentLoaded', function () {
  var cialdeEse44 = [
    {
    img:'img/cialde/product-img-1.jpg',
    title:'Cialda Economy ese44',
    description_one: 'Miscela 100% robusta, per un',
    description_two: 'caffè dal prezzo competitivo',
    quantity:'150pz',
    },
    {
    img:'img/cialde/product-img-2.jpg',
    title:'Cialda Nera ese44',
    description_one: 'Miscela composta 100% robusta, per',
    description_two: 'chi cerca un caffè forte e cremoso',
    quantity:'150pz',
    },
    {
    img:'img/cialde/product-img-3.jpg',
    title:'Cialda Rossa ese44',
    description_one: 'Un aroma forte, bilanciato tra',
    description_two: '90% robusta e 10% arabica',
    quantity:'150pz',
    },
    {
    img:'img/cialde/product-img-4.jpg',
    title:'Cialda Blu ese44',
    description_one: 'Tostatura forte, bilanciata tra',
    description_two: '70% robusta e 30% arabica',
    quantity:'150pz',
    },
    {
    img:'img/cialde/product-img-5.jpg',
    title:'Cialda Oro ese44',
    description_one: 'Un aroma intenso, una soffice crema',
    description_two: 'e un retrogusto persistente ma delicato',
    quantity:'100pz',
    },
    {
    img:'img/cialde/product-img-6.jpg',
    title:'Cialda Bar ese44',
    description_one: 'Miscela prodotta da caffè sudamericano,',
    description_two: 'aroma intenso e vellutato',
    quantity:'100pz',
    },
    {
    img:'img/cialde/product-img-7.jpg',
    title:'Cialda Dek ese44',
    description_one: 'Decaffeinato prima della tostatura',
    description_two: 'con il solo utilizzo di acqua e vapore',
    quantity:'100pz',
    },
  ]

  var productContainer = document.getElementById('product-container-ese44');

  cialdeEse44.forEach(function (element) {
    var productItem = document.createElement('div');
    productItem.className = 'col-lg-4 col-md-6 text-center';
    productItem.innerHTML = `
      <div class='single-product-item'>
        <div class='product-image'>
          <img src='${element.img}' alt=''>
        </div>
        <h3>${element.title}</h3>
        <p class='product-price'><span>${element.description_one}<br>${element.description_two}<br>${element.quantity}</span></p>
      </div>
    `;
    productContainer.appendChild(productItem);
  });
});
