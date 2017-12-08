var util = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    feed: [],
    fed_length: 0
  },

// 点击行跳转
  bindItemTap: function() {
    console.log('点击了item');
    wx.navigateTo({
      url: '../question/question',
    })
  },

  onLoad: function() {
    console.log('onLoad');
    // 自动的load页面就下拉刷新，和用户下拉效果一样
    // wx.startPullDownRefresh();
    // 取得本地数据，注意指向的问题
    var that = this;
    that.getIndexData();
  },

// 本地数据
  getIndexData: function() {
    wx.showToast({
      title: '加载中。。。',
      icon: 'loading',
      duration: 2000
    });
    var feed = util.getDataIndex();
    console.log('---feed---'+feed);
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },

// 下拉刷新
  upper: function(e) {
    wx.showNavigationBarLoading();
    // wx.startPullDownRefresh();
    // this.refresh();
    console.log("upper--");
    setTimeout(function() {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

// 上拉加载
  lower: function(e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { 
      wx.hideNavigationBarLoading(); 
      // 更多数据
      this.nextLoad();
    that.nextLoad(); }, 1000);
    console.log("lower--")
  },

  // 刷新
  refresh: function() {
    // Toast显示
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });

    // 取得数据
    var feed = util.getIndexData();
    console.log('---feed---' + feed);
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });

    // Toast显示成功
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },

  // 实现上拉加载效果--拼接数据
  nextLoad: function() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    });
    var next = util.getDataNext();
    console.log('next--'+ next);
    var next_data = next.data;
    this.setData({
      // 数据拼接
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000);
  },

// 自动触发下拉刷新
  onPullDownRefresh: function () {
    console.log('---onPullDownRefresh---');
    // wx.stopPullDownRefresh()
    this.upper();
  }
});