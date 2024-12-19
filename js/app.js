$(document).ready(function () {
  $('.searchSm').on('click', '.closeBtn', function () {
    $('.searchSm').removeClass('active');
  });

  // Open search box
  $('.search-icon').click(function () {
    $('.searchSm').addClass('active');
  });

  $(document).keydown(function (e) {
    if (e.key === 'Escape') {
      $('.searchSm').removeClass('active');
    }
  });
});

document.getElementById('phoneLink').addEventListener('click', function (e) {
  e.preventDefault(); 

  const userConfirmation = confirm('Do you want to call 01751134884?');
  if (userConfirmation) {
    this.href = 'tel:01751134884';
    this.textContent = '01751134884';

    window.location.href = 'tel:01751134884';
  }
});
