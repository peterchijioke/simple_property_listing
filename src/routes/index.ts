import express, { Request } from 'express';
import propertyRoute from './property.routes';

const router = express.Router();

const initHandler = async (req: Request, res: { json: (arg0: { message: string; }) => void; }) => {
  res.json({
    message: 'Init route working'
  });
};

router.get('/',initHandler)

router.use('/properties', propertyRoute);

export default router;
