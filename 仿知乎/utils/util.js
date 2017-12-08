const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};

// 网络请求数据
function getData(url) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success");
        resolve(res);
      },
      fail: function(res) {
        reject(res);
        console.log("failed");
      }
    })
  })
}

var indexData = require('../data/data_index.js');
var discoveryData = require('../data/data_discovery.js');
var discoveryNextData = require('../data/data_discovery_next.js');

function getDataIndex() {
  return indexData.index;
}

function getDiscoveryData() {
  return discoveryData.discovery;
}

function getDataNext() {
  return discoveryNextData.next;
}

// 一定要记得导出，否则报错找不到
module.exports.getData = getData;
module.exports.getDataIndex = getDataIndex;
module.exports.getDataNext = getDataNext;
