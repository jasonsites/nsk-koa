# API Documentation

## Table of Contents
Entity [Create](./create.md) | [Detail](./detail.md) | [List](./list.md) | [Update](./update.md) | [Delete](./delete.md)

## Entity List

List entities.

### Endpoint
```http
GET /{namespace}/entities
```

### Query Parameters
| Parameter | Description | Usage
| ---: | --- | --- |
| **f.name**<br><small>String</small> | filter entities by name | ```f[name]=example```
| **p.limit**<br><small>Number</small> | page size<br>default: 20 | ```p[limit]=10```
| **p.offset**<br><small>Number</small> | page offset<br>default: 0 | ```p[offset]=10```
| **s.order**<br><small>String</small> | sort direction (asc, desc)<br>default: desc | ```s[order]=asc```
| **s.prop**<br><small>String</small> | sort by property | ```s[prop]=name```

---

### Request
```http
GET /{namespace}/entities?p[limit]=10&s[prop]=name HTTP/1.1
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
   "type": "entity",
   "id": "55d4cf2d-016f-43df-af3c-64d751cdb664",
   "properties": {
     "name": "example entity 1",
     "created_on": "2019-11-01T04:10:40.780Z",
     "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
     "modified_on": null,
     "modified_by": null,
   }
 }, {
   "type": "entity",
   "id": "381e1f7a-e475-41f7-a2ca-facb5c2d429f",
   "properties": {
     "name": "example entity 2",
     "created_on": "2019-11-01T04:31:40.288Z",
     "created_by": "cfd019ed-f5ae-45c8-90a8-46fa50a1edba",
     "modified_on": null,
     "modified_by": null,
   }
 }]
}
```
