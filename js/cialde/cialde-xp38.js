document.addEventListener('DOMContentLoaded', function () {
  var cialdeXp38 = [
    {
    img:'img/cialde/product-img-5.jpg',
    title:'Cialda Oro xp38',
    description_one: 'Un aroma intenso, una soffice crema',
    description_two: 'e un retrogusto persistente ma delicato',
    quantity:'100pz',
    },
    {
    img:'img/cialde/product-img-6.jpg',
    title:'Cialda Bar xp38',
    description_one: 'Miscela prodotta da caffè sudamericano,',
    description_two: 'aroma intenso e vellutato',
    quantity:'100pz',
    },
    {
      img:'img/cialde/product-img-7.jpg',
      title:'Cialda Dek xp38',
      description_one: 'Decaffeinato prima della tostatura',
      description_two: 'con il solo utilizzo di acqua e vapore',
      quantity:'100pz',
    },
    {
    img:'img/cialde/product-img-8.jpg',
    title:'Cialda Napoli xp38',
    description_one: 'Miscela composta 100% robusta, per',
    description_two: 'chi cerca un caffè forte e cremoso',
    quantity:'100pz',
    },
    {
    img:'img/cialde/product-img-9.jpg',
    title:'Cialda Argento xp38',
    description_one: 'Miscela composta da 100% robusta,',
    description_two: 'per un caffè forte e cremoso',
    quantity:'100pz',
    }
  ]

  var productContainer = document.getElementById('product-container-xp38');

  cialdeXp38.forEach(function (element) {
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
