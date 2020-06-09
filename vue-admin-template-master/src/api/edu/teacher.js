import request from '@/utils/request'

export default {

    // 1 讲师列表（条件查询分页）
    // current 当前页   limit 每页记录数   teacherQuery条件对象
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            // url: '/pageTeacherCondition/' + current + "/" + limit,
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            // teacherQuery条件的对象， 互殴段使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面
            data: teacherQuery
          })
    },
    // 2 删除讲师
    deleteTeacherId(id) {
        return request({
            // url: '/pageTeacherCondition/' + current + "/" + limit,
            url: `/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },

    // 3 添加讲师
    addTeacher(teacher) {
        return request({
            // url: '/pageTeacherCondition/' + current + "/" + limit,
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },

    // 4 根据id查询讲师
    getTeacherInfo(id) {
        return request({
            // url: '/pageTeacherCondition/' + current + "/" + limit,
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },

    // 5 修改讲师
    updateTeacher(teacher) {
        return request({
            // url: '/pageTeacherCondition/' + current + "/" + limit,
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}

