<template>
  <div class="page-group">
    <header-tab icon="left" button="返回" title="下拉刷新"></header-tab>
    <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
    <refresh :distance="55" @onrefresh="onrefresh">
      <div class="card-container" slot="content">
          <div v-for="(value, index) in cards" :key="index" class="card" @click="goDetail(index)">
            <div class="card-header">card{{index+1}} {{value.title}}</div>
            <div class="card-content">
              <div class="card-content-inner">
                这里是第{{index+1}}个card，{{value.content}}。
              </div>
            </div>
          </div>
      </div>
    </refresh>
  </div>
</template>
<script>
import refresh from './Refresh/refresh'
export default {
  name: 'Home',
  components: {
    refresh
  },
  data () {
    return {
      cards: [1]
    }
  },
  beforeMount () {
    this.$http.get('../../static/data/news.json').then((response) => {
      console.log(response)
      this.cards = response.body.data
    })
    this.cards.push(this.cards.length + 1)
  },
  methods: {
    goDetail (index) {
      this.$router.push({
        name: 'Detail',
        path: '/Detail',
        params: {
          Lcontent: encodeURIComponent(this.cards[index].Lcontent)
        }
      })
    },
    onrefresh (ev, resolve, reject) {
      setTimeout(() => {
        this.cards.unshift(this.cards.length + 1)
        this.cards.unshift(this.cards.length + 1)
        this.cards.unshift(this.cards.length + 1)
        this.cards.unshift(this.cards.length + 1)
        this.cards.unshift(this.cards.length + 1)

        resolve()
      }, 1000)
    }
  }
}
</script>
