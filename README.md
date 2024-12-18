






# Properties Management API

A simple API for managing property listings, built with Node.js and TypeScript. This project demonstrates a paginated data retrieval system and includes a mock database of properties.

---

## Features

- **Get All Properties**: Retrieve all properties from the mock database.
- **Paginated Properties**: Fetch a paginated list of properties with customizable limits and offsets.
- **TypeScript Support**: Strongly typed code using TypeScript for maintainability and scalability.
- **Error Handling**: Basic error management for API requests.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) (v8 or later)

### Steps

1. Clone the repository:
   ```bash
    git clone https://github.com/peterchijioke/simple_property_listing.git
   cd simple_property_listin
   ```

2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm start
   ```

---

## API Endpoints

### **Base URL**: `/api/v1`

| Endpoint                | HTTP Method | Query Params                   | Description                       |
|-------------------------|-------------|--------------------------------|-----------------------------------|
| `/properties`           | `GET`       | `limit`, `page` (optional)   | Fetch paginated properties.       |
| `/properties/all`       | `GET`       | None                           | Fetch all properties.             |

### Example Request for Pagination
```
GET /api/v1/properties?limit=2&offset=1
```

### Example Response
```json
{
  "data": [
    {
      "id": 2,
      "name": "Modern House",
      "address": "456 Oak St, Vancouver",
      "price": "$1,200,000",
      "propertyType": "House",
      "imageUrl": "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg"
    },
    {
      "id": 3,
      "name": "Beachfront Villa",
      "address": "789 Palm Blvd, Miami",
      "price": "$3,500,000",
      "propertyType": "Villa",
      "imageUrl": "https://www.houseplans.net/news/wp-content/uploads/2023/07/57260-768.jpeg"
    }
  ],
  "totalCount": 5
}
```

---

## Project Structure

```plaintext
src/
├── controllers/
│   └── property.controller.ts   # Handles API requests
├── db/
│   └── properties.ts            # Mock database of properties
├── services/
│   └── property.service.ts      # Business logic and pagination
├── types/
│   └── property.type.ts         # TypeScript types for properties
├── dao/
│   └── properties.dao.ts        # Data Access Object for properties
├── app.ts                       # Main application entry point
```

---

## Development

### Running the Server
```bash
pnpm dev
```

### Linting and Formatting
To maintain code quality, run:
```bash
pnpm lint
pnpm format
```

---

## Technologies Used

- **Node.js**: JavaScript runtime
- **TypeScript**: Strongly typed superset of JavaScript
- **Express**: Web framework for building APIs
- **pnpm**: Fast, disk space-efficient package manager

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push the branch: `git push origin my-feature`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any inquiries or feedback, feel free to contact:

**Your Name**: [Your Email Address]  
GitHub: [Your GitHub Profile URL]  
