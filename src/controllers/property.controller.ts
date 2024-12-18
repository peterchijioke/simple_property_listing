import { Request, Response, NextFunction } from 'express';
import { propertyService } from '../services/property.service';

class PropertyController {

  async getPaginatedProperties(req: Request, res: Response, next: NextFunction): Promise<void> {
    const limit = parseInt(req.query.limit as string, 10) || 10; 
    const page = parseInt(req.query.page as string, 10) || 1; 
    const offset = (page - 1) * limit; 

    try {
      const properties = await propertyService.getAll(limit, offset);
      const totalCount = properties.length;
      const totalPages = Math.ceil(totalCount / limit);

      res.status(200).json({
        message: 'Properties retrieved successfully',
        data: properties,
        meta: {
          currentPage: page,
          itemsPerPage: limit,
          totalItems: totalCount,
          totalPages: totalPages,
        },
      });
    } catch (error: any) {
      next(error);
    }
  }

  async getProperty(req: Request, res: Response, next: NextFunction): Promise<void> {
    const propertyId = parseInt(req.params.id, 10);

    try {
      const property = await propertyService.getProperty(propertyId);

      if (property) {
        res.status(200).json({
          message: 'Property retrieved successfully',
          data: property,
        });
      } else {
        res.status(404).json({
          message: 'Property not found',
        });
      }
    } catch (error: any) {
      next(error);
    }
  }
}

export const propertyController = new PropertyController();
