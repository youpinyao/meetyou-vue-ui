<template>
  <div>
    <div class="header clearfix">
      <div class="container-fluid clearfix">
        <div class="logo">
          <div>
            <div class="logo-icon">
              <img src="../images/logo.jpg"
                alt="">
            </div>
            <div>
              <div>美柚广告</div>后台组件库
            </div>
          </div>
        </div>
        <ma-first-menu class="container-fluid">
          <!-- <ma-second-menu></ma-second-menu> -->
        </ma-first-menu>
        <div class="info">
          <div class="head">
            <img src="../images/ybb-icon.png" />
          </div>
          <span class="nickname">美柚</span> |
          <a class="logout-font"
            @click="logout($event)"
            href="javascript:void(0)">退出</a>
        </div>
      </div>
    </div>
    <div class="container-fluid col-22 main clearfix">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import '../../src/scss/app.scss';
  import '../scss/app.scss';

  export default {
    name: 'app',
    methods: {
      logout($event) {
        console.log($event);
      },
    },
  };

</script>

<style lang="scss">


</style>
