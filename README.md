# PRODUCT MANAGEMENT SERVICE

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |
|DATABASE_NAME           | DATABASE   NAME           | "products"      |
|DATABASE_DATABASE           | DATABASE   PORT           | 27017      |
|SERVER_URL           | SERVER   PORT           | "mongodb://localhost"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20.11.0


# Getting started
- Clone the repository
```
git clone  https://github.com/atemengue/microservices-workshop/
```
- Install dependencies
```
cd microservices-workshop/
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`

- API Document endpoints

  swagger Spec Endpoint : http://localhost:3000/api-docs 

  swagger-ui  Endpoint : http://localhost:3000/docs 

# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


