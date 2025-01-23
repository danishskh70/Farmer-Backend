# Farmer-Backend
# Farmer Backend

A backend system for managing farmer-related data and providing notifications based on weather conditions, soil moisture data, and other critical metrics.

---

## Features
- **Farmer Management**: CRUD operations for farmer data, including name, address, coordinates, and crop details.
- **Authentication**: Secure password hashing and authentication using JWT tokens.
- **Notifications**: 
  - SMS alerts (via Fast2SMS) for harmful weather conditions.
  - Email notifications (via Brevo or custom Node.js email sender).
- **Weather Integration**: Notify farmers based on integrated weather data and soil moisture readings.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT, bcrypt
- **Notifications**: Fast2SMS, Brevo (Sendinblue)
- **Other Tools**: Postman for API testing

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danishskh70/Farmer-Backend.git
