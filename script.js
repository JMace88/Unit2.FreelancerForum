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
const addFreelancerInterval = setInterval(addFreelancer, 2000);

render();

function render() {
  // inside the .map()
  const row = document.createElement('tr');
  const cell = freelancers.map((person) => {
    const element = document.createElement('td');
    element.classList.add(freelancers.name, freelancers.occupation, freelancers.startingPrice);
    return element;
  });
  row.appendChild(cell);
}

// pick a freelancer from the array and push
function addFreelancer() {

}
