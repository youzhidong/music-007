//获取推荐频道数据
function getRecommend(callback) {
  wx.request({
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    data: {
      g_tk: 15079879,
      uin: 736955171,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: 1498611420403
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      //console.log(res)
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
};

//排行榜列表
function getRanking(callback){
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    data: {
      g_tk:5381,
      uin:0,
      format:'json',
      inCharset:'utf - 8',
      outCharset:'utf - 8',
      notice:0,
      platform:'h5',
      needNewCode:1,
      _:1498699313184
    },
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    success: function(res) {
      if (res.statusCode == 200)
      {
        callback(res)
      }
    },

  })
}

//排行榜详细列表
function getTopListD(id,callback){
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
    data:{
      g_tk: 1060308950,
      uin: 736955171,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: id,
      _: 1498788704369
    },
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data)
      }
      
    },
  })
};

module.exports = {
  getRecommend: getRecommend, //获取推荐频道数据
  getRanking: getRanking,//排行榜列表
  getTopListD: getTopListD//排行榜详细列表
}