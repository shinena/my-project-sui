<template>
  <div class="content pull-to-refresh-content" @refresh="refresh" :data-ptr-distance="distance">
      <!-- 默认的下拉刷新层 -->
      <div class="pull-to-refresh-layer">
          <div class="preloader"></div>
          <div class="pull-to-refresh-arrow"></div>
      </div>
      <!-- 下面是正文 -->
      <slot name="content"></slot>

  </div>
</template>
<script>
export default {
  props: {
    distance: {
      type: Number,
      default: 44
    }
  },
  mounted () {
    $.initPullToRefresh(this.$el)
  },
  destroyed () {
    $.destroyPullToRefresh(this.$el)
  },
  methods: {
    refresh (ev) {
      let gresolve = null
      let greject = null

      const promise = new Promise((resolve, reject) => {
        gresolve = resolve
        greject = reject
      })
      this.$emit('onrefresh', ev, gresolve, greject)

      promise.then(() => {
        $.pullToRefreshDone(this.$el)
      }).catch(() => {
        $.pullToRefreshDone(this.$el)
      })
    }
  }
}
</script>
