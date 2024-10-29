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


  const records = [
    { name: "John Doe", location: { township: 6, range: 1, section: 3 } },
    { name: "John Doe", location: { township: 6, range: 4, section: 5 } },
    { name: "Jane Smith", location: { township: 2, range: 1, section: 1 } },

];


      const outsideGrid = document.querySelector('.outsideGrid')
      const insideGrid = document.querySelector('.insideGrid');

      function gridMap() {


      for(let row = 6; row < 11; row++) {
          for(let column = 1; column < 5 ; column ++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.id = `OuterCell-Row${row}-column${column}`
          outsideGrid.appendChild(cell);

      for(let j = 1; j < 37; j++) {
          const cellInside = document.createElement('div')
          cellInside.classList.add("innerCell")
          cellInside.id = `InnerCell-TownShip${row}-Range${column}-Section${j}`
          cell.appendChild(cellInside)
      }
    }
  }
}
  
gridMap(); 

//event listener for bottom section and to highlight grid. 
document.getElementById("searchButton").addEventListener("click", function() {

const search = document.getElementById("nameInput").value.toLowerCase()

//filters through data and grabs anyone with the name you input. Creates an array that holds the persons data
let recordName = records.filter(person => person.name.toLowerCase() == search) 


//loops through the array made by the filter() method and grabs individual properties. 
//will be used to show names(grantee and grantor), dates etc. 
//will need divs for the bottom section 
recordName.forEach(record => {
  let row = record.location.township
  let column = record.location.range
  let j = record.location.section
  console.log(row, column, j)
  //grabs the id based on the locations
  const targetId = `InnerCell-TownShip${row}-Range${column}-Section${j}`
  console.log(targetId)
  const targetSection = document.getElementById(targetId);

//adds highlights depending on the location of the record
if (targetSection) {
    targetSection.classList.add('highlight'); 
} else {
  alert('');
}

});

})