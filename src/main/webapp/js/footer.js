$(document).ready(function () {
  // Toggle footer list on mobile
  $('.accordion-toggle').click(function () {
    const list = $(this).next('.footer-list');
    if (list.length) {
      list.toggleClass('open');
    } else {
      $(this).next().next('.footer-list').toggleClass('open');
    }
  });
});
