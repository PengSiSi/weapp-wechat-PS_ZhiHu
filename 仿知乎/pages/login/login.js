//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    userName: '',
    password: ''
  },
  // 加载完成，处理事件
  onLoad: function () {
    // 获取本地数据
    var userName = wx.getStorageSync('userName');
    var password = wx.getStorageSync('password');
    console.log(userName);
    console.log(password);
    if (userName) {
      this.setData({ userName: userName })
    }
    if (password) {
      this.setData({ password: password })
    }
  },

  formsubmit: function (e) {
    console.log(e.detail.value);
    // 取得表单数据
    var objectData = e.detail.value;
    if (objectData.name && objectData.password) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objectData.name);
      wx.setStorageSync('password', objectData.password);
      // 跳转到成功的页面
      wx.switchTab({
        url: '../index/index',
      })
    }
  }
})
