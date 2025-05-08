particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update;
stat = new stats;
stat.setMode(0);
stat.domElement.style.position = 'absolute';
stat.domElement.style.left = '0px';
stat.domElement.style.top = '0px';
document.body.appendChild(stat.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stat.begin();
  stat.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);;
// for project
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

$(document).ready(function(){
  setInterval(() => {
      $.get("https://api.lanyard.rest/v1/users/695817459206324265", function({ data }){
          $(".discord-user").text(`${data.discord_user.username}#${data.discord_user.discriminator}`)
          if(data.active_on_discord_desktop === true){
              $(".discord").html('Online on <span class="fw-bold">Desktop</span>');
              $(".fa-circle").removeClass("offline");
              $(".fa-circle").addClass("online");
          }else if(data.active_on_discord_mobile === true){
              $(".discord").html('Online on <span class="fw-bold">Mobile</span>');
              $(".fa-circle").removeClass("offline");
              $(".fa-circle").addClass("online");
          }else if(data.discord_status !== "offline"){
              $(".discord").html('Online on <span class="fw-bold">Web</span>');
              $(".fa-circle").removeClass("offline");
              $(".fa-circle").addClass("online");
          }else {
              $(".discord").text("Offline");
              $(".fa-circle").removeClass("online");
              $(".fa-circle").addClass("offline");
          }

          if(data.listening_to_spotify === false){
              $(".spotify").html('Listening to <span class="fw-bold">nothing</span>');
          }else {
              $(".spotify").html(`Listening to <span class="fw-bold"><a target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song}</a></span> by <span class="fw-bold"> ${data.spotify.artist}</span>`);
          }

          if(data.activities.length > 0){
              data.activities.forEach(activity => {
                  $(".activity").html(`<span class="fw-bold">${activity.name}</span> : ${activity.state}`);
              });
          }else {
              $(".activity").html(`Doing <span class="fw-bold">nothing</span>`)
          }

      });
  }, 1000);
});

function quote(){
    const got = require("got")
    let link = "https://api.quotable.io/random?maxLength=50"
    let random = got(link).then(res => JSON.parse(res.body))
    var quote = random.content
    document.write(quote)
    
}