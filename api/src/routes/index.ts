import adminRoute from './admin'

import { Router } from 'express'

const routes = Router()

routes.use('/admin', adminRoute)

export default routes