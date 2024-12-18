import { propertyList } from "../db/properties";
import { Property } from "../types/property.type";

class PropertiesDAO {
  private propertyList: Property[] = propertyList;

  async getPaginatedProperties(limit: number, page: number): Promise<Property[]> {
    const startIndex = page;
    const endIndex = page + limit;

    return this.propertyList.slice(startIndex, endIndex);
  }

  async getAllProperties(): Promise<Property[]> {
    return this.propertyList;
  }
}


export const propertiesDAO = new PropertiesDAO();
