'use strict';

const swiper = new Swiper('.swiper-container', {

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
  });

// gMaps

let map;

function initMap() {
    const myLatLng = { 
        lat: 47.1286361736067, 
        lng: 37.55897540422409 
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
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

document.querySelector('.hamburger__btn').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.hamburger__menu').classList.remove('nav-active');
        document.querySelector('.hamburger').classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.hamburger__menu').classList.add('nav-active');
        document.querySelector('.hamburger').classList.add('body-active');
    }
})

let close = document.getElementsByClassName('ham-link');

function closeMenu(){
    document.querySelector('.hamburger__btn').click();   
}

let elemLinkUp = document.querySelector('.why__h2')
let linkUp = document.querySelector('.link-up')

// telegram Bot

function sentInTelegram(){
  
  let chatid = "282352564";
  let token = "1679824814:AAGJMWK8SifDC-mcKfkijCvcnNMAyZHYTSo",
      messName = document.getElementById("recipientName").value,
      messPhone = document.getElementById("recipientPhone").value,
      messMore = document.getElementById("messageText").value;
      
      if (messName !== null){
          if (messName.length < 3) {
              alert('More');
            return;
          }
      }
      if (messPhone !== null && messName !== null){
          if (messPhone.length < 10){
              alert('Телефон должен быть 10 цыфр')
              return;
          }
      }
      let text = `Имя: <b>${messName}</b>\nТелефон: <a href='#'>${messPhone}</a>`;
      if (messMore.length >= 1){
          text = `Имя: <b>${messName}</b>\nТелефон: <a>${messPhone}</a>\nДополнительно: ${messMore}`;
      }
      text = encodeURIComponent(text);

      let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&parse_mode=HTML&text=${text}`;
      
    fetch(url);
      
    let btnSended = document.getElementById('btnsend');

    btnSended.innerHTML = 'Ваш запрос отравлен';
    btnSended.setAttribute("disabled", "disabled");
    btnSended.style.backgroundColor = '#484c53';
    document.getElementById("recipientName").value = '';
    document.getElementById("recipientPhone").value = '';
    document.getElementById("messageText").value = '';
    setTimeout(() => {
      btnSended.removeAttribute("disabled", "disabled");
      btnSended.style.backgroundColor = '#3E4095';
      btnSended.innerHTML = 'Отправить запрос'}, 3000);
};

// Make animate for about us

// let showAboutUs = document.querySelector('.about-us__animate');
// let aboutUsL = document.querySelector('.about-us__items--l');
// let aboutUsLL = document.querySelector('.about-us__items--ll');
// let aboutUsR = document.querySelector('.about-us__items--r');
// let aboutUsRR = document.querySelector('.about-us__items--rr');

// document.addEventListener('scroll', () => {
//   if (showAboutUs.getBoundingClientRect().bottom < 700) {
//     aboutUsL.classList.add('animate__fadeInLeftBig');
//     aboutUsR.classList.add('animate__fadeInRightBig');
//     setTimeout(() => {
//       aboutUsLL.classList.add('animate__fadeInLeftBig')
//       aboutUsRR.classList.add('animate__fadeInRightBig')
//     }, 500)
//   }
//   if (showAboutUs.getBoundingClientRect().bottom > 700) {
//       aboutUsL.classList.remove('animate__fadeInLeftBig');
//       aboutUsR.classList.remove('animate__fadeInRightBig');
//       aboutUsLL.classList.remove('animate__fadeInLeftBig');
//       aboutUsRR.classList.remove('animate__fadeInRightBig');
//   }
// })

// Modal window

const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
    catchFocus: true,
    waitTransitions: true,
    closeOnEsc: true,
    beforeOpen: function(){
    let inp = document.getElementById("recipientPhone");
  
    inp.addEventListener('keypress', e => {
        if(!/\d/.test(e.key))
          e.preventDefault();
    });

  }
});

// izotope

// window.addEventListener('load', () => {
//   let isoBtn = document.querySelectorAll('.filter__btn');
//   let elem = document.querySelector('.filter__items');

//   let iso = new Isotope(elem, {
//     itemSelector: '.filter__item',
//     layoutMode: 'fitRows'
//   });

//   isoBtn.forEach(btn => {
//     btn.addEventListener('click', e => {
//       e.preventDefault();

//       isoBtn.forEach(btn => {
//         btn.classList.remove('active')
//       })

//       e.target.classList.add('active')

//       let filter = e.target.getAttribute('data-filter');

//       filter = filter == '*' ? filter : `.${filter}`

//       iso.arrange({filter: filter})

//     })
//   })
// })