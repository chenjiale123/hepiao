const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '',
xiu:''
  },
  tuichu: function() {
    wx.clearStorageSync()
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  shuru:function(){
wx.navigateTo({
  url: '/pages/sousuo/sousuo',
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
  },
  getScancode: function() {
    var _this = this;
    wx.scanCode({

      success: (res) => {
        console.log(res)
        var userId = wx.getStorageSync('user').id || 0

        api._post('/QianYi_Additional/scenicInspector/selectScenicOrderMessage?orderNo='+ res.result +'&userId=' + userId).then(res => {
          console.log(res)
          if(res.isSuc==true){
            _this.setData({
              xiu: JSON.stringify(res.data)
            })
            console.log(this.data.xiu)
            api._post('/QianYi_Additional/scenicInspector/checkScenicTicket?orderNo= ' + res.data.orderno + '&userId=' + userId).then(res => {
              console.log(res)
              if (res.isSuc == false) {
            

                wx.navigateTo({
                  url: '/pages/success/success?tishi=' + res.msg+'&xinxi='+this.data.xiu,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }else{
                wx.navigateTo({
                  url: '/pages/fail/fail?tishi=' + res.msg + '&xinxi=' + this.data.xiu,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }

            }).catch(e => {
              console.log(e)
            })
          }else{
            wx.navigateTo({
              url: '/pages/success/success?tishi=' + res.msg,
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }
   
        }).catch(e => {
          console.log(e)
        })
        
      }
     



    })
    console.log(this.data.result)

  },
  dingdan: function() {
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var phone1 = wx.getStorageSync('user').telephone || 0
    this.setData({
      phone1:phone1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})