# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Entity | [Detail](../entity/detail.md) : [List](../entity/list.md) : [Create](../entity/create.md) : [Update](../entity/update.md) : [Delete](../entity/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Entity Delete

Delete an entity by id.

### Endpoint
```http
DELETE /{namespace}/entities/{id}
```

| Parameter | Description |
| ---: | --- |
| **id**<br><small>required</small> | entity id |

---

### Request
```http
PATCH /{namespace}/entities/66788a46-0304-46b7-85ef-7253d817762a HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```

### Response
```http
HTTP/1.1 204 OK
```
