const navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};

const swiper1 = new Swiper(".home-courses-slider", {


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


const swiper3 = new Swiper(".teachers-slider", {
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

const swiper4 = new Swiper(".reviews-slider", {
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

document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};


