# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Resource | [Detail](../resource/detail.md) : [List](../resource/list.md) : [Create](../resource/create.md) : [Update](../resource/update.md) : [Delete](../resource/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Resource Detail

Retrieve a single resource resource by id.

### Endpoint
```http
GET /{namespace}/resources/{id}
```

| Parameter | Description |
| ---: | --- |
| **id**<br><small>required</small> | resource id |

---

### Request
```http
GET /{namespace}/resources/55d4cf2d-016f-43df-af3c-64d751cdb664 HTTP/1.1
Host: api.domain.com
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
