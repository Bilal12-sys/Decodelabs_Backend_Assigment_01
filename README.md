# Backend_Assigment_01

A small REST API for creating, reading, updating, and deleting posts. The server is built with Express and stores posts in memory, so data resets when the process restarts.

## Requirements

- Node.js with npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. (Optional) Create a `.env` file in the project root and set the port:

   ```env
   PORT=2000
   ```

   If `PORT` is not set, the server uses port `2000`.

3. Start the server:

   ```bash
   npm start
   ```

   For development with automatic restarts:

   ```bash
   npm run dev
   ```

The home endpoint is available at `http://localhost:2000/` (replace `2000` if you configured another port).

## API

All post routes are prefixed with `/api/v1`. Post objects have this shape:

```json
{
  "id": 1,
  "title": "First Post",
  "description": "This is the first sample post."
}
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Health-style home response |
| `GET` | `/api/v1/posts` | Get all posts |
| `POST` | `/api/v1/posts` | Create a post |
| `GET` | `/api/v1/post/:id` | Get a post by ID |
| `PUT` | `/api/v1/post/:id` | Replace a post's title and description |
| `DELETE` | `/api/v1/post/:id` | Delete a post |

### Create or update a post

Both `POST /api/v1/posts` and `PUT /api/v1/post/:id` require a JSON body with non-empty `title` and `description` strings:

```json
{
  "title": "A post title",
  "description": "The post body."
}
```

The API trims leading and trailing whitespace from both fields. Invalid or missing fields return HTTP `400`. Requests should use the `Content-Type: application/json` header.

### Responses

Successful responses use a JSON envelope containing `status`, `success`, and `message`; endpoints that return a post or list include the result in `data`. For example:

```json
{
  "status": 201,
  "success": true,
  "message": "Post created successfully",
  "data": {
    "id": 2,
    "title": "A post title",
    "description": "The post body."
  }
}
```

Requests for a post ID that does not exist return HTTP `404` with `success: false`.

## Tests

Run the test suite with:

```bash
npm test
```

The tests exercise the post CRUD endpoints and validation.
