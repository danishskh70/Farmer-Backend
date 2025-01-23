# Farmer Backend

A backend system for managing farmer-related data and providing notifications to farmers based on weather conditions and soil moisture metrics.

---

## Features
- **Farmer Management**: Create, Read, Update, and Delete farmer data.
- **Secure Authentication**: Password hashing using `bcrypt` and JWT-based authentication.
- **Notifications**:
  - SMS alerts using **Fast2SMS**.
  - Email notifications using **Brevo** or a custom Node.js script.
- **Integration**:
  - Real-time weather data.
  - Soil moisture analytics.

---

## Tech Stack
| **Technology** | **Purpose**                  |
|-----------------|------------------------------|
| Node.js         | Backend runtime             |
| Express.js      | Web framework               |
| MongoDB         | Database                    |
| Mongoose        | MongoDB ODM                 |
| bcrypt          | Password hashing            |
| JSON Web Tokens | Authentication              |
| Fast2SMS        | SMS Notifications           |
| Brevo           | Email Notifications         |

---

## Installation and Setup
Follow these steps to set up the project on your local machine:

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Git**

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/danishskh70/Farmer-Backend.git
