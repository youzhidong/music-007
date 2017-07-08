var util = require('../../utils/util.js');
var app=getApp();
console.log(app)
Page({
  data:{},
  onLoad:function(opation){
    //var id = opation.id;
    var allData = app.globalData.playData;
    //var allData = app.globalData.playData[id].data;

    this.setData({
      playLink: 'http://ws.stream.qqmusic.qq.com/C100' + allData.songmid + '.m4a?fromtag=38',
      palyimgLink: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000' + allData.albummid + '.jpg'
    })


    wx.playBackgroundAudio({
      dataUrl: this.data.playLink
    })
    

  }
})