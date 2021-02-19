// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    sex:['男','女'],//性别

    //个人信息部分
    name:'',//姓名
    selectSex:'男',//性别
    phone:'',//手机号码
    IDcard:'',//身份证
    email:'',//邮箱
    password:'',//密码

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 性别选择
  bindPickerChange: function(e) {
    let selectSexData = this.data.sex[e.detail.value];
    this.setData({
      index: e.detail.value,
      selectSex: selectSexData,
    })
  },

  //表单项数据
  handleInput(event){
    let type=event.currentTarget.id;
    this.setData({
      [type]:event.detail.value
    })
  },


  register(){
      //注册前端验证部分
    let {name,phone,IDcard,email,password} = this.data;
    //姓名
    if(!name){
      wx.showToast({
        title: '姓名不能为空',
        icon:'none',
      })
      return;
    }

    //电话号码
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
      })
      return;
    }
    let phoneReg=/^1[3456789]\d{9}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon:'none',
      })
      return;
    }

    //身份证号码
    if(!IDcard){
      wx.showToast({
        title: '身份证号码不能为空',
        icon:'none',
      })
      return;
    }
    let IDcardReg=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if(!IDcardReg.test(IDcard)){
      wx.showToast({
        title: '身份证号码格式错误',
        icon:'none',
      })
      return;
    }

    //邮箱
    if(!email){
      wx.showToast({
        title: '邮箱地址不能为空',
        icon:'none',
      })
      return;
    }
    let emailReg =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(!emailReg.test(email)){
      wx.showToast({
        title: '邮箱地址格式错误',
        icon:'none',
      })
      return;
    }

    //密码
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon:'none',
      })
      return;
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