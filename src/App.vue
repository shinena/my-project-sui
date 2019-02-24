<template>
  <div id="app">
    <div class="page-group">
      <div class="page page-current">
        <bar>
          <bar-item path="/Home" label="首页" icon="home"></bar-item>
          <bar-item path="/Me" label="我" icon="me"></bar-item>
          <bar-item path="/Star" label="收藏" icon="star"></bar-item>
          <bar-item path="/Settings" label="设置" icon="settings"></bar-item>
        </bar>
        <div class="content">
          <!-- 这里是页面内容区 -->
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
/** 整个项目公共css */
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-overflow-scrolling:touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img{
    border:0;
    padding:0;
    margin:0;
  }
  a{
    text-decoration:none;
    outline:none;
  }
  ul,li{
    list-style: none;
  }
  input::-moz-focus-inner,
  textarea::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input,textarea {
    border: 0;
    line-height: normal;
    outline:none;
    -webkit-appearance: none;
  }
  body {
    display: flex;
    height: 100%;
    width: 100%;
    line-height: normal;
    font-family: "微软雅黑";
    margin: 0 auto;
    max-width: 630px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
