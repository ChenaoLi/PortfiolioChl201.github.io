$(document).ready(function () {
  
  $('.nav-link').click(function (e) {
      e.preventDefault();

      
      $('.content').hide();

      
      var target = $(this).data('target');
      $('#' + target).show();
  });

  $('.card-img').click(function (e) {
    e.preventDefault();

    
    $('.content').hide();

    
    var target = $(this).data('target');
    $('#' + target).show();
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
  
  var backLinks = document.querySelectorAll('.card-link');

  
  backLinks.forEach(function(backLink) {
    backLink.addEventListener('click', function(event) {
    
      event.preventDefault();

      
      var targetContentId = backLink.getAttribute('data-target');

     
      var allContents = document.querySelectorAll('.content');
      allContents.forEach(function(content) {
        content.style.display = 'none';
      });

    
      document.getElementById(targetContentId).style.display = 'block';
    });
  });
});



function refreshPage() {
  location.reload();
}