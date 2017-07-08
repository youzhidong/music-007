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


//获取热门搜索
function getHotSearch(callback) {
  wx.request({
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {
        let data = res.data;
        data.data.hotkey = data.data.hotkey.slice(0, 8);
        callback(data);
      }
    }
  })
};
//获取搜索结果
function getSearchResult(val,page,callback) {
  wx.request({
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
    data:{
      g_tk: 1018254169,
      uin: 736955171,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w: val,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf - 8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: 20,
      p: page,
      remoteplace: 'txt.mqq.all',
      _: Date.now()
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}



module.exports = {
  getRecommend: getRecommend, //获取推荐频道数据
  getRanking: getRanking,//排行榜列表
  getTopListD: getTopListD,//排行榜详细列表
  getHotSearch: getHotSearch, //hot搜索
  getSearchResult: getSearchResult

}