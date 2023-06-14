import express from 'express'
export const app = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())

// Route Imports
import user from './routes/userRoute.js'

app.use('/api', user)