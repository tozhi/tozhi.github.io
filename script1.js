document.addEventListener("DOMContentLoaded", function() {
  // Get the redirect text element
  var redirectText = document.getElementById("redirectText");
  // Get the content container element
  var container = document.querySelector(".container");

  // Add a click event listener to the redirect text
  redirectText.addEventListener("click", function() {
    // Apply the fadeOut class to initiate the fade-out effect
    redirectText.classList.add("fadeIn");
    container.classList.add("fadeIn");

    // Redirect to index.html after the fade-out animation completes
    setTimeout(function() {
      window.location.href = "load.html";
    }, 100); // Delay in milliseconds (1 second)
  });
});


const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {
  const words = elem.textContent.split(' ');
  elem.innerHTML = '';

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  elem.innerHTML = words.join(' ');

  const children = document.querySelectorAll('span > i');
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * .2}s`;
  });
});
