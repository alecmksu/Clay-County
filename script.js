
// Alec: Changing Filter dropdown menu display propety
document.getElementById('filter').addEventListener('click', function(event) {
  const filterDropdown = document.getElementById('filtersDrop');
  filterDropdown.classList.toggle('filter-hide');
  // will not close when clicking inside box
  event.stopPropagation();
});

// Alec: closing dropdown - W3 school
document.addEventListener('click', function(event) {
  const filterDropdown = document.getElementById('filtersDrop');

  if(!filterDropdown.classList.contains('filter-hide')) {
    filterDropdown.classList.add('filter-hide');
  }
})
// Click event for each option: maybe querySelectorAll for dropdown-option with an forEach loop?

const records = [
  { name: "John Doe", location: { township: 6, range: 1, section: 3 }, date: "10/20/24" },
  { name: "John Doe", location: { township: 6, range: 4, section: 5 }, date: "10/20/24" },
  { name: "Jane Smith", location: { township: 7, range: 1, section: 1 }, date: "10/20/24" },

];


  const outsideGrid = document.querySelector('.outsideGrid'); 
  const insideGrid = document.querySelector('.insideGrid');
  const tableGrab = document.getElementById("tableGrab"); 

  function gridMap() {

    //creates the 4x5 outer grid(township and range)
    for(let township = 6; township < 11; township++) {
        for(let range = 1; range < 5 ; range ++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `OuterCell-Row${township}-column${range}`; 
        outsideGrid.appendChild(cell);
        //console.log(township)
  
    //creates the 6x6 inner grid(sections)
    for(let i = 1; i <= 5; i = i + 2) {
    for(let Altrow1 = 0; Altrow1 <= 5; Altrow1++) {
      const cellInside = document.createElement('div'); 
      cellInside.classList.add("innerCell"); 
      cellInside.id = `InnerCell-TownShip${township}-Range${range}-Section${6 * i - Altrow1}`; 
      cell.appendChild(cellInside); 
    }

    for(let Altrow2 = 1 ; Altrow2 <= 6; Altrow2++) {
      const cellInside = document.createElement('div'); 
      cellInside.classList.add("innerCell"); 
      cellInside.id = `InnerCell-TownShip${township}-Range${range}-Section${6 * i + Altrow2}`; 
      cell.appendChild(cellInside); 
  
    }
    
}
}
}
}

//event listener for bottom section and to highlight grid. 
document.getElementById("searchButton").addEventListener("click", function() {

//clears the highlights when you want another person.
let clearTheGrids = document.querySelectorAll(".highlight"); 
clearTheGrids.forEach(grid => {
grid.classList.remove("highlight"); 
})

const search = document.getElementById("granteeName").value.toLowerCase(); 

//filters through data and grabs anyone with the name you input. Creates an array that holds the persons data
let recordName = records.filter(person => person.name.toLowerCase() == search); 
console.log(recordName); 
//loops through the array made by the filter() method and grabs individual properties. 
//will be used to show names(grantee and grantor), dates etc. 
//will need divs for the bottom section 
recordName.forEach(record => {
let township = record.location.township; 
let range = record.location.range; 
let section = record.location.section; 
let name = record.name; 
let date = record.date; 

//grabs the id based on the locations
const targetId = `InnerCell-TownShip${township}-Range${range}-Section${section}`; 
const targetSection = document.getElementById(targetId);
//adds highlights depending on the location of the record
if(targetSection) {
  targetSection.classList.add('highlight'); 
} else {
  alert('Not A Valid Name!');
}

//create table 
let TR = document.createElement("tr"); 
let TD1 = document.createElement("td"); 
let TD2 = document.createElement("td"); 
let TD3 = document.createElement("td"); 
tableGrab.appendChild(TR);
TR.appendChild(TD1); 
TR.appendChild(TD2); 
TR.appendChild(TD3); 
TD2.innerHTML = name; 
TD3.innerHTML = date; 

});
}); 

gridMap(); 
