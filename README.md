## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Description
  - The authentication is yet to be implemented using JWT token auth. 
  - For detailed monitoring and logging we can use WInston for Nodejs which will let us define format of logs. We can directly store the logs in Logstash.
  - Testing has not been implemented
  - Load balancing and In-memory caching could be great approaches for production server to support millions of requests in the minimum time.
