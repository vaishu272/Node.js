# Offset Pagination Server

This project contains a simple Express server for the Offset Pagination example.

## Setup

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Start the server:
   ```powershell
   npm start
   ```

The server listens on `http://localhost:5000`.

## Available Endpoint

- `GET /users`

Example request:

```http
GET http://localhost:5000/users
```

## Notes

- Make sure the server is running before sending requests.
- Use the full request line in `request.rest`.
- If `Send Request` fails, confirm `Server is running on port 5000` appears in the terminal.
