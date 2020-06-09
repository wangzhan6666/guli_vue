import request from '@/utils/request'

export default {

  // 根据手机号发送验证码
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get'
    })
  },

  // 注册的方法
  registerMember(formItem) {
    return request({
        url: `/eduucenter/member/register`,
        method: 'post',
        data: formItem
      })
  }
}