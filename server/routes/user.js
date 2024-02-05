import express from 'express'

import {login} from '../controllers/auth.js'
import {updateChanelData} from '../controllers/chanel.js'


const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChanelData)


export default routes; 