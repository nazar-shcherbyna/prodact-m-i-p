const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

let map;

function initMap() {
    const myLatLng = { 
        lat: 47.1286361736067, 
        lng: 37.55897540422409 
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
    });
    var iconBase = 'img/';
    var marker = new google.maps.Marker({
        title: "Mari I Poll",
        position: myLatLng,
        map: map,
        icon: iconBase + 'marker-gmaps.png'
    });
}

document.querySelector('.humburger').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.querySelector('.mip__hamburger').classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.querySelector('.mip__hamburger').classList.add('body-active');
    }
})

let close = document.getElementsByClassName('hum-link');

function closeMenu(){
    document.querySelector('.humburger').click();   
}