# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Resource | [Detail](../resource/detail.md) : [List](../resource/list.md) : [Create](../resource/create.md) : [Update](../resource/update.md) : [Delete](../resource/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Resource Create
Create a new resource.

### Endpoint
```http
POST /{namespace}/resources
```

---

### Request
```http
POST /{namespace}/resources HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```
```json
{
  "data": {
    "type": "resource",
    "properties": {
      "name": "example name"
    }
  }
}
```

### Response
```http
HTTP/1.1 200 OK
```
```json
{
  "data": {
    "type": "resource",
    "id": "55d4cf2d-016f-43df-af3c-64d751cdb664",
    "properties": {
      "name": "example name",
      "created_on": "2019-11-01T04:10:40.780Z",
      "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
      "modified_on": null,
      "modified_by": null,
    }
  }
}
```
