var util = require('../../../utils/util.js')

Page({
  data:{

  },
  onLoad:function(opations){
    //console.log(opations.id);
    var that = this;
    var id = opations.id
    util.getTopListD(id,function(data){
      
      that.setData({
        topinfo: data.topinfo,
        songlist: data.songlist,
        update_time: data.update_time
      });
      console.log(that)
    });
    // util.getTopListD(function(id,data){
      
    // })
  }
})