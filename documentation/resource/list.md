# API Documentation

## Table of Contents
Route | Endpoints
| --- | --- |
Resource | [Detail](../resource/detail.md) : [List](../resource/list.md) : [Create](../resource/create.md) : [Update](../resource/update.md) : [Delete](../resource/delete.md)
| [Back to Index](../index.md) | [Back to Project](../../README.md)

## Resource List

List resources.

### Endpoint
```http
GET /{namespace}/resources
```

### Query Parameters
| Parameter | Description | Usage
| ---: | --- | --- |
| **f.name**<br><small>String</small> | filter resources by name | ```f[name]=example```
| **p.limit**<br><small>Number</small> | page size<br>default: 20 | ```p[limit]=10```
| **p.offset**<br><small>Number</small> | page offset<br>default: 0 | ```p[offset]=10```
| **s.order**<br><small>String</small> | sort direction (asc, desc)<br>default: desc | ```s[order]=asc```
| **s.prop**<br><small>String</small> | sort by property | ```s[prop]=name```

---

### Request
```http
GET /{namespace}/resources?p[limit]=10&s[prop]=name HTTP/1.1
Host: api.domain.com
Authorization: Bearer {token}
```

### Response
```http
HTTP/1.1 200 OK
```
```json
{
 "meta": {
   "paging": {
     "limit": 20,
     "offset": 0,
     "total": 2
   }
 },
 "data": [{
   "type": "resource",
   "id": "55d4cf2d-016f-43df-af3c-64d751cdb664",
   "properties": {
     "name": "example resource 1",
     "created_on": "2019-11-01T04:10:40.780Z",
     "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
     "modified_on": null,
     "modified_by": null,
   }
 }, {
   "type": "resource",
   "id": "381e1f7a-e475-41f7-a2ca-facb5c2d429f",
   "properties": {
     "name": "example resource 2",
     "created_on": "2019-11-01T04:31:40.288Z",
     "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
     "modified_on": null,
     "modified_by": null,
   }
 }]
}
```
