import request from '@/utils/request'

export default {

    // 1 根据课程id获取章节和小节数据列表
    getAllChapterVideo(courseId) {
        return request({
            url: `/eduservice/video/getChapterVideo/${courseId}`,
            method: 'get'
          })
    },
    // 2 添加小节
    addVideo(eduVideo) {
        return request({
            url: `/eduservice/video/addVideo`,
            method: 'post',
            data: eduVideo
          })
    },
    // 3 根据id查询小节
    getVideoById(videoId) {
        return request({
            url: `/eduservice/video/getVideoInfo/${videoId}`,
            method: 'get'
          })
    },
    // 4 修改小节
    updateChapter(video) {
        return request({
            url: `/eduservice/video/updateVideo`,
            method: 'post',
            data: video
          })
    },
    // 5 删除小节
    deleteVideo(id) {
        return request({
            url: `/eduservice/video/${id}`,
            method: 'delete'
          })
    },
    // 6 删除视频
    deleteAlyVideo(id) {
        return request({
            url: `/eduvod/video/removeAlyVideo/${id}`,
            method: 'delete'
          })
    },
}
