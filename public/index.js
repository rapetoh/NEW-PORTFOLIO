let text = 'Mobile App Developper with Flutter.     ';
let index = 0;

let booll = true;

function addText() {

    booll ? text = 'Fullstack Web Developper.      ':text ='Mobile App Developper with Flutter.     ';
  // Increment and append
  document.querySelector('.typewriter-text').textContent += text[index]|| ""; 
  index++;
  
  // Recurse or switch to removing
  if(index < text.length) {
    setTimeout(addText, 70); 
  } else {
    removeText();
    booll = !booll;
  }
}

function removeText() {
  // Decrement and remove last char
  document.querySelector('.typewriter-text').textContent = text.substring(0, index);
  index--;

  // Recurse or switch to adding
  if(index >= 0) { 
    setTimeout(removeText, 300);
  } else {
    addText();
  }
}

addText(); // Start the recursion

const options = {
    threshold: 0.5, // Adjust this value as needed
  };

  
  // ...
  const targets = document.querySelectorAll('.main-cards_element');


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing
      } 
    }); 
  },options);
  
  targets.forEach(target => {
    observer.observe(target);
    
    // Remove visible class if already present
    target.classList.remove('is-visible'); 
  });