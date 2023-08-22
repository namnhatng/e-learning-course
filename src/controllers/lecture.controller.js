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
            const uploadFile = req.files.file
            console.log('test1');
            await uploadFile.mv(`public/${req.body.code}.pdf`)
            console.log('test2');
            return res.json(req.body)
            // return res.status(200).json(await LectureService.createLecture({
            //     ...req.body,
            //     link: `/public/${req.body.code}.pdf`,
            // }))
        } catch (error) {
            next(error)
        }
    }

    getLecture = async ( req, res, next) => {
        try {
            const { lectureId } = req.params
            return res.status(200).json(await LectureService.getLecture(lectureId))
        } catch (error) {
            
        }
    }
}

module.exports = new LectureController()