import express from 'express';
import {propertyController} from '../controllers/property.controller';


const router = express.Router();

router.get('/', propertyController.getPaginatedProperties);
router.get('/:id', propertyController.getProperty);


export default router;
