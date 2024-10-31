// Alec: Changing Filter dropdown menu display propety
document.getElementById('filter').addEventListener('click', function() {
    const filterDropdown = document.getElementById('filtersDrop');
    
    // Alec: Toggle display property
    if (filterDropdown.classList.contains('filter-hide')) {
      filterDropdown.classList.remove('filter-hide');
    } else {
      filterDropdown.classList.add('filter-hide');
    }
  });


  const records = [
    { name: "John Doe", location: { township: 6, range: 1, section: 3 } },
    { name: "John Doe", location: { township: 6, range: 4, section: 5 } },
    { name: "Jane Smith", location: { township: 7, range: 1, section: 1 } },

];


    const outsideGrid = document.querySelector('.outsideGrid')
    const insideGrid = document.querySelector('.insideGrid');

    function gridMap() {

      //creates the 4x5 outer grid(township and range)
      for(let township = 6; township < 11; township++) {
          for(let range = 1; range < 5 ; range ++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.id = `OuterCell-Row${township}-column${range}`
          outsideGrid.appendChild(cell);

      //creates the 6x6 inner grid(sections)
      for(let section = 1; section < 37; section++) {
          const cellInside = document.createElement('div')
          cellInside.classList.add("innerCell")
          cellInside.id = `InnerCell-TownShip${township}-Range${range}-Section${section}`
          cell.appendChild(cellInside)
      }
    }
  }
}

//event listener for bottom section and to highlight grid. 
document.getElementById("searchButton").addEventListener("click", function() {

//clears the highlights when you want another person.
let clearTheGrids = document.querySelectorAll(".highlight")
clearTheGrids.forEach(grid => {
  grid.classList.remove("highlight"); 
})

const search = document.getElementById("nameInput").value.toLowerCase(); 

//filters through data and grabs anyone with the name you input. Creates an array that holds the persons data
let recordName = records.filter(person => person.name.toLowerCase() == search); 

//loops through the array made by the filter() method and grabs individual properties. 
//will be used to show names(grantee and grantor), dates etc. 
//will need divs for the bottom section 
recordName.forEach(record => {
  let township = record.location.township
  let range = record.location.range
  let section = record.location.section
  let name = record.name

  //grabs the id based on the locations
  const targetId = `InnerCell-TownShip${township}-Range${range}-Section${section}`
  const targetSection = document.getElementById(targetId);
//adds highlights depending on the location of the record
  if(targetSection) {
    targetSection.classList.add('highlight'); 
  } else {
    alert('Not A Valid Name!');
  }

});
})
gridMap(); 