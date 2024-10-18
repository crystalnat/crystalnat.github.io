document.getElementById('scrollButton').addEventListener('click', function() {
  document.querySelector('.second').scrollIntoView({
    behavior: 'smooth'
  });
});



document.getElementById('nextButton').addEventListener('click', function() {
  document.querySelector('.fourth').scrollIntoView({
    behavior: 'smooth'
  });
})

document.getElementById('randomButton').addEventListener('mouseover', function() {
  const rect = this.getBoundingClientRect();
  const startX = rect.left + window.scrollX;
  const startY = rect.top + window.scrollY;

  const maxRadius = 400;

  const randomAngle = Math.random() * 2 * Math.PI;

  const randomRadius = Math.random() * maxRadius;

  const randomX = startX + randomRadius * Math.cos(randomAngle);
  const randomY = startY + randomRadius * Math.sin(randomAngle);

  this.style.left = randomX + 'px';
  this.style.top = randomY + 'px';
});

document.getElementById('randomButton').addEventListener('click', function() {
  const button = document.getElementById('randomButton');
  const gif = document.getElementsByClassName('nailong');
  if (gif.length > 0) {
    gif[0].style.display = 'flex';
    button.style.display = 'none';

    setTimeout(function() {
      gif[0].style.display = 'none';
      button.style.display = 'flex';
    }, 2000); 
  }
});

let isMoved = false; // Flag untuk memeriksa status gerakan

document.getElementById('fourthButton').addEventListener('click', function() {
  const box1 = document.getElementById('fb-1');
  const box2 = document.getElementById('fb-2');
  const box3 = document.getElementById('fb-3');
  const box4 = document.getElementById('fb-4');
  const title = document.getElementById('fourthText');

  box1.style.display = 'flex';
  box2.style.display = 'flex';
  box3.style.display = 'flex';
  box4.style.display = 'flex';

  setTimeout(function() {
    if (!isMoved) {
      title.style.transition = 'all 1s ease';
      title.style.opacity = '1';
      box1.style.transition = 'all 1s ease';
      box1.style.transform = 'translateY(-250px) translateX(-600px) rotate(30deg)';

      box2.style.transition = 'all 1s ease';
      box2.style.transform = 'translateY(-200px) translateX(500px) rotate(-10deg)';

      box3.style.transition = 'all 1s ease';
      box3.style.transform = 'translateY(200px) translateX(-500px) rotate(10deg)';

      box4.style.transition = 'all 1s ease';
      box4.style.transform = 'translateY(200px) translateX(700px) rotate(-5deg)';
    } else {
      title.style.opacity = '0';
      title.style.transition = 'all 1s ease';
      box1.style.transition = 'all 1s ease';
      box1.style.transform = 'translateY(0) translateX(0) rotate(0deg)';

      box2.style.transition = 'all 1s ease';
      box2.style.transform = 'translateY(0) translateX(0) rotate(0deg)';

      box3.style.transition = 'all 1s ease';
      box3.style.transform = 'translateY(0) translateX(0) rotate(0deg)';

      box4.style.transition = 'all 1s ease';
      box4.style.transform = 'translateY(0) translateX(0) rotate(0deg)';
    }

    isMoved = !isMoved;
  }, 100); 
});

document.getElementById('nextToThird').addEventListener('click', function() {
  document.querySelector('.third').scrollIntoView({
    behavior: 'smooth'
  });
});

document.getElementById("yes").addEventListener("click", function() {
  const pesan = document.getElementById("pesan");
  pesan.style.display = "flex";
  document.querySelector('.pesan').scrollIntoView({
    behavior: 'smooth'
  })
  const bubbles = document.querySelectorAll('.chat-wa > div');
  let index = 0;

  function showBubble() {
    if (index < bubbles.length) {
      bubbles[index].classList.add('show');
      index++;
      setTimeout(showBubble, 3000); // delay between showing bubbles
    }
  }

  setTimeout(function() {
    showBubble();
  }, 1500);
  

});


