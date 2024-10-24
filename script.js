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



//creates 4x5 6x6 grid 
function gridMap() {
    
    const outsideGrid = document.querySelector('.outsideGrid')
    const insideGrid = document.querySelector('.insideGrid');

  for (let i = 0; i < 20; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = "cell" + i 
        outsideGrid.appendChild(cell);

  }
}

  gridMap()