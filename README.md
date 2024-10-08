﻿# Expense_traker


This is a simple Express.js application that provides an API for managing expenses. It uses MongoDB as the database to store expense records.

## Features


- **POST** `/expenses`: Add a new expense.

## Prerequisites

- Node.js (v14 or later)
- MongoDB Atlas account (or a local MongoDB instance)

## Installation

1. **Clone the repository:**

    ```bash
    git clone 
    cd expense-tracker-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory of the project with the following content:

    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.txjovdj.mongodb.net/<database>
    PORT=5000
    ```

    Replace `<username>`, `<password>`, and `<database>` with your MongoDB Atlas credentials and database name. If you're using a local MongoDB instance, update the `MONGODB_URI` accordingly.




![Screenshot (156)](https://github.com/user-attachments/assets/e369cca7-02d1-4d37-8adb-be13d864f72d)

