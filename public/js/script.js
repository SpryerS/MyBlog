/* DOMContentLoaded Event Listener */
/* Wait for the DOM content to be fully loaded */
document.addEventListener('DOMContentLoaded', function() {

  /* Search Functionality */
  /* Get all search buttons and search bar elements */
  const allButtons = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  /* Iterate through all search buttons */
  for (var i = 0; i < allButtons.length; i++) {
      /* Add click event listener to each search button */
      allButtons[i].addEventListener('click', function() {
          /* Show search bar */
          searchBar.style.visibility = 'visible';
          searchBar.classList.add('open');
          /* Set aria-expanded attribute */
          this.setAttribute('aria-expanded', 'true');
          /* Focus on search input */
          searchInput.focus();
      });
  }

  /* Close Search Functionality */
  /* Add click event listener to search close button */
  searchClose.addEventListener('click', function() {
      /* Hide search bar */
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      /* Set aria-expanded attribute */
      this.setAttribute('aria-expanded', 'false');
  });

});