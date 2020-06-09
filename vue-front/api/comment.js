import request from '@/utils/request'

export default {

  // 获取用户信息
  getUserInfo() {
    return request({
        url: `/eduservice/commentfront/getUserInfo`,
        method: 'get'
      })
  },

  // 添加评论
  addCommentInfo(comment) {
    return request({
      url: `/eduservice/commentfront/addComment`,
      method: 'post',
      data: comment
    })
  },

  // 分页方法
  getCommentInfo(page, limit, courseId) {
    return request({
        url: `/eduservice/commentfront/getCommentList/${page}/${limit}`,
        method: 'post',
        params: {courseId}
      })
  }
}