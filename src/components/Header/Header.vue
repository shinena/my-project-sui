<template>
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left">
      <span class="icon" :class="iconClass"></span>{{button}}
    </a>
    <h1 class="title" v-text="title"></h1>
  </header>
</template>
<script>
export default {
  props: {
    icon: '',
    title: '',
    button: ''
  },
  computed: {
    iconClass () {
      return 'icon-' + this.icon
    }
  }
}
</script>
