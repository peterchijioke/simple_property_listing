import { propertiesDAO } from '../dao/properties.dao';
import { Property } from '../types/property.type';

class PropertyService {

  async getAll(limit:number,offset:number): Promise<any> {
  const properties = await propertiesDAO.getPaginatedProperties(limit,offset);
  return properties;
  }
 async getProperty(id: number): Promise<Property | null> {
    const property = await propertiesDAO.getProperty(id)
    return property 
  }
}

export const propertyService = new PropertyService();
