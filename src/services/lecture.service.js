'use strict'

const lectureModel = require("../models/lecture.model")

class LectureService {

    static getListLecture = async (courseId) => {
        try {
            const lectures = await lectureModel.find({ courseId }).lean()
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

    static getCourse = async (courseId) => {
        const course = await lectureModel.findOne({ code: courseId }).exec()
        return {
            code: 0,
            message: 'data success',
            reponse: course,
        }
    }
}

module.exports = LectureService