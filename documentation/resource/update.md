# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Resource | [Detail](../resource/detail.md) : [List](../resource/list.md) : [Create](../resource/create.md) : [Update](../resource/update.md) : [Delete](../resource/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Resource Update

Update an resource by id.

### Endpoint
```http
PUT /{namespace}/resources/{id}
```

| Parameter | Description |
| ---: | --- |
| **id**<br><small>required</small> | resource id |

---

### Request
```http
PUT /{namespace}/resources/b3494d6a-c4ef-4dff-ab89-0645c40f8c8c HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```
```json
{
  "data": {
    "type": "resource",
    "id": "b3494d6a-c4ef-4dff-ab89-0645c40f8c8c",
    "properties": {
      "name": "updated example name"
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
    "id": "b3494d6a-c4ef-4dff-ab89-0645c40f8c8c",
    "properties": {
      "name": "updated example name",
      "created_on": "2019-11-01T04:10:40.780Z",
      "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
      "modified_on": "2019-11-01T04:55:26.653Z",
      "modified_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba"
    }
  }
}
```
