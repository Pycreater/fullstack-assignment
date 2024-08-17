
# Fullstack Assignment Guide

## 1. Clone the Repository

```bash
git clone https://github.com/Pycreater/fullstack-assignment.git
```

## 2. Backend Setup

Navigate to the backend directory and install the dependencies:

```bash
cd backend
yarn install
```

Create a `.env` file in the root folder and paste your MongoDB URI.

After setting up the environment variables, run the backend server:

```bash
npm run dev
```

## 3. Testing on Postman

### a. Create a New Collection

1. Add a POST request to create a new card:
    - URL: `http://localhost:8000/api/v1/cards`
    - Method: POST
    - Body (JSON):

    ```json
    {
        "title": "Security Overview",
        "description": "Review and update your security settings for better protection."
    }
    ```

    **Response:**

    ```json
    {
        "statusCode": 200,
        "data": {
            "title": "Security Overview",
            "description": "Review and update your security settings for better protection.",
            "_id": "66c091f19e2476d67958178e",
            "createdAt": "2024-08-17T12:05:05.120Z",
            "updatedAt": "2024-08-17T12:05:05.120Z",
            "__v": 0
        },
        "message": "Card created successfully",
        "success": true
    }
    ```

2. To get all cards, use:

    - URL: `http://localhost:8000/api/v1/cards`
    - Method: GET

    **Response:**

    ```json
    {
        "statusCode": 200,
        "data": [
            {
                "_id": "66c0568f562c7297889a30f1",
                "title": "Branches",
                "description": "Manage, version, and document your designs in one place.",
                "createdAt": "2024-08-17T07:51:43.362Z",
                "updatedAt": "2024-08-17T07:51:43.362Z",
                "__v": 0
            },
            {
                "_id": "66c056d4562c7297889a30f7",
                "title": "Manage Your Account",
                "description": "Update your personal information and account settings.",
                "createdAt": "2024-08-17T07:52:52.664Z",
                "updatedAt": "2024-08-17T07:52:52.664Z",
                "__v": 0
            },
            {
                "_id": "66c08e0e16a4bde4d7b1b6c9",
                "title": "Check Notifications",
                "description": "View recent notifications and alerts related to your account.",
                "createdAt": "2024-08-17T11:48:30.372Z",
                "updatedAt": "2024-08-17T11:48:30.372Z",
                "__v": 0
            }
        ],
        "message": "Cards fetched successfully.",
        "success": true
    }
    ```

3. To get a card by title, use:

    - URL: `http://localhost:8000/api/v1/cards/:title`
    - Example: `http://localhost:8000/api/v1/cards/Manage Your Account`

    **Response:**

    ```json
    {
        "statusCode": 200,
        "data": {
            "_id": "66c056d4562c7297889a30f7",
            "title": "Manage Your Account",
            "description": "Update your personal information and account settings.",
            "createdAt": "2024-08-17T07:52:52.664Z",
            "updatedAt": "2024-08-17T07:52:52.664Z",
            "__v": 0
        },
        "message": "Card fetched successfully",
        "success": true
    }
    ```

## 4. Frontend Setup

Open a new terminal, navigate to the frontend directory, install the dependencies, and run the frontend server:

```bash
cd frontend
npm install
npm run dev
```

Open the application in your browser at `http://localhost:5173/`.

---

## Screenshots
