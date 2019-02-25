<template>
  <div class="detail">
    {{decodeURIComponent(this.$route.params.Lcontent)}}
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      Lcontent: ''
    }
  }
}
</script>
