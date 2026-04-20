import express from 'express'
import { searchforProducts } from '../controllers/searchController.js'

const searchRoute = express.Router()

searchRoute.get('/', searchforProducts)

export default searchRoute;

