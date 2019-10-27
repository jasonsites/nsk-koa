# nsk-koa
Node starter kit for Koa API applications

## Installing
Clone the repo and install dependencies
```shell
$ git clone git@github.com:jasonsites/nsk-koa.git
$ cd nsk-koa && npm i
```

## Development
**Prerequisites**

*[Docker Desktop](https://www.docker.com/products/docker-desktop)*

**Run the app in development mode**
```shell
$ docker-compose run --service-ports api
```

**Run full test suite with code coverage**
```shell
$ docker-compose run --service-ports coverage
```

## License
Copyright (c) 2019 Jason Sites

Licensed under the [MIT License](LICENSE.md)
