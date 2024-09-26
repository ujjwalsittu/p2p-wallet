# P2P Wallet System Project
##### Institution : GITA AUTONOMOUS COLLEGE
## People Involved in the Project
- **Ujjwal Kumar Sittu**
- **Deep**
- **Gautam**
- **Ishani**

------------
## Description

> The P2P Wallet System Project is a comprehensive solution designed to facilitate seamless financial transactions through a user-friendly wallet application. This application allows users to register, complete KYC processes, and manage their wallet balances effortlessly. Users can add funds to their wallets through a secure payment gateway, send money to other users, and view their transaction history. The project employs modern technologies and best practices to ensure a secure and efficient experience.

------------


### Key Features:
- **User Registration**: Sign up using phone numbers with optional email and password.
- **KYC Verification**: Users can complete their KYC process by uploading Aadhaar and PAN details.
- **Wallet Management**: Users can load money into their wallets and track their balance.
- **Secure Transactions**: Send money to other registered users with real-time transaction updates.
- **Transaction History**: Users can view a detailed history of their transactions.

------------


## Project Status
**Under Progress** - The project is currently being developed with ongoing enhancements and feature implementations.

------------


## Technologies Used
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **bcrypt**: Library to hash passwords for secure storage.
- **jsonwebtoken**: Library for creating JSON Web Tokens for user authentication.
- **Cashfree**: Payment gateway for processing transactions.

------------


## Folder Structure
    /wallet-system-project 
    ├── /src # Raw code in Typescript
    │ ├── /controllers	 # Contains logic for handling requests and responses
    │ ├── /models # Defines the database models and schema
    │ ├── /routes # API route definitions for different functionalities
    │ ├── /services # Business logic and service layer implementations
    │ ├── /middlewares # Middleware functions for request validation and processing
    │ ├── /utils # Utility functions and helpers ( to be added in future commits)
    │ └── /prisma # Prisma schema and client setup
    ├── package.json # Project metadata and dependency management
    └── README.md # Project documentation
    ├── /dist #After Build, converted code in Javascript

------------



## API Patterns
The API follows a RESTful architecture with the following patterns:
- **GET**: Retrieve data (e.g., user information, transaction history).
- **POST**: Create new resources (e.g., signup, login).
- **PUT/PATCH**: Update existing resources (e.g., update user details).
- **DELETE**: Remove resources (e.g., delete a user or transaction).

------------


### API Endpoints
|**Request Type**| **API Path**           |**Description**|
|--------------------|------------------------|------------------|
|**POST**			| **/signup**            |**Register a new user.**|
|**GET**			| **/transactions**      |**Fetch the transaction history for the logged-in user.**|
|**POST**			| **/transactions/send** |**Send money to another user.**|
|**POST**			| **/kyc**               |** Upload KYC documents**|
|**POST**			| **/signup**            |**Register a new user.**|
|**POST**			| **/setMPin**           |**Set MPin for Login**|
|**POST**			| **/verifyMPin**        |**Verify MPin**|


------------


## Schema
The database schema is defined using Prisma, which maps directly to the underlying database structure. Below is a simplified version of the primary models:


    model User {
        id        String  @id @default(cuid())
        email     String? @unique
        phone     String  @unique
        password  String? // Optional if email is not provided
        wallet    Wallet  @relation(fields: [id], references: [userId])
        transactions Transaction[]
    }
    
    model Wallet {
        id        String  @id @default(cuid())
        userId    String  @unique
        balance   Float   @default(0)
    }
    
    model Transaction {
        id          String   @id @default(cuid())
        senderId    String
        receiverId  String
        amount      Float
        timestamp   DateTime @default(now())
    }

------------
## Running the Project

To run the project, you have several options depending on whether you are in development or production mode. Below are the instructions for each mode.


#### Development Mode

To run the project in development mode, you can use the following command:

```bash
npm run dev

```

This command uses `ts-node-dev` to automatically restart the server on file changes, allowing for a smooth development experience.

#### Production Mode

For running the project in production mode, you first need to build the project and then start the server. Use the following commands:

1. **Build the Project:** This compiles the TypeScript files into JavaScript
```bash
npm run build
```

2. **Start the Server**: After building, you can start the server with the following command:
```bash
npm start
```

#### Database Migration & Seeding

Before starting the server, make sure to run the database migrations and seed the database. Use the following commands:

1. **Run Migrations:** Apply any pending database migrations.
```bash
npm run migrate
```

2. **Generate Prisma Client**: Regenerate the Prisma client based on the updated schema.
```bash
npm run generate
```

3. **Seed the Database**: Populate the database with initial data.
```bash
npm run seed
```

------------



## Third-Party Packages

The project uses several third-party packages. Below is a table summarizing their details, including their purpose and license information.

| Package                     | Description                                              | License    |
|----------------------------|----------------------------------------------------------|------------|
| `@prisma/client`           | The Prisma Client library for database interaction.     | MIT        |
| `bcrypt`                   | Library for hashing passwords securely.                 | MIT        |
| `body-parser`              | Middleware to parse incoming request bodies.            | MIT        |
| `dotenv`                   | Loads environment variables from a `.env` file.        | MIT        |
| `express`                  | Fast, unopinionated, minimalist web framework for Node.js. | MIT        |
| `jsonwebtoken`             | Implementation of JSON Web Token (JWT) for authentication. | MIT        |

### Development Dependencies

| Package                        | Description                                         | License    |
|--------------------------------|-----------------------------------------------------|------------|
| `@types/bcrypt`               | Type definitions for bcrypt.                       | MIT        |
| `@types/dotenv`               | Type definitions for dotenv.                       | MIT        |
| `@types/express`              | Type definitions for Express.js.                   | MIT        |
| `@types/jsonwebtoken`          | Type definitions for jsonwebtoken.                 | MIT        |
| `prisma`                      | The Prisma toolkit for database management.        | MIT        |
| `ts-node-dev`                 | Development utility for TypeScript and Node.js.   | MIT        |



## Contribution Guidelines
#### We welcome contributions to this project. To ensure a smooth collaboration, please adhere to the following guidelines:

- Prior Permission: Please obtain permission from the author (Ujjwal Kumar Sittu) before making contributions.

- Fork the Repository: Create a personal fork of the repository to work on.

- Feature Branches: Use descriptive names for branches related to specific features or fixes.
- Pull Requests: Submit a pull request with a clear description of your changes.

## Copyright Information
> This code is licensed for personal use only. It cannot be used commercially or redistributed without prior permission from the author of this repository. All rights reserved.

