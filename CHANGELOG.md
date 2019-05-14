# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
