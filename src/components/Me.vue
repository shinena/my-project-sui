<template>
  <div class="page-group">
    <header-tab icon="settings" title="Me"></header-tab>
    <div class="Top">
      <img class="img-top" src="../assets/img/index.png"/>
      <div class="user">
        <img :src="userData.src"/>
        <span class="name">{{userData.nickName}}</span>
        <p class="desc">{{userData.des}}</p>
      </div>
      <ul class="data">
        <li><em>{{userData.score}}</em><span>声望</span></li>
        <li><em>{{userData.following}}</em><span>关注者</span></li>
        <li><em>{{userData.follower}}</em><span>关注</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userData: {
        src: require('@/assets/img/user.jpg'),
        nickName: 'opening',
        des: '这是我的描述',
        score: 10,
        following: 1,
        follower: 2
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.Top{
  background-color: #fff;
  .img-top{
    display: block;
    width: 100%;
    height: 200px;
  }
  .user{
    position: relative;
    top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width:50px;
      height: 50px;
      border-radius: 50%;
    }
    .name{
      font-size: 20px;
      font-weight: 600;
    }
    .desc{
      font-size: 12px;
    }
  }
  .data{
    display: flex;
    justify-content: space-between;
    li{
      flex: 1;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      em{
        color:#dfdfdf;
        font-style:normal;
      }
      span{
        color:#666;
      }
    }
  }
}
</style>
