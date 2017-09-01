<template>
  <i class="iconfont"
    :class="'icon-' + maType"
    :style="'font-size:' + maSize + 'px'"></i>
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
