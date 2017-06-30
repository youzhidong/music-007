var util = require('../../../utils/util.js')

Page({
  data:{

  },
  onLoad:function(opations){
    //console.log(opations.id);
    var that = this;
    var id = opations.id  //获取ID
    util.getTopListD(id,function(data){
      
      that.setData({
        topinfo: data.topinfo, //图片等等
        songlist: data.songlist, //列表
        update_time: data.update_time, //时间
        deBackgroundColor: that.dealColor(data.color) //背景颜色
        
      });
      //console.log(that)
    });

  },
  dealColor: function (rgb) {
    if (!rgb) { return; }
    let r = (rgb & 0x00ff0000) >> 16,
      g = (rgb & 0x0000ff00) >> 8,
      b = (rgb & 0x000000ff);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  },
  playsongTap:function(ev){
    var id = ev.currentTarget.dataset.xid;
    console.log(id)
    wx.navigateTo({
      url: '../../playsong/playsong?id=' + id,
    })
  }
})