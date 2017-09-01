import $ from 'jquery';

let fn = null;

function bind(el) {
  const element = $(el);

  setTimeout(updateMinHeight);
  $(window).bind('resize', updateMinHeight);

  fn = updateMinHeight;

  function updateMinHeight() {
    element.css({
      minHeight: $(window).height() - element.offset().top,
    });
  }
}

function unbind(el) {
  $(window).unbind('resize', fn);
}

export default {
  bind,
  unbind,
};
