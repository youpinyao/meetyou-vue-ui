<template>
  <div class="ma-progress"
    ref="progress"
    :class="{
    success: maStatus === 'success',
    warning: maStatus === 'warning',
    danger: maStatus === 'danger',
    [maType]: true,
  }"
    :style="{
    width: maSize + 'px',
    height: maType !== 'line' ? (maSize + 'px') : '',
  }">
    <svg v-show="maType === 'circle'"
      width="120px"
      height="120px"
      class="ma-progress-circle"
      viewBox="0 0 100 100">
      <path class="ma-progress-circle-trail"
        d="M 50,50 m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94"
        :stroke-width="maStrokeWidth"
        fill-opacity="0"
        :style="{
        strokeDasharray: '295.31px, 295.31px'
      }">
      </path>
      <path class="ma-progress-circle-path"
        d="M 50,50 m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94"
        stroke-linecap="round"
        :stroke-width="maStrokeWidth"
        fill-opacity="0"
        :style="{
        strokeDasharray: (295.31 * (maPercent / 100)) + 'px, 295.31px'
      }"
        style="">
      </path>
    </svg>
    <div class="ma-progress-line"
      v-show="maType === 'line'">
      <div class="ma-progress-line-trail"
        :style="{
        height: maStrokeWidth + 'px',
        width: maSize + 'px',
      }">
        <div class="ma-progress-line-path"
          :style="{
          width: maPercent + '%'
        }"></div>
      </div>
    </div>
    <div class="ma-progress-content">
      <slot></slot>
    </div>
  </div>

</template>
<script>
  import $ from 'jquery';

  export default {
    data() {
      return {

      };
    },
    watch: {
      maSize() {
        this.updateProgress();
      },
      maPercent() {
        this.updateProgress();
      },
    },
    methods: {
      updateProgress() {
        const svg = $(this.$refs.progress).find('.ma-progress-circle');

        svg.attr('width', this.maSize);
        svg.attr('height', this.maSize);
      },
    },
    props: {
      maSize: {
        type: Number,
        default: 120,
      },
      maType: {
        type: String,
        default: 'line',
      },
      maStatus: {
        type: String,
        default: 'success',
      },
      maPercent: {
        type: Number,
        default: 0,
      },
      maStrokeWidth: {
        type: Number,
        default: 6,
      },
    },
  };

</script>
