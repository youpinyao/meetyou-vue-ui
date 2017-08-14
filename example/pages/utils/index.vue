<template>
  <div>
    <ma-crumb-auto>
    </ma-crumb-auto>
    <div>
      <div class="container"
        v-ma-full-container>
        <h2>angular 扩展</h2>
        <h3>util.each</h3>
        <div class="p">
          <code>
            @params {Array, Object} item 要遍历的数据或对象 @params {Function} callback 要遍历的数据或对象的回调 @params {Number, String}
            value 遍历数组或对象每个的value @params {Number, String} key 遍历数组或对象每个的key const items = [1, 2, 3];
            util.each(items, (value, key) => { console.log(value, key); });
          </code>

        </div>
        <h3>util.isNull</h3>
        <div class="p">
          <code>
            @params value 要判断的值 @return {Boolean} 是否为空 const value = ''; console.log(util.isNull(value));
          </code>
        </div>
        <h3>util.isEmpty</h3>
        <div class="p">
          <code>
            @params value 要判断的值，可判断空json和数组 @return {Boolean} 是否为空 const value = {}; console.log(util.isEmpty(value));
          </code>
        </div>
        <h3>util.isArray</h3>
        <div class="p">
          <code>
            @params value 要判断的值 @return {Boolean} 是否为空 const value = ''; console.log(util.isArray(value));
          </code>
        </div>
        <h3>util.uuid</h3>
        <div class="p">
          <code>
            @return {String} 随机生成的uuid const value = ''; console.log(util.uuid());
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    maCrumbAuto,
  } from '../../../src/components';

  export default {
    name: 'utils',
    components: {
      maCrumbAuto,
    },
  };

</script>
<style lang="scss">


</style>
