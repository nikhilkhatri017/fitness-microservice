# Fitness Microservice

A fitness application built using microservices architecture.

## 📊 Architecture Diagram

![Fitness Microservice Diagram](docs/diagram.png)


## Services

- Eureka Server
- Config Server
- API Gateway
- User Service
- Activity Service
- AI Service
- React Frontend

## Tech Stack

- Java
- Spring Boot
- Spring Cloud
- Eureka
- React
- Vite
- Maven

## Database
- PostgreSQL (users table)
- MongoDB (activities DB, recommendations DB)

## API (Postman)
- user - (register, get, validate)
- activity - (register, getbyuser, getbyactivity)
- recommendation - (user recommendation, activity recommendation)
- API network - Gemini APi - gemini 2.5 flash

RabbitMQ 4.x - docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management

keycloak oauth2 - docker run -p 127.0.0.1:8181:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.6.1 start-dev

local acces links for tools used - 
- eureka - http://localhost:8761/
- RabbitMQ - http://localhost:15672/
- keycloak - http://localhost:8181/
- frontend - http://localhost:5173/

for more deatails and references watch https://youtu.be/_FdKTSFnWeg?si=PJTiwe-abW4V1tr5
