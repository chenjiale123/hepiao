const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tishi:'',
    array: null
  },
  show: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  sousuo: function () {
    var userId = wx.getStorageSync('user').id || 0

    api._post('/QianYi_Additional/scenicInspector/selectScenicOrderMessage?orderNo=' + this.data.value + '&userId=' + userId
    ).then(res => {
      console.log(res)
      this.setData({
        array: res.data
      })

    }).catch(e => {
      console.log(e)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 var tishi=options.tishi
 this.setData({
   tishi:tishi
 })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})