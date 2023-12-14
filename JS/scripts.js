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

  $('.card-img').click(function (e) {
    e.preventDefault();

    // Hide all content sections
    $('.content').hide();

    // Show the selected content section
    var target = $(this).data('target');
    $('#' + target).show();
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
  // 获取所有带有.card-link类的元素
  var backLinks = document.querySelectorAll('.card-link');

  // 遍历所有链接并为它们添加点击事件处理程序
  backLinks.forEach(function(backLink) {
    backLink.addEventListener('click', function(event) {
      // 阻止默认链接行为
      event.preventDefault();

      // 获取要返回的目标内容的ID（使用data-target属性）
      var targetContentId = backLink.getAttribute('data-target');

      // 遍历所有内容元素，隐藏它们
      var allContents = document.querySelectorAll('.content');
      allContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // 显示目标内容
      document.getElementById(targetContentId).style.display = 'block';
    });
  });
});



function refreshPage() {
  location.reload();
}