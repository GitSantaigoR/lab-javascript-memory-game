const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];
const memoryGame = new MemoryGame(cards);
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
    if (memoryGame.pickedCards.length < 2) {
      memoryGame.pickedCards.push(card);
      card.classList.toggle("turned");
    }
      if (memoryGame.pickedCards.length === 2) {
        const pairs = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        );
        if (pairs) {
          memoryGame.pickedCards[0].classList.add("blocked");
          memoryGame.pickedCards[1].classList.add("blocked");
          const isFinished = memoryGame.checkIfFinished();
          if (isFinished) {
            alert("You won!!!!😮💰");
          }
          memoryGame.pickedCards = [];
          return;
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove("turned");
            memoryGame.pickedCards[1].classList.remove("turned");
            memoryGame.pickedCards = [];
          }, 3000);
        }
      }
      console.log(`Card clicked:`, card);
      });
      });
      });
