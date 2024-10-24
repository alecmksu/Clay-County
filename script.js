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