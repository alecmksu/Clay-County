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
for (let i = 0; i < 20; i++) {
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

gridMap();