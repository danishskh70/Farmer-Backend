# Farmer Backend

A robust backend system to manage farmer data and provide real-time notifications. This project integrates weather data, soil moisture metrics, and advanced notification systems to assist farmers.

---

## Features
- **Farmer Management**: CRUD operations for farmer records.
- **Authentication**: Secure password hashing with `bcrypt` and JWT-based token authentication.
- **Notification System**:
  - SMS alerts via **Fast2SMS**.
  - Email notifications via **Brevo** or custom Node.js scripts.
- **Weather and Soil Integration**: Triggers notifications based on real-time weather data and soil conditions.

---

## Tech Stack
| **Technology**   | **Purpose**                  |
|-------------------|------------------------------|
| Node.js           | Backend runtime             |
| Express.js        | Web framework               |
| MongoDB           | Database                    |
| Mongoose          | MongoDB ODM                 |
| bcrypt            | Password hashing            |
| JSON Web Tokens   | Authentication              |
| Fast2SMS          | SMS Notifications           |
| Brevo             | Email Notifications         |

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Git** (for version control)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/danishskh70/Farmer-Backend.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Farmer-Backend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     FAST2SMS_API_KEY=your_fast2sms_api_key
     ```

5. **Run the Server**:
   ```bash
   npm start
   ```
   - The backend will run on `http://localhost:5000` (default port).

### Running in Development Mode
To run the server in development mode with live reloading, use:
```bash
npm run dev
```

---

## API Endpoints

### Farmer Routes
| **Method** | **Endpoint**       | **Description**           |
|------------|--------------------|---------------------------|
| GET        | `/farmers`         | Get all farmers           |
| GET        | `/farmers/:id`     | Get farmer by ID          |
| POST       | `/farmers`         | Add a new farmer          |
| PUT        | `/farmers/:id`     | Update farmer details     |
| DELETE     | `/farmers/:id`     | Delete farmer by ID       |

### Auth Routes (Optional for Expansion)
| **Method** | **Endpoint**        | **Description**           |
|------------|---------------------|---------------------------|
| POST       | `/auth/register`    | Register a new user       |
| POST       | `/auth/login`       | Login and get JWT token   |

---

## Project Structure
```
Farmer-Backend/
|
├── models/
│   └── Farmer.js            # Farmer schema
|
├── routes/
│   └── farmerRoutes.js      # Farmer API routes
|
├── controllers/
│   └── farmerController.js  # Farmer logic
|
├── middleware/
│   └── authMiddleware.js    # Authentication middleware
|
├── config/
│   └── db.js                # MongoDB connection
|
├── utils/
│   └── notification.js      # SMS and email logic
|
├── .env                     # Environment variables
├── index.js                 # Entry point
└── package.json             # Dependencies and scripts
```

---

## Testing

1. **Test API Endpoints**:
   - Use Postman or any API testing tool.
   - Example for testing the `/farmers` endpoint:
     - Method: `POST`
     - URL: `http://localhost:5000/farmers`
     - Body:
       ```json
       {
         "name": "John Doe",
         "mobile": "1234567890",
         "email": "johndoe@example.com",
         "password": "securepassword",
         "address": "123 Farm Street",
         "coordinates": "12.9715987,77.5945627",
         "primaryCrop": "Wheat",
         "waterResource": "River",
         "landArea": 15
       }
       ```

2. **Trigger Notifications**:
   - Ensure valid API keys are set in the `.env` file.
   - Test SMS and email notifications using Postman or directly in the application.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature-name"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute this project as per the license terms.

---

## Contact
If you have any questions or suggestions, feel free to reach out:
- **Name**: Danish Shaikh
- **Email**: danishskh70@gmail.com
- **LinkedIn**: [Danish Shaikh](https://www.linkedin.com/in/danish-shaikh-262016265)
- **GitHub**: [@danishskh70](https://github.com/danishskh70)

