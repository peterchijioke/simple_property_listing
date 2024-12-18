import { Request, Response, NextFunction } from 'express';
import { propertyService } from '../services/property.service';

class PropertyController {
 
  async getPaginatedProperties(req: Request, res: Response, next: NextFunction): Promise<void> {
    const limit = parseInt(req.query.limit as string, 10) || 10; 
    const page = parseInt(req.query.page as string, 10) || 1; 
    const offset = (page - 1) * limit; 

    try {
      const properties = await propertyService.getAll(limit, offset);
      res.status(200).json({
        message: 'Properties retrieved successfully',
        data: properties,
        meta: {
          currentPage: page,
          itemsPerPage: limit,
          totalItems: properties.totalCount, 
          totalPages: Math.ceil(properties.length / limit),
        },
      });
    } catch (error: any) {
      next(error); 
    }
  }
}

export const propertyController = new PropertyController();
