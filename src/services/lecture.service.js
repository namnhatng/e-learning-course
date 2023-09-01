'use strict'

const lectureModel = require("../models/lecture.model")

class LectureService {

    static getListLecture = async (courseCode) => {
        try {
            const lectures = await lectureModel.find({ courseId: courseCode }).lean()
            return {
                code: 0,
                message: 'data success',
                response: lectures,
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    static createLecture = async (lecture) => {
        const createdLecture = await lectureModel.create(lecture)
        return {
            code: 0,
            message: 'data success',
            reponse: createdLecture,
        }
    }

    static getLecture = async (lectureCode) => {
        const lecture = await lectureModel.findOne({ code: lectureCode }).exec()
        return {
            code: 0,
            message: 'data success',
            reponse: lecture,
        }
    }
}

module.exports = LectureService