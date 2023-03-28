// let menuBtn = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');

// menuBtn.onclick = () => {
//   navbar.classList.toggle('active');
// };

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};


// var icon = document.getElementById("djein");
// icon.onclick = function(){


// document.body.classList.toggle("dark-theme");
// if(document.body.classList.contains("dark-theme")){
// icon.src= "images/p1.png";
// } else {
//   icon.src= "images/black1.png";
// }
// }

// let registerBtn = document.querySelector('.account-form .register-btn');
// let loginBtn = document.querySelector('.account-form .login-btn');

// registerBtn.onclick = () => {
//   registerBtn.classList.add('active');
//   loginBtn.classList.remove('active');
//   document.querySelector('.account-form .login-form').classList.remove('active');
//   document.querySelector('.account-form .register-form').classList.add('active');
// };

// loginBtn.onclick = () => {
//   registerBtn.classList.remove('active');
//   loginBtn.classList.add('active');
//   document.querySelector('.account-form .login-form').classList.add('active');
//   document.querySelector('.account-form .register-form').classList.remove('active');
// };

// let accountForm = document.querySelector('.account-form')

// document.querySelector('#account-btn').onclick = () => {
//   accountForm.classList.add('active');
// }

// document.querySelector('#close-form').onclick = () => {
//   accountForm.classList.remove('active');
// };

// var swiper = new Swiper(".home-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 5000, 
//   },
// });

// var swiper = new Swiper(".home-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable:true,
//   },
//   loop:true,
//   grabCursor:true,
// });




// var homeCoursesSwiper = new Swiper(".home-courses-slider", {
//   loop: true,
//   speed: 1000, // sets the delay time to 1000 milliseconds
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper1 = new Swiper(".home-courses-slider", {


  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
});

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
});

// var swiper5 = new Swiper(".home-courses-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },
// });

// var swiper6 = new Swiper(".teachers-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 5000,
//   },
// });

// var swiper6 = new Swiper(".teachers-slider", {
//   loop: true,
//   // grabCursor: true,
//   spaceBetween: 20,
//   pauseOnMouseEnter: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//     autoplay: {
//       delay: 1000,
//     },

//   },
// });

var swiper3 = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  }
})

// var swiper6 = new Swiper(".teachers-slider", {
//   loop: true,
//   // grabCursor: true,
//   spaceBetween: 20,
//   pauseOnMouseEnter: true,
//   pauseOnInteraction: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },
//   autoplay: {
//     delay: 1000,
//   },
// });
var swiper4 = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  }
});



// var swiper = new Swiper(".teachers-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,

//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   991: {
  //     slidesPerView: 3,
  //   },
  // },

  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
//   },
// });


// var swiper = new Swiper(".reviews-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },

//   autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//   },
// });



// let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

// accordion.forEach(acco => {
//   acco.onclick = () => {
//     accordion.forEach(dion => dion.classList.remove('active'));
//     acco.classList.toggle('active');
//   };
// });



// var swiper = new Swiper('.teachers-slider', {
//   loop: true,
//   autoplay: {
//     delay: 2000,
//   },
// });


document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};




// var icon = document.getElementById("djein");
// icon.onclick = function(){
  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.classList.toggle('fa-sun');
    toggleBtn.classList.toggle('fa-moon');
  });
  



const counters = document.querySelectorAll('.ox h2');

counters.forEach(counter => {

  const target = +counter.textContent.replace("+", "");

  let count = 0;

  const interval = 50;

  const step = Math.ceil(target / (1000 / interval));

  counter.textContent = '0';

  const counterInterval = setInterval(() => {
    count += step;

    if (count >= target) {
      counter.textContent = target + "+";
      clearInterval(counterInterval);
    } else {
      counter.textContent = count + "+";
    }
  }, interval);
});


