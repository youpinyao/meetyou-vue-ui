<template>
  <div class="ma-input-number-box">
    <ma-input ma-num
      :ma-decimal="maDecimal"
      class="ma-input-number"
      :type="type"
      :value="value"
      @input="updateValue(value)"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :accept="accept"
      :pattern="pattern"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly"
      :disabled="disabled">
      <div class="control"
        :disabled="disabled">
        <div @click="plusNumber($event)"></div>
        <div @click="minusNumber($event)"></div>
      </div>
    </ma-input>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      updateValue(d) {
        this.$emit('input', d);
      },
      plusNumber() {
        this.updateValue((parseFloat(this.value) || 0) + this.step);
      },
      minusNumber() {
        this.updateValue((parseFloat(this.value) || 0) - this.step);
      },
    },
    watch: {
      value(d) {
        const max = this.max;
        const min = this.min;

        if ((d || d === 0) && !isNaN(min) && d < min) {
          this.updateValue(min);
        }
        if ((d || d === 0) && !isNaN(max) && d > max) {
          this.updateValue(max);
        }
      },
    },
    props: {
      value: [String, Number],
      maDecimal: {
        type: Number,
        default: 2,
      },
      placeholder: {
        type: String,
        default: undefined,
      },
      type: {
        type: String,
        default: 'text',
      },
      maxlength: {
        type: Number,
        default: undefined,
      },
      step: {
        type: Number,
        default: 1,
      },
      max: {
        type: Number,
        default: undefined,
      },
      min: {
        type: Number,
        default: undefined,
      },
      pattern: {
        type: String,
        default: undefined,
      },
      accept: {
        type: String,
        default: undefined,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>
