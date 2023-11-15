import adminRoute from './admin'
import publicRoute from './public'

import { Router } from 'express'

const routes = Router()

routes.use('/', publicRoute)
routes.use('/admin', adminRoute)

export default routes