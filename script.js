const freelancers = [
  { name: 'Alice', startingPrice: 3, occupation: 'Writer' },
  { name: 'Bob', startingPrice: 50, occupation: 'Teacher' },
  { name: 'Carol', startingPrice: 70, occupation: 'Programmer' },
  { name: 'Dr. Slice', startingPrice: 25, occupation: 'gardener' },
  { name: 'Dr. Pressure', startingPrice: 51, occupation: 'programmer' },
  { name: 'Prof. Possibility', startingPrice: 43, occupation: 'teacher' },
  { name: 'Prof. Prism', startingPrice: 81, occupation: 'teacher' },
  { name: 'Dr. Impulse', startingPrice: 43, occupation: 'teacher' },
  { name: 'Prof. Spark', startingPrice: 76, occupation: 'programmer' },
  { name: 'Dr. Wire', startingPrice: 47, occupation: 'teacher' },
  { name: 'Prof. Goose', startingPrice: 72, occupation: 'driver' },
];

// Declared body var to manipulate DOM
const body = document.querySelector('body');

// -----HEADER-----
// Declared title variable with h1 tag
const headerTitle = document.createElement('h1');
// created text to fill the title with
headerTitle.textContent = 'Freelancer Forum';
// attached title to body of document
body.append(headerTitle);

// ---AVERAGE STARTING PRICE-----

let averageStartingPrice = 0;
// we will need to create a function that takes an array of
// starting prices and returns their average as the above variable.
// be sure to set the return value to 2 decimals.


const avgPriceText = `The average starting price is $${averageStartingPrice}`;
const avgPriceElement = document.createElement('p');
avgPriceElement.textContent = avgPriceText;
body.append(avgPriceElement);

// ----SECOND HEADER-----
const headerTitle2 = document.createElement('h1');
headerTitle2.textContent = 'Available Freelancers';
body.append(headerTitle2);

// -----START OF TABLE-----
const table = document.createElement('table');
body.append(table);

const tableHeader = document.createElement('tr');
const headerLabels = ['Name', 'Occupation', 'Starting Price'];
// Table Header
headerLabels.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    tableHeader.appendChild(th);
});
table.appendChild(tableHeader);

// -----START OF CELL CREATION-----
const rows =freelancers.map((individual) => createFreelancerRows(individual));
rIterator = rows[Symbol.iterator]();

table.append(rIterator.next().value);

table.append(rIterator.next().value);
table.append(rIterator.next().value);
let itercount = 3
// -----MATH for Average Price----
const priceBlock = document.querySelectorAll(".price");
console.log(priceBlock[0].innerText)
function pBlock(){
    for (price of priceBlock){
       averageStartingPrice += Number(price.innerText.slice(1))

    }

    const p = document.querySelector("p")
    p.innerText = `The average starting price is $${averageStartingPrice}`;

}
pBlock()

// Timer for new additions to forum
const addFreelancerInterval = setInterval(addFreelancer, 2000);

// Function to return a row with the individual's input
function addFreelancer() {
    table.append(rIterator.next().value);
    itercount++
    if (itercount >= rows.length) {
        clearInterval(addFreelancerInterval);
      }
      pBlock();
}

function createFreelancerRows(individual){
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = individual.name;
    row.appendChild(nameCell);
    
    const occupationCell = document.createElement('td');
    occupationCell.textContent = individual.occupation;
    row.appendChild(occupationCell);
    
    const priceCell = document.createElement('td');
    priceCell.className = "price"
    priceCell.textContent = `$` + individual.startingPrice;
    row.appendChild(priceCell);
    return row
}
// ----- TESTING STUFF-----

// function render() {
//   // inside the .map()

//   const nameElement = document.createElement('td');
//   const content = document.createTextNode('adit');
//   nameElement.appendChild(content);
//   row.appendChild(nameElement);

//   const occupation = document.createElement('td');
//   const content2 = document.createTextNode('me');
//   occupation.appendChild(content2);
//   row.appendChild(occupation);

//   const price = document.createElement('td');
//   const content3 = document.createTextNode('$1');
//   price.appendChild(content3);
//   row.appendChild(price);
//   //   const cell = freelancers.map((person) => {
//   //     const element = document.createElement('tr');
//   //     element.classList.add(person.name, person.occupation, person.startingPrice);
//   //     return element;
//   //   });
//   const table = document.querySelector('table');
//   table.appendChild(row);
// }

// pick a freelancer from the array and push
