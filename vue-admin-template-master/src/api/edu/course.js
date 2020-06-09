import request from '@/utils/request'

export default {

    // 1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/addCourserInfo`,
            method: 'post',
            data: courseInfo
          })
    },
    // 2 查询所有讲师
    getListTeacher() {
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
          })
    },
    // 3 根据课程id查询课程基本信息
    getCourseInfoId(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
          })
    },
    // 4 修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/updateCourseInfo`,
            method: 'post',
            data: courseInfo
          })
    },
    // 5 课程缺信息显示
    getPublishCourse(id) {
        return request({
            url: `/eduservice/course/getPublishCourseInfo/${id}`,
            method: 'get'
          })
    },
    // 6 课程最终发布
    finalPublishCourse(id) {
        return request({
            url: `/eduservice/course/publishCourse/${id}`,
            method: 'get'
          })
    },
    // 7 查询所有课程
    getListCourse(current, limit, courseQuery) {
        return request({
            url: `/eduservice/course/pageCourse/${current}/${limit}`,
            method: 'post',
            data: courseQuery
          })
    },
    // 7 查询所有课程
    deleteCourse(courseId) {
        return request({
            url: `/eduservice/course/${courseId}`,
            method: 'delete'
          })
    }
}