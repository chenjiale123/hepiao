const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    array:null,
    order:''
  },
  piao:function(){
    var that = this
    var userId = wx.getStorageSync('user').id || 0
    api._post('/QianYi_Additional/scenicInspector/selectScenicOrderMessage?orderNo=' + that.data.order + '&userId=' + userId
    ).then(res => {
      console.log(res)
      this.setData({
        array: res.data
      })

    }).catch(e => {
      console.log(e)
    })
  },
  jian:function(){
    var that = this
    var userId = wx.getStorageSync('user').id || 0

    api._post('/QianYi_Additional/scenicInspector/checkScenicTicket?orderNo=' + that.data.order + '&userId=' + userId
    ).then(res => {
      console.log(res)
      if(res.isSuc==true){
        wx.showModal({
          title: '验票提示',
          content: '验票成功请入园',
          success:function(res){
            if(res.confirm){
         
              console.log("111")
          that.piao()
           
            }else if(res.cancel){
           
            }
           
          }
        })     
      }else{
        wx.showToast({
          title: res.msg,
        })
      }
    

    }).catch(e => {
      console.log(e)
    })
  },
 show:function(e){
this.setData({
  value:e.detail.value
})
 },
 sousuo:function(){
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
   var ma=options.ma
   this.setData({
     order: ma
   })
    console.log(ma)
   if(ma){
     var userId = wx.getStorageSync('user').id || 0

     api._post('/QianYi_Additional/scenicInspector/selectScenicOrderMessage?orderNo=' + this.data.order + '&userId=' + userId
     ).then(res => {
       console.log(res)
       if(res.isSuc==true){
         this.setData({
           array: res.data
         })
         wx.showToast({
           title: '查询成功',
           icon: "none"
         })
       }else{
         wx.showToast({
           title: res.msg,
           icon:"none"
         })
       }
     

     }).catch(e => {
       console.log(e)
     })
   }


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