<template>
  <i class="iconfont"
    :class="'icon-' + maType"
    :style="'font-size:' + maSize + 'px'"><slot></slot></i>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    props: {
      maType: {
        type: String,
        required: true,
      },
      maSize: {
        type: String,
      },
    },
  };

</script>
