// Changing Filter dropdown menu display propety
document.getElementById('filter').addEventListener('click', function() {
    const filterDropdown = document.getElementById('filters-drop');
    
    // Toggle display property
    if (filterDropdown.classList.contains('filter-hide')) {
      filterDropdown.classList.remove('filter-hide');
    } else {
      filterDropdown.classList.add('filter-hide');
    }
  });



const outsideGrid = document.querySelector('.outsideGrid')

//creates a 4x5 grid with a 6x6 in each cell of the 4x5
function gridMap() {

//4x5
for(let i = 0; i < 20; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = "Outercell" + i 
    outsideGrid.appendChild(cell);

//6x6
for(let j = 0; j < 36; j++) {
    const cellInside = document.createElement('div')
    cellInside.classList.add("innerCell")
    cellInside.id = "innerCell" + j 
    cell.appendChild(cellInside)

  }
 }
}


//temp data for testing
const records = [
  { name: "John Doe", location: { township: 6, range: 1, section: 3 } },
  { name: "John Doe", location: { township: 6, range: 4, section: 5 } },
  { name: "Jane Smith", location: { township: 2, range: 1, section: 1 } },

];

//event listener for bottom section and to highlight grid. 
document.getElementById("searchButton").addEventListener("click", function() {

  const search = document.getElementById("nameInput").value.toLowerCase()
  
  //filters through data and grabs anyone with the name you input. Creates an array that holds the persons data
  let recordName = records.filter(person => person.name.toLowerCase() == search) 
  
  
  //loops through the array made by the filter() method and grabs individual properties. 
  //will be used to show names(grantee and grantor), dates etc. 
  //will need divs for the bottom section 
  recordName.forEach(record=> {
    let township = record.location.township
    let range = record.location.range
    let section = record.location.section
    let name = record.name 
  
    
  });
  
  })