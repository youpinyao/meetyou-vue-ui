<template>
  <label class="ma-switch">
    <input type="checkbox"
      :checked="checked"
      @change="updateCheck($event)"
      :disabled="disabled" />
    <i class="switch-appearance"></i>
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import $ from 'jquery';

  export default {
    data() {
      return {

      };
    },
    computed: {

    },
    methods: {
      updateCheck(e) {
        this.$emit('change', e.target.checked);
      },
    },
    watch: {

    },
    mounted() {

    },
    created() {

    },
    model: {
      prop: 'checked',
      event: 'change',
    },
    props: {
      checked: Boolean,
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>
