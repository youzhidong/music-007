var util = require('../../utils/util.js')

Page({
  data:{
    navbar: ['推荐', '排行榜', '搜索'],
    navIndex:0 //导航当前项
  },
  onLoad:function(){
    console.log(this)
    var that = this;
    util.getRecommend(function(data){
      that.setData({
        slider: data.data.slider, //轮播图
        radioList: data.data.radioList, //电台
        songList: data.data.songList //热门
      });
    }),

    util.getRanking(function (data) {
      console.log(that)
      that.setData({
        topList: data.data.data.topList
      })
    })
      
  },
  navbarTap:function(ev){ 
    //console.log(ev)
    var index = ev.currentTarget.dataset.id;
    //console.log(index)
    this.setData({
      navIndex: index  //获取导航ID
    })
  },

  //跳转到排行榜
  topList:function(e){
    var topListId=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'topList/topList?id=' + topListId,
    })
  }

  

})