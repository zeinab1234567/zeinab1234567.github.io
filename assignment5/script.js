window.addEventListener('scroll', function () {
  var scroll = window.scrollY;
  var logo = document.querySelector('.site-logo');
  if (scroll >= 20) {
      logo.classList.add('word');
      logo.classList.remove('logo');
  } else {
      if (logo.classList.contains('word')) {
          logo.classList.add('logo');
          logo.classList.remove('word');
      }
  }
});


function createSparkle() {
  var sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = '<span style="font-size:18px;color: #D3D3FF">&#10022;</span>';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  document.getElementById('sparkle-container').appendChild(sparkle);
  setTimeout(function() {
      sparkle.remove();
  }, 2000); // Match the duration of the animation
}

setInterval(createSparkle, 500); // Create a sparkle every 500 milliseconds


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-menu").classList.remove("toggled");

  document.getElementById("search-icon").addEventListener("click", function(e) {
      e.stopPropagation();
      document.getElementById("search-menu").classList.toggle("toggled");
      document.getElementById("popup-search").focus();
  });

  document.querySelectorAll("#search-menu input").forEach(function(input) {
      input.addEventListener("click", function(e) {
          e.stopPropagation();
      });
  });

  document.querySelectorAll("#search-menu, body").forEach(function(element) {
      element.addEventListener("click", function() {
          document.getElementById("search-menu").classList.remove("toggled");
      });
  });
});

