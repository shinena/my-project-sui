<template>
<div>
  <div v-for="(list,i) in lists" class="row" :key="i">
      <div class="col-50">
        <a class="tab-item" >
          <router-link :to="{path: list[0].path}">
          <!-- 这里不同于首页的tab标签切换，所以不需要replace这个参数，让路由可以后退 -->
            <span class="icon"  v-bind:class="list[0].icon"></span><br>
            <span class="tab-label">{{list[0].title}}</span>
          </router-link>
      </a>
    </div>
    <div class="col-50">
        <a class="tab-item">
          <router-link :to="{ path: list[1].path}">
          <!-- 这里不同于首页的tab标签切换，所以不需要replace这个参数，让路由可以后退 -->
        <span class="icon"  v-bind:class="list[1].icon"></span><br>
        <span class="tab-label">{{list[1].title}}</span>
          </router-link>
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        [{
          title: '动态',
          icon: 'icon-app',
          path: '/me/moment'
        },
        {
          title: '访客',
          icon: 'icon-friends',
          path: '/me/friends'
        }],
        [{
          title: '文章',
          icon: 'icon-menu',
          path: '/me/articles'
        },
        {
          title: '最佳实现',
          icon: 'icon-browser',
          path: '/me/practice'
        }],
        [{
          title: '阅读',
          icon: 'icon-code',
          path: '/me/read'
        },
        {
          title: '收藏列表',
          icon: 'icon-star',
          path: '/me/love'
        }]
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.row{
  margin-top:10px;
}
.col-50{
background-color: #fff;
}
</style>
