import express from 'express'
const app = express();
import userRoutes from './Routes/userRoutes.js'
import authRoutes from './Routes/authRouter.js'
import adminRoutes from './Routes/adminRouter.js'
import uploadRoutes from './Routes/uploadRouter.js'
import taskRoutes from './Routes/taskRouter.js'
import dotenv from 'dotenv'
import helmet from 'helmet';
dotenv.config();

import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { logger } from './MiddleWare/logger.js';
import { notfound } from './MiddleWare/notfound.js';
import { errorHandler } from './MiddleWare/errorHandler.js';
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './Utills/swagger.js';
import { limiter } from './MiddleWare/rate-limit.js';


app.use(express.json())
app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/upload', uploadRoutes)
app.use('/task', taskRoutes)

app.use(morgan('combined'))
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(logger)

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(limiter)
app.use(notfound)

app.use(errorHandler)

mongoose.connect(process.env.NODE_ENV === 'development' ?
    process.env.MONGO_URI_DEV : MONGODB_URL_PRO)
    .then(() => console.log("✅ MONGOSE IS CONNECTED SUCCESSFULLY"))
    .catch((error) => console.log("❌ ERROR OCCURED MONGOOSE IS NOT CONNECTED", error))



app.listen(3000, () => {
    console.log('✅server is running at http//:localhost:3000')
})