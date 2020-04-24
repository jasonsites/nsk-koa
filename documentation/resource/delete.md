# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Resource | [Detail](../resource/detail.md) : [List](../resource/list.md) : [Create](../resource/create.md) : [Update](../resource/update.md) : [Delete](../resource/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Resource Delete

Delete an resource by id.

### Endpoint
```http
DELETE /{namespace}/resources/{id}
```

| Parameter | Description |
| ---: | --- |
| **id**<br><small>required</small> | resource id |

---

### Request
```http
PATCH /{namespace}/resources/66788a46-0304-46b7-85ef-7253d817762a HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```

### Response
```http
HTTP/1.1 204 OK
```
