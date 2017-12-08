//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function() {
    wx.showNavigationBarLoading();
    setTimeout(function(){
      wx.hideNavigationBarLoading();
    }, 2000)
  }
});