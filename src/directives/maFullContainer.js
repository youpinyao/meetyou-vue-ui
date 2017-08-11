import $ from 'jquery';

function inserted(el) {
  const element = $(el);

  setTimeout(updateMinHeight);
  $(window).resize(updateMinHeight);

  function updateMinHeight() {
    element.css({
      minHeight: $(window).height() - element.offset().top,
    });
  }
}

export default {
  inserted,
};
