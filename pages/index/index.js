var util = require('../../utils/util.js')
var app=getApp();


Page({
  data:{
    navbar: ['推荐', '排行榜', '搜索'],
    navIndex:0, //导航当前项
    searchLoading:false,  //显示搜索数据
    zagd:1,  //加载更多
    dataOff:false
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

    //排行榜单
    util.getRanking(function (data) {
      console.log(that)
      that.setData({
        topList: data.data.data.topList
      })
    });


    //搜索频道
    util.getHotSearch(function (data) {
      console.log(data)
      that.setData({
        hotkey: data.data.hotkey,
        special: data.data.special_key
      })
    });
      
  },
  navbarTap:function(ev){ 
    //console.log(ev)
    var index = ev.currentTarget.dataset.id;
    this.setData({
      navIndex: index  //获取导航ID
    })
  },

  //跳转到排行榜
  topList:function(e){
    var topListId = e.currentTarget.dataset.id;

    app.globalData.topListId = topListId;
    

    
    wx.navigateTo({
      url: 'topList/topList?id=' + topListId,
    })
  },
  bindKeywordInput:function(ev){ //获取input  val
    this.setData({
      val: ev.detail.value
    })
  },
  searchResult:function(){  //返回搜索结果
    var val=this.data.val;
    var zagd = this.data.zagd;
    if (!val) return;
    var that=this;
    util.getSearchResult(val, zagd, function (data) {
      
      
        
      var searchList = data.data.song.list;
        if (that.data.dataOff){
          searchList = that.data.searchResult.concat(data.data.song.list)

        }
          that.setData({
            //searchResult: data.data.song.list,
            searchResult: searchList,
            searchLoading: true
          });

        
    })

  },
  playmusic:function(ev){

    var id = ev.currentTarget.dataset.serchid
    console.log(app)
    console.log(this.data.searchResult[id])
    app.globalData.playData = this.data.searchResult[id];

    wx.navigateTo({
      url: '../playsong/playsong?id',
    })
  },
  scrollBottom:function(ev){
    //滚到底部加载数据
    this.setData({
      zagd: this.data.zagd+1,
      dataOff: true
    })

    console.log(this.data.zagd)
    
    this.searchResult();
    console.log(this)
  }
  

// 1.获取 播放 列表 id
// 2.替换 app . playData 数据
// 3.跳转到 playsong


})