<template>
  <div class="ma-input"
    :disabled="disabled"
    ref="element">
    <input v-if="type !== 'textarea'"
      :type="type"
      :value="value"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :accept="accept"
      :pattern="pattern"
      :min="min"
      :max="max"
      :step="step"
      @input="updateValue($event.target.value)"
      @blur="updateValue($event.target.value, true)"
      :readonly="readonly"
      :disabled="disabled" />

    <textarea v-if="type === 'textarea'"
      :type="type"
      :value="value"
      @input="updateValue($event.target.value)"
      @blur="updateValue($event.target.value, true)"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :accept="accept"
      :pattern="pattern"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly"
      :disabled="disabled"></textarea>

    <ma-icon class="clear"
      v-show="maClear && value"
      ma-type="close"
      @click.native="clearClick($event)"></ma-icon>

    <div ng-transclude></div>
  </div>

</template>
<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        isNum: false,
        decimal: 2,
      };
    },
    computed: {

    },
    methods: {
      clearClick() {
        this.updateValue('');
      },
      updateValue(value, isBlur) {
        const v = this.convertValue(value, isBlur);

        this.$emit('input', v);
      },
      convertValue(value, isBlur) {
        const decimal = this.decimal;
        const min = this.min;
        const max = this.max;
        const retValue = keyup.call(this);

        $(this.$refs.element).find('input, textarea').val(retValue);

        return retValue;

        function keyup(e) {
          let v = `${value}`;
          let newValue = '';

          v = v.split('');

          let str = [];
          let decimalCount = 0;

          if (v[0] === '-' && v.length === 1) {
            // 为一个负号时不处理
            str = v;
          } else {
            this.$util.each(v, (d, k) => {
              if (decimal && d === '。') {
                d = '.';
              }

              if (decimal && k !== 0 && d === '.' && decimalCount === 0) {
                str.push(d);
                decimalCount += 1;
              }

              if (!isNaN(parseInt(d, 10))) {
                str.push(d);
              }

              if (k === 0 && d === '-') {
                str.push(d);
              }
            });


            if (str[str.length - 1] !== '.' && (!isNaN(min) || !isNaN(max))) {
              str = parseFloat(str.join(''));

              if (isNaN(str)) {
                str = '';
              }

              if (!isNaN(min) && str <= min && isBlur) {
                str = min;
              }
              if (!isNaN(max) && str > max) {
                str = max;
              }

              str = (`${str}`).split('');
            }
          }

          newValue = str.join('') || '';

          if (!isNaN(decimal) && newValue && newValue.split('.')[1] && newValue.split(
              '.')[1].length > decimal) {
            newValue = parseFloat(newValue).toFixed(decimal);
          }
          return newValue;
        }
      },
      setisNum(d) {
        if (d || d === '') {
          this.isNum = true;
        }
      },
      setDecimal(d) {
        this.decimal = isNaN(d) ? 2 : d;
      },
    },
    watch: {
      maNum(d) {
        this.setisNum(d);
      },
      maDecimal(d) {
        this.setDecimal(d);
      },
    },
    mounted() {
      $(this.$refs.element).bind('click', (e) => {
        if (e.eventPhase === 2) {
          this.$emit('ma-icon-click', {
            $event: e,
          });
        }
      });
    },
    created() {
      this.setisNum(this.maNum);
      this.setDecimal(this.maDecimal);
    },
    props: {
      value: [String, Number],
      maNum: [String, Boolean, Number],
      maDecimal: [Number],
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
        default: undefined,
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
      maClear: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>
