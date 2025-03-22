# API Endpoints Documentation

This document provides detailed information about all endpoints available in the Test Reports API.

## Authentication

All endpoints require authentication using a JWT token. The token must be provided in the `Authorization` header as a Bearer token.

```
Authorization: Bearer <your-jwt-token>
```

The JWT token is verified with Supabase and used to identify the current user. All operations are restricted to the authenticated user's data.

## Endpoints

### Reports

#### GET /reports

Retrieves all reports associated with the authenticated user.

**Parameters:**
- None required

**Returns:**
- Status: 200 OK
- Body: JSON object with an array of reports
```json
{
  "reports": [
    {
      "id": "uuid",
      "user_id": "uuid",
      "test_id": "uuid",
      "results": { ... },
      "completed_at": "datetime",
      "duration": integer
    },
    ...
  ]
}
```

#### GET /reports?report_id={report_id}

Retrieves a specific report by its ID for the authenticated user.

**Parameters:**
- `report_id` (query parameter): UUID of the report to retrieve

**Returns:**
- Status: 200 OK
- Body: JSON object with report details
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "test_id": "uuid",
  "results": { ... },
  "completed_at": "datetime",
  "duration": integer
}
```
- Status: 404 Not Found (if report doesn't exist or doesn't belong to the user)

#### POST /reports

Creates a new report for the authenticated user.

**Parameters:**
- Request body:
```json
{
  "test_id": "uuid",
  "results": { ... },
  "completed_at": "datetime", // optional
  "duration": integer // optional
}
```

**Returns:**
- Status: 201 Created
- Body: JSON object with the created report
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "test_id": "uuid",
  "results": { ... },
  "completed_at": "datetime",
  "duration": integer
}
```
- Status: 403 Forbidden (if test_id doesn't belong to the user)

#### DELETE /reports/{report_id}

Deletes a specific report by its ID if it belongs to the authenticated user.

**Parameters:**
- `report_id` (path parameter): UUID of the report to delete

**Returns:**
- Status: 204 No Content (on successful deletion)
- Status: 404 Not Found (if report doesn't exist or doesn't belong to the user)

### Tests

#### GET /tests

Retrieves all tests associated with the authenticated user.

**Parameters:**
- None required

**Returns:**
- Status: 200 OK
- Body: JSON object with an array of tests
```json
{
  "tests": [
    {
      "id": "uuid",
      "user_id": "uuid",
      "url": "string",
      "context": "string",
      "created_at": "datetime",
      "updated_at": "datetime",
      "alert_status": "string",
      "last_alert_sent": "datetime"
    },
    ...
  ]
}
```

#### GET /tests/{test_id}

Retrieves a specific test by its ID if it belongs to the authenticated user.

**Parameters:**
- `test_id` (path parameter): UUID of the test to retrieve

**Returns:**
- Status: 200 OK
- Body: JSON object with test details
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "url": "string",
  "context": "string",
  "created_at": "datetime",
  "updated_at": "datetime",
  "alert_status": "string",
  "last_alert_sent": "datetime"
}
```
- Status: 404 Not Found (if test doesn't exist or doesn't belong to the user)

#### POST /tests

Creates a new test for the authenticated user.

**Parameters:**
- Request body:
```json
{
  "url": "string",
  "context": "string"
}
```

**Returns:**
- Status: 201 Created
- Body: JSON object with the created test
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "url": "string",
  "context": "string",
  "created_at": "datetime",
  "updated_at": "datetime",
  "alert_status": "string",
  "last_alert_sent": "datetime"
}
```

#### PUT /tests/{test_id}

Updates an existing test if it belongs to the authenticated user.

**Parameters:**
- `test_id` (path parameter): UUID of the test to update
- Request body:
```json
{
  "url": "string", // optional
  "context": "string", // optional
  "alert_status": "string" // optional
}
```

**Returns:**
- Status: 200 OK
- Body: JSON object with the updated test
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "url": "string",
  "context": "string",
  "created_at": "datetime",
  "updated_at": "datetime",
  "alert_status": "string",
  "last_alert_sent": "datetime"
}
```
- Status: 404 Not Found (if test doesn't exist or doesn't belong to the user)

#### DELETE /tests/{test_id}

Deletes a test if it belongs to the authenticated user. Note: This will not delete associated reports to maintain historical data.

**Parameters:**
- `test_id` (path parameter): UUID of the test to delete

**Returns:**
- Status: 204 No Content (on successful deletion)
- Status: 404 Not Found (if test doesn't exist or doesn't belong to the user)

### System

#### GET /health

Health check endpoint to verify the API is running. Useful for monitoring and infrastructure checks.

**Parameters:**
- None

**Returns:**
- Status: 200 OK
- Body:
```json
{
  "status": "ok"
}
```

## Error Responses

The API returns appropriate HTTP status codes and error messages:

- 400 Bad Request: Invalid input data
- 401 Unauthorized: Authentication token is missing or invalid
- 403 Forbidden: User doesn't have permission to access the resource
- 404 Not Found: The requested resource doesn't exist
- 500 Internal Server Error: Something went wrong on the server