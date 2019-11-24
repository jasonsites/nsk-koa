# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Entity | [Detail](../entity/detail.md) : [List](../entity/list.md) : [Create](../entity/create.md) : [Update](../entity/update.md) : [Delete](../entity/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Entity Update

Update an entity by id.

### Endpoint
```http
PUT /{namespace}/entities/{id}
```

| Parameter | Description |
| ---: | --- |
| **id**<br><small>required</small> | entity id |

---

### Request
```http
PUT /{namespace}/entities/b3494d6a-c4ef-4dff-ab89-0645c40f8c8c HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```
```json
{
  "data": {
    "type": "entity",
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
    "type": "entity",
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
