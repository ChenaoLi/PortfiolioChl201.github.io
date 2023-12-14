$(document).ready(function () {
  // Handle the click event for nav links
  $('.nav-link').click(function (e) {
      e.preventDefault();

      // Hide all content sections
      $('.content').hide();

      // Show the selected content section
      var target = $(this).data('target');
      $('#' + target).show();
  });
});