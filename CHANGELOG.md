# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.2.2](https://github.com/jasonsites/nsk-koa/compare/v1.2.1...v1.2.2) (2022-10-19)


### Bug Fixes

* **security:** updates dependencies ([4424578](https://github.com/jasonsites/nsk-koa/commit/4424578a5bef4945b03ed3ed2de441ea90128a9d))

### [1.2.1](https://github.com/jasonsites/nsk-koa/compare/v1.2.0...v1.2.1) (2022-02-14)


### Bug Fixes

* **http:** moves tracing headers registration to app config and removes auto-generation of `X-Request-ID` header ([f6b2146](https://github.com/jasonsites/nsk-koa/commit/f6b21466f9c698809deae7bd02d2d329f245b610))
* **security:** updates dependencies ([09b3ee7](https://github.com/jasonsites/nsk-koa/commit/09b3ee74ca0a2ffe3ab5cc00a7f9548692663960))

## [1.2.0](https://github.com/jasonsites/nsk-koa/compare/v1.1.1...v1.2.0) (2021-10-12)


### Features

* **http:** adds correlation middleware to propagate tracing headers ([bf37819](https://github.com/jasonsites/nsk-koa/commit/bf37819a66b34bdb945dac931dc401ff9ac5a536))


### Bug Fixes

* updates `eslint-plugin-import` for eslint@8 compatibility ([bc7c766](https://github.com/jasonsites/nsk-koa/commit/bc7c76686e3ae4723e2173944b3d7daec1d068e4))

### [1.1.1](https://github.com/jasonsites/nsk-koa/compare/v1.1.0...v1.1.1) (2021-10-11)


### Bug Fixes

* **security:** updates dependencies ([e4d1129](https://github.com/jasonsites/nsk-koa/commit/e4d1129af277e32965cbed294597d40d3b71cfe0))

## [1.1.0](https://github.com/jasonsites/nsk-koa/compare/v1.0.0...v1.1.0) (2021-05-04)


### Features

* adds `core.InternalServerError` class ([9b3eecf](https://github.com/jasonsites/nsk-koa/commit/9b3eecffffdb2d959fffa49d44509eaef4876b25))


### Bug Fixes

* moves json serializers from `domain` to `http` module ([8f3f6c2](https://github.com/jasonsites/nsk-koa/commit/8f3f6c2959f954c08ee8e5ed757800dfbbb36ed8))

## [1.0.0](https://github.com/jasonsites/nsk-koa/compare/v1.0.0-beta.1...v1.0.0) (2021-01-20)


### Bug Fixes

* **security:** updates configuration and dependencies ([a54db03](https://github.com/jasonsites/nsk-koa/commit/a54db03f165647f7ca801a08e742902be2049847))
* `create` method returns HTTP 201 (closes [#34](https://github.com/jasonsites/nsk-koa/issues/34)) ([443c333](https://github.com/jasonsites/nsk-koa/commit/443c33396eb067a68db232e77f78d16e075eabc3))

## [1.0.0-beta.1](https://github.com/jasonsites/nsk-koa/compare/v0.4.5...v1.0.0-beta.1) (2020-04-24)


### Features

* refactors repository pattern and app layering to reflect shift from `entity` to `resource` nomenclature ([7e70c44](https://github.com/jasonsites/nsk-koa/commit/7e70c4401d49c4454ff4028e0180a89c0056887a))


### Bug Fixes

* **security:** updates dependencies ([7a28d3c](https://github.com/jasonsites/nsk-koa/commit/7a28d3c2b805677d146bff79a258e5eab555549c))

### [0.4.5](https://github.com/jasonsites/nsk-koa/compare/v0.4.4...v0.4.5) (2020-03-24)


### Bug Fixes

* **config:** corrects custom configuration file name misspelling (closes [#36](https://github.com/jasonsites/nsk-koa/issues/36)) ([c3a93fe](https://github.com/jasonsites/nsk-koa/commit/c3a93fe583d07c7d19cd149de67aac7d02940eb4))
* **security:** updates `nyc` and removes `koa2-swagger-ui` ([0398ab0](https://github.com/jasonsites/nsk-koa/commit/0398ab061c1192311099be037ce82bfa297c1084))

### [0.4.4](https://github.com/jasonsites/nsk-koa/compare/v0.4.3...v0.4.4) (2019-11-18)


### Features

* adds service pattern with decoupled client for improved testability ([88f968a](https://github.com/jasonsites/nsk-koa/commit/88f968a84aed2e409682e44bfdfa9896c28538cb))


### Bug Fixes

* migrates `koa-router` to `@koa/router` ([978a788](https://github.com/jasonsites/nsk-koa/commit/978a788f4c6f8d0361e6e50c4ac9f88e0f83e3ba))
* **config:** updates docker configuration to split development and test modes ([b120c7f](https://github.com/jasonsites/nsk-koa/commit/b120c7f722cbadbec3b05d9441c9863d3894a144))

### [0.4.3](https://github.com/jasonsites/nsk-koa/compare/v0.4.2...v0.4.3) (2019-11-01)


### Features

* **core:** adds `InternalServer` error type ([f87ef18](https://github.com/jasonsites/nsk-koa/commit/f87ef18c5ea2bde35e40b29eee3e6c2c50c59478))
* **http:** adds `helmet` middleware collection for security-related response headers ([d000d31](https://github.com/jasonsites/nsk-koa/commit/d000d3138c41a276d1792867a669ec84ff7d9d44))


### Bug Fixes

* **config:** updates configuration for consistency ([19bd670](https://github.com/jasonsites/nsk-koa/commit/19bd670c88556fddfff01f707ca1cb12df38e55e))
* **http:** refactors controller utils ([3b0dd6f](https://github.com/jasonsites/nsk-koa/commit/3b0dd6fdddc98fd2a5ec1ca509f0627a6ba214c9))
* **http:** reorders middleware ([b158ee5](https://github.com/jasonsites/nsk-koa/commit/b158ee50e3e1f954c7893f67a10493f0303a30fc))

### [0.4.2](https://github.com/jasonsites/nsk-koa/compare/v0.4.1...v0.4.2) (2019-10-27)


### Bug Fixes

* **logger:** propagates correlation object throughout app layers so `req_id` can logged in every module ([c3fa8c9](https://github.com/jasonsites/nsk-koa/commit/c3fa8c946f75ba883ab93fab13cd75b23b38bfe8))

### [0.4.1](https://github.com/jasonsites/nsk-koa/compare/v0.4.0...v0.4.1) (2019-10-27)


### Features

* **config:** adds primary configuration and env var overrides ([f9be494](https://github.com/jasonsites/nsk-koa/commit/f9be494fa604fc0279c828070f0e9dfa65cd8081))
* adds http serializers ([d04e4ef](https://github.com/jasonsites/nsk-koa/commit/d04e4ef2e47b0278235e93fcf37e546929decee2))
* **core:** adds `core` module to host centralized domain and error types ([97b370b](https://github.com/jasonsites/nsk-koa/commit/97b370bebe46638b1658cb74fc247d99fdb26311))
* **http:** adds querystring handling ([49df540](https://github.com/jasonsites/nsk-koa/commit/49df5405bd02a81b1c7c7cccc1c01c5fb6ceef28))
* **repo:** adds generic db query and models framework ([3df68b7](https://github.com/jasonsites/nsk-koa/commit/3df68b7be73f88464319fed39886a508876d721b))


### Bug Fixes

* **config:** updates Dockerfile and configuration patterns ([7af6d7e](https://github.com/jasonsites/nsk-koa/commit/7af6d7e9e33a1f59f16b6a8fe787cdc18ca618c9))
* **http:** moves `serializers` and `validation` to http package and updates middleware handling ([93eb352](https://github.com/jasonsites/nsk-koa/commit/93eb352c2f667746308b1cbd87ab0de0d9abd05d))
* **security:** updates dependencies ([32ca7fd](https://github.com/jasonsites/nsk-koa/commit/32ca7fdeda0571e14f216088dc06fd0c630ddd9c))
* **validation:** adds schemas and updates validation to match joi@v16 api ([b4a275e](https://github.com/jasonsites/nsk-koa/commit/b4a275e7a8a00b298ce59284d0f1abade7872642))

## [0.4.0](https://github.com/jasonsites/nsk-koa/compare/v0.3.3...v0.4.0) (2019-07-19)


### Bug Fixes

* removes jsonapi module ([03bee22](https://github.com/jasonsites/nsk-koa/commit/03bee22))


### Features

* adds serializers module ([21398a0](https://github.com/jasonsites/nsk-koa/commit/21398a0))



### [0.3.3](https://github.com/jasonsites/nsk-koa/compare/v0.3.2...v0.3.3) (2019-07-16)


### Bug Fixes

* **config:** adds non-root user to test docker image ([8027d1e](https://github.com/jasonsites/nsk-koa/commit/8027d1e))
* **container:** updates `app-container` package to v1.1.2 ([decff78](https://github.com/jasonsites/nsk-koa/commit/decff78))
* **http:** wraps `error-handler` middleware to allow for dependency injection ([11c6dec](https://github.com/jasonsites/nsk-koa/commit/11c6dec))
* **security:** updates packages to remove security vulnerabilities ([1a7e47e](https://github.com/jasonsites/nsk-koa/commit/1a7e47e))
* **test:** updates test runner script to correctly use recursive glob pattern for finding test files ([04d2735](https://github.com/jasonsites/nsk-koa/commit/04d2735))
* **validation:** restructures validation module to allow for future extensibility ([d4bd201](https://github.com/jasonsites/nsk-koa/commit/d4bd201))


### Tests

* replaces `faker` with `chance` mock generator library ([521f836](https://github.com/jasonsites/nsk-koa/commit/521f836))



## [0.3.2](https://github.com/jasonsites/nsk-koa/compare/v0.3.1...v0.3.2) (2019-05-14)


### Bug Fixes

* **http:** correctly references context logger in `error-handler` middleware ([e5ee6e3](https://github.com/jasonsites/nsk-koa/commit/e5ee6e3))



## [0.3.1](https://github.com/jasonsites/nsk-koa/compare/v0.3.0...v0.3.1) (2019-05-02)


### Bug Fixes

* **security:** updates packages ([c96c9ce](https://github.com/jasonsites/nsk-koa/commit/c96c9ce))



# [0.3.0](https://github.com/jasonsites/nsk-koa/compare/v0.2.3...v0.3.0) (2019-04-04)


### Bug Fixes

* updates docker configuration ([51d16f2](https://github.com/jasonsites/nsk-koa/commit/51d16f2))
* **http:** reorders middleware to place bodyparser earlier in the chain (closes [#8](https://github.com/jasonsites/nsk-koa/issues/8)) ([d30f662](https://github.com/jasonsites/nsk-koa/commit/d30f662))


### Features

* **http:** adds response logging and improves correlation/time tracking ([aecb578](https://github.com/jasonsites/nsk-koa/commit/aecb578))
* adds file overview comments ([9e1d5de](https://github.com/jasonsites/nsk-koa/commit/9e1d5de))
* **repo:** adds repository level logging support ([eb73831](https://github.com/jasonsites/nsk-koa/commit/eb73831))



## [0.2.3](https://github.com/jasonsites/nsk-koa/compare/v0.2.2...v0.2.3) (2019-03-18)


### Bug Fixes

* **security:** updates insecure dependencies ([f90e374](https://github.com/jasonsites/nsk-koa/commit/f90e374))
* **security:** updates vulnerable packages ([3be5d02](https://github.com/jasonsites/nsk-koa/commit/3be5d02))
* updates non-breaking dependencies ([2dd2870](https://github.com/jasonsites/nsk-koa/commit/2dd2870))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/jasonsites/nsk-koa/compare/v0.2.1...v0.2.2) (2018-07-31)


### Bug Fixes

* nests modules in directories to help differentiate them from root source files ([b4ad24d](https://github.com/jasonsites/nsk-koa/commit/b4ad24d))
* renames `feature` to `domain` to more explicitly denote a single domain for the microservice ([e19b00c](https://github.com/jasonsites/nsk-koa/commit/e19b00c))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/jasonsites/nsk-koa/compare/v0.2.0...v0.2.1) (2018-03-28)


### Bug Fixes

* restructured tests ([683e7be](https://github.com/jasonsites/nsk-koa/commit/683e7be))
* reverts to app-container@v0.4.8 ([17b30c9](https://github.com/jasonsites/nsk-koa/commit/17b30c9))
* updates dependencies ([9b2a093](https://github.com/jasonsites/nsk-koa/commit/9b2a093))
* updates documentation and dependencies ([6908ac2](https://github.com/jasonsites/nsk-koa/commit/6908ac2))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/jasonsites/nsk-koa/compare/v0.1.1...v0.2.0) (2017-12-30)


### Bug Fixes

* revert to sinon for stubs ([18507f5](https://github.com/jasonsites/nsk-koa/commit/18507f5))
* updates mocha and eslint configuration ([4954f97](https://github.com/jasonsites/nsk-koa/commit/4954f97))
* **logger:** adds additional logging control to the app and request loggers ([4568769](https://github.com/jasonsites/nsk-koa/commit/4568769))


### Features

* adds example repository ([709e2d3](https://github.com/jasonsites/nsk-koa/commit/709e2d3))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/jasonsites/nsk-koa/compare/v0.1.0...v0.1.1) (2017-10-12)


### Bug Fixes

* **logging:** adds configurable request logging ([27821f5](https://github.com/jasonsites/nsk-koa/commit/27821f5))
* replaces sinon with testdouble and adds test bootstrap ([1670273](https://github.com/jasonsites/nsk-koa/commit/1670273))
* updates configurable request logging ([41db430](https://github.com/jasonsites/nsk-koa/commit/41db430))
* updates dependencies ([7a5b0dd](https://github.com/jasonsites/nsk-koa/commit/7a5b0dd))
* updates jsonapi serialization ([c7344f0](https://github.com/jasonsites/nsk-koa/commit/c7344f0))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/jasonsites/nsk-koa/compare/v0.0.5...v0.1.0) (2017-08-18)


### Features

* adds jsonapi module ([a443ef5](https://github.com/jasonsites/nsk-koa/commit/a443ef5))



<a name="0.0.5"></a>
## [0.0.5](https://github.com/jasonsites/nsk-koa/compare/v0.0.4...v0.0.5) (2017-08-06)



<a name="0.0.4"></a>
## [0.0.4](https://github.com/jasonsites/nsk-koa/compare/v0.0.3...v0.0.4) (2017-07-31)


### Bug Fixes

* **lint:** add .eslintrc.json rules for tests ([8e0cd4c](https://github.com/jasonsites/nsk-koa/commit/8e0cd4c))
* adds .nvmrc ([428824e](https://github.com/jasonsites/nsk-koa/commit/428824e))
* cleanup ([8fd8b18](https://github.com/jasonsites/nsk-koa/commit/8fd8b18))
* package cleanup ([ba12909](https://github.com/jasonsites/nsk-koa/commit/ba12909))
* removes .babelrc ([5925703](https://github.com/jasonsites/nsk-koa/commit/5925703))
* removes transpilation ([88649db](https://github.com/jasonsites/nsk-koa/commit/88649db))
* updates docker and test configuration ([833ce32](https://github.com/jasonsites/nsk-koa/commit/833ce32))



<a name="0.0.3"></a>
## [0.0.3](https://github.com/jasonsites/nsk-koa/compare/v0.0.2...v0.0.3) (2017-05-21)


### Bug Fixes

* adds basic feature test structure ([1908d10](https://github.com/jasonsites/nsk-koa/commit/1908d10))
* corrects .gitignore to include relevant config ([3a5bcaf](https://github.com/jasonsites/nsk-koa/commit/3a5bcaf))
* updates docker production and test configurations ([b629649](https://github.com/jasonsites/nsk-koa/commit/b629649))



<a name="0.0.2"></a>
## 0.0.2 (2017-05-15)


### Bug Fixes

* **router:** updated to koa-better-router ([41388c7](https://github.com/jasonsites/nsk-koa/commit/41388c7))
* adds .eslintignore ([b0970bd](https://github.com/jasonsites/nsk-koa/commit/b0970bd))
* adds DI and next iteration app structure ([79aecbb](https://github.com/jasonsites/nsk-koa/commit/79aecbb))
* app structure reorganization ([13ad353](https://github.com/jasonsites/nsk-koa/commit/13ad353))
* config updates ([48565df](https://github.com/jasonsites/nsk-koa/commit/48565df))
* refactored src code into discrete packages; isolates http ([800a58a](https://github.com/jasonsites/nsk-koa/commit/800a58a))
* removes deprecated dirs ([880af94](https://github.com/jasonsites/nsk-koa/commit/880af94))
* scopes feature and health routes ([48e171c](https://github.com/jasonsites/nsk-koa/commit/48e171c))
* updates package configurations ([0963951](https://github.com/jasonsites/nsk-koa/commit/0963951))
