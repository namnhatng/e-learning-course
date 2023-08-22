'use strict'

const LectureService = require("../services/lecture.service")


class LectureController {

    getListLecture = async ( req, res, next) => {
        try {
            const { courseId } = req.params
            return res.status(200).json(await LectureService.getListLecture(courseId))
        } catch (error) {
            next(error)
        }
    }

    createLecture = async ( req, res, next) => {
        try {
            return res.status(200).json(await LectureService.createLecture(req.body))
        } catch (error) {
            next(error)
        }
    }

    getCourse = async ( req, res, next) => {
        try {
            const { courseId } = req.params
            return res.status(200).json(await LectureService.getCourse(courseId))
        } catch (error) {
            
        }
    }
}

module.exports = new LectureController()