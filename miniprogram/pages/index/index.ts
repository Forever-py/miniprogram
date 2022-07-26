// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
gameLists: [
 {   img: 'y1.png', title: '纸牌游戏'},
 {   img: 'y1.png', title: '飞机游戏'}
],
    navigatorArr: ['王者荣耀', '球球大作战', '部落冲突', '棋牌世界', '街头篮球', '火影忍者', '皇室战争', '梦幻西游', '穿越火线'],
    image1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109251P5501T6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660716821&t=9feb57e25aec372a620bfb6172c58a81',
    image2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F543b6a125fcec.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660716821&t=98ae1323ee05fff85e533de3f7e2c643',
    image3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F01%2F2109241250501256-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660716821&t=8c6187101279b19b03e478bf99f50757',
    image4: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F01%2F210924143A635C-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660716821&t=b902e3efb2debc3eb07cbc22ed8b9dd7',
    navMenu: [
      {url: '',img:'t1.png',title:'秒杀'},
      {url: '',img:'t2.png',title:'对战'},
      {url: '',img:'t3.png',title:'记事本'},
      {url: '',img:'t4.png',title:'购物'},
      {url: '',img:'t5.png',title:'邮箱'}
    ],
    navigatorScorll: [
      {url: '/pages/demo/demo',img:'u1.png',title:'应用'},
      {url: '',img:'u2.png',title:'设置'},
      {url: '',img:'u3.png',title:'计算'},
      {url: '',img:'u4.png',title:'菜单'},
      {url: '',img:'u5.png',title:'保护'},
      {url: '',img:'u6.png',title:'信息'},
      {url: '',img:'u7.png',title:'决策'}
    ]
  },
  /**
   * 跳链接
   */
  linkFun() {
    console.log('秒杀功能跳转')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})