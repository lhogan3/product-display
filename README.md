# Shoe Display Application

Simple full-stack application for creating and listing shoe products.

**Stack:** React/Vite (Frontend) | Spring Boot/Maven (Backend) | PostgreSQL (Docker)

## 1. Setup Instructions

### A. Database Setup (PostgreSQL)

You must start the Docker container for the database first.

1. **Start the Container:**
   ```bash
   docker run --name product-db -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=product_db -p 5432:5432 -d postgres
2. **Check Status**
   ```bash
   docker ps
   ```

### B. Frontend Deps
Install the necessary Node modules for the React UI:
```bash
cd project/product-display-ui
npm install
```

## 2. Run the App
1. Run the UI
```bash
cd project/product-display-ui
npm run dev
```

2. Access the UI via `http://localhost:3000`

3. Run the API
```bash
cd project/product-display-api
./mvnw spring-boot:run
```
(API runs on `http://localhost:8000`)
