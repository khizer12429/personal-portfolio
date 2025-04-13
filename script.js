
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: "Animation - 1743701654255.json",
  });
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-containers"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: "Animation - 1743697595931.json",
  });
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-containersx"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: "Animation - 1744042278216.json",
  });

  window.addEventListener("load", function(){
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });

  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-containerss"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: "Animation - 1743876975822.json",
  });
 
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-containersss"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: " Animation - 1743878681912.json",
  });
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-containerssss"), 
    renderer: "svg", 
    loop: true, 
    autoplay: true, 
    path: " Animation - 1744540058425.json",
  });
  const topBtn = document.getElementById("topBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved mode from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  } else {
    body.classList.add('light-mode');
  }

  toggle.addEventListener('change', function () {
    if (this.checked) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });

  gsap.from(".seconed .text ", { 
    x: -300, 
    opacity: 0, // End state (normal position, fully visible)
    duration: 0.6, // Animation duration
    scrollTrigger: {
      trigger: ".header", // Start animation when #section2 enters the viewport
      start: "top 10%", // When the top of #section2 is 80% from the top of the viewport
      scroller:"body",
      
    }
  }
);
gsap.from(".seconed .left h2", { 
  x: -500, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 0.8,
  stagger:0.4 // Animation duration
  
});
gsap.from(".seconed .left .icons", { 
  x: -500, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1,
  stagger:0.4 // Animation duration
  
});
gsap.from(".seconed .left .button", { 
  x: -500, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1.2,
  stagger:0.4 // Animation duration
  
});
gsap.from(".third .left", { 
  x: -400, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".third", // Start animation when #section2 enters the viewport
    start: "top 60%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
    
  }
}
);
gsap.from(".third .right", { 
  y: 400, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".third", // Start animation when #section2 enters the viewport
    start: "top 60%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
    
  }
}
);
gsap.from(".fourth .left", { 
  x: -400, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".fourth", // Start animation when #section2 enters the viewport
    start: "top 70%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
    
  }
}
);
gsap.from(".fourth .right", { 
  y: 400, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".fourth", // Start animation when #section2 enters the viewport
    start: "top 70%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
    
  }
}
);
gsap.from(".fifth", { 
  x: -200, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".fifth", // Start animation when #section2 enters the viewport
    start: "top 70%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
  }
}
);
gsap.from(".project", { 
  y: 100, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".project", // Start animation when #section2 enters the viewport
    start: "top 80%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
   
  }
}
);
gsap.from(".last .left", { 
  x: -150, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".last", // Start animation when #section2 enters the viewport
    start: "top 60%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
    
  }
}
);

gsap.from(".header .left , .right ul li, .toggle-switch",{
  y:-40,
  duration:0.4,
  delay:1,
  opacity:0,
  stagger:0.15
})

document.getElementById('mobileMenuButton').addEventListener('click', function() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
  this.classList.toggle('active');
});

  let lastScrollY = window.scrollY;
  const navbar = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-100px"; 
    } else {
      navbar.style.top = "0"; 
    }
    lastScrollY = window.scrollY;
  });

