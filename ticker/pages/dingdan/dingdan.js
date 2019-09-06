const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    show:false,
    val:'',
    id:'',
    Height:'',
    sceen:[],
    sceen1:[],
    leng:''

  },
  time:function(e){
    this.setData({
      show: false,
      val:e.currentTarget.dataset.id
    })
    api._post('/QianYi_Additional/scenicInspector/RefundScenicOrder?orderNo=' + this.data.id + '&status=1&reason=' + e.currentTarget.dataset.id
    ).then(res => {
      console.log(res)
      this.onLoad()
  wx.showToast({
    title: res.msg,
  })
    }).catch(e => {
      console.log(e)
    })
  },
  xiao:function(e){
    this.setData({
      show: false,
      val: e.currentTarget.dataset.id
    })
    api._post('/QianYi_Additional/scenicInspector/RefundScenicOrder?orderNo=' + this.data.id + '&status=1&reason=' + e.currentTarget.dataset.id
    ).then(res => {
      console.log(res)
      this.onLoad()
      wx.showToast({
        title: res.msg,
      })
    }).catch(e => {
      console.log(e)
    })
  },
  other:function(e){
    this.setData({
      show: false,
      val: e.currentTarget.dataset.id
    })
    api._post('/QianYi_Additional/scenicInspector/RefundScenicOrder?orderNo=' + this.data.id + '&status=1&reason=' + e.currentTarget.dataset.id
    ).then(res => {
      console.log(res)
      this.onLoad()
      wx.showToast({
        title: res.msg,
      })
    }).catch(e => {
      console.log(e)
    })
  },
  concert:function(e){
    api._post('/QianYi_Additional/scenicInspector/RefundScenicOrder?orderNo=' + e.currentTarget.dataset.id +'&status=0&reason='
    ).then(res => {
      console.log(res)
      this.onLoad()
      wx.showToast({
        title: res.msg
      })
    }).catch(e => {
      console.log(e)
    })
  },
  reject:function(e){
 this.setData({
   show:true,
   id: e.currentTarget.dataset.id
 })
   
  },
  ticker:function(e){

 wx.navigateTo({
   url: '/pages/sousuo/sousuo?ma=' + e.currentTarget.dataset.in,
   success: function(res) {},
   fail: function(res) {},
   complete: function(res) {},
 })
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    console.log(e.target)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      console.log('11')
      this.onLoad()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userId = wx.getStorageSync('user').id || 0
    var that=this
    api._post('/QianYi_Additional/scenicInspector/selectScenicTicket?userId='+userId+'&page=1&type=3'
    ).then(res => {
      console.log(res)
     this.setData({
       sceen: res.data.scenicOrders,
       leng: res.data.scenicOrders.length
     })
      console.log(that.data.leng)
    }).catch(e => {
      console.log(e)
    })

    api._post('/QianYi_Additional/scenicInspector/selectScenicTicket?userId=' + userId + '&page=1&type=4'
    ).then(res => {
      console.log(res)
      this.setData({
        sceen1: res.data.scenicOrders
      })
    }).catch(e => {
      console.log(e)
    })
    api._post('/QianYi_Additional/scenicInspector/selectScenicTicket?userId=' + userId + '&page=1&type=5'
    ).then(res => {
      console.log(res)
      this.setData({
        sceen2: res.data.scenicOrders
      })
    }).catch(e => {
      console.log(e)
    })

    // that.setData({
    //   Height: (that.data.sceen1.length + that.data.sceen.length)*404+'rpx'
    // })
   
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
this.onLoad()
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