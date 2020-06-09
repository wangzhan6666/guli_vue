import request from '@/utils/request'

export default {

  // 登录 
  submitLoginUser(userInfo) {
    return request({
      url: `/eduucenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },

  // 根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/eduucenter/member/getMemberInfo`,
      method: 'get'
    })
  }
}