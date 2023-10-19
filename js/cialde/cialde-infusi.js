document.addEventListener('DOMContentLoaded', function () {
  var cialdeInfusi = [
    {
    img:'img/cialde/product-img-10.jpg',
    title:'Zenzero e Limone',
    description_one: 'Infusi',
    description_two:'&nbsp',
    quantity:'&nbsp',
    },
    {
    img:'img/cialde/product-img-12.jpg',
    title:'Dopo Pasto',
    description_one: 'Infusi',
    description_two:'&nbsp',
    quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-13.jpg',
      title:'Frutti di Bosco',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
    img:'img/cialde/product-img-14.jpg',
    title:'Camomilla',
    description_one: 'Infusi',
    description_two:'&nbsp',
    quantity:'&nbsp',
    },
    {
    img:'img/cialde/product-img-15.jpg',
    title:'Orzo',
    description_one: 'Infusi',
    description_two:'&nbsp',
    quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-16.jpg',
      title:'Ginseng',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-17.jpg',
      title:'Cioccolato',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-18.jpg',
      title:'Nocciola',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-19.jpg',
      title:'Sambuca',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-20.jpg',
      title:'The Nero Limone',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-21.jpg',
      title:'The Verde',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    },
    {
      img:'img/cialde/product-img-22.jpg',
      title:'Cicoria',
      description_one: 'Infusi',
      description_two:'&nbsp',
      quantity:'&nbsp',
    }
  ]

  var productContainer = document.getElementById('product-container-infusi');

  cialdeInfusi.forEach(function (element) {
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
