'use strict'

const UserService = require("../services/user.service")


class UserController {

    getListUser = async ( req, res, next) => {
        try {
            return res.status(200).json(await UserService.getListUser())
        } catch (error) {
            next(error)
        }
    }

    createUser = async ( req, res, next) => {
        try {
            return res.status(200).json(await UserService.createCourse(req.body))
        } catch (error) {
            next(error)
        }
    }

    getUser = async ( req, res, next) => {
        try {
            const { userName } = req.params
            return res.status(200).json(await UserService.getCourse(userName))
        } catch (error) {
            
        }
    }
}

module.exports = new UserController()