var util = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    discovery: [],
    discovery_length: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  // 跳转到详情
  bindItemTap: function () {
    console.log('点击了item');
    wx.navigateTo({
      url: '../question/question',
    })
  },

  onLoad: function () {
    console.log('onLoad');

    // 取得本地数据
    var that = this;
    that.getDiscoveryData();
  },

  // 本地数据
  getDiscoveryData: function () {
    wx.showToast({
      title: '加载中。。。',
      icon: 'loading',
      duration: 2000
    });
    var discovery = util.getDiscoveryData();
    console.log('---discovery---' + discovery);
    var discovery_data = discovery.data;
    this.setData({
      discovery: discovery_data,
      discovery_length: discovery_data.length
    });
  }
});