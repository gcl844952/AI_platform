// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',//手机号码
    password:''//密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //手机表单项数据
  handleInput(event){
    let type=event.currentTarget.id;
    this.setData({
      [type]:event.detail.value
    })
  },

  async login(){
    //前端验证
    let {phone,password}=this.data;
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
      })
      return;
    }
    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none',
      })
      return;
    }
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
      })
    }
    else{
      console.log("前端验证通过!")
    }

    //后端验证(还没写)
  },

  //跳转至注册页面
  toRegister(){
    wx.navigateTo({
      url: '../register/register',
    })
  },

  toRetrieve(){
    wx.navigateTo({
      url: '../retrieve/retrieve',
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