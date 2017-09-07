const clickoutsideContext = '@@clickoutsideContext';

function bind(el, binding, vnode) {
  el[clickoutsideContext] = {
    documentHandler,
    methodName: binding.expression,
    bindingFn: binding.value,
  };

  setTimeout(() => {
    el.addEventListener('click', documentHandler);
  }, 0);

  function documentHandler(e) {
    // console.log(el);
    // console.log(e.target);
    // console.log(vnode);
    // console.log(binding);

    if (!vnode.context) {
      return false;
    }
    if (binding.expression) {
      if (/ /g.test(binding.expression) || /=|\+|-|\*|%/g.test(binding.expression)) {
        const exec = function () {
          const Fn = Function;
          new Fn(`return ${binding.expression}`)();
        };
        exec.bind(vnode.context)();
      } else {
        vnode.context[el[clickoutsideContext].methodName](e);
      }
    } else {
      el[clickoutsideContext].bindingFn(e);
    }
    return true;
  }
}

function update(el, binding) {
  el[clickoutsideContext].methodName = binding.expression;
  el[clickoutsideContext].bindingFn = binding.value;
}

function unbind(el) {
  el.removeEventListener('click', el[clickoutsideContext].documentHandler);
}

export default {
  bind,
  unbind,
  update,
};
