<template>
  <div class="ma-button"
    :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    computed: {
      classes() {
        const cls = {
          disabled: this.maDisabled === true,
          flat: this.maFlat === true,
          active: this.maActive === true,
        };
        if (this.maSize) {
          cls[this.maSize] = true;
        }
        if (this.maType) {
          cls[this.maType] = true;
        }
        return cls;
      },
    },
    props: {
      maSize: {
        type: String,
        default: 'default',
      },
      maType: {
        type: String,
        default: 'default',
      },
      maFlat: {
        type: Boolean,
        default: false,
      },
      maActive: {
        type: Boolean,
        default: false,
      },
      maDisabled: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>
