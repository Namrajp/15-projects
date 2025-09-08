// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".links-container");
// close links
navToggle.addEventListener("click", function () {
  //   links.classList.toggle("show-links");
  //   console.log(linksHeight);
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
