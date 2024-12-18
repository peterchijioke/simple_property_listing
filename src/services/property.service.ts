import { propertiesDAO } from '../dao/properties.dao';

class PropertyService {

  async getAll(limit:number,offset:number): Promise<any> {
  const properties = await propertiesDAO.getPaginatedProperties(limit,offset);
  return properties;
  }
}

export const propertyService = new PropertyService();
