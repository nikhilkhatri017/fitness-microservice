# Fitness Microservice

A fitness application built using microservices architecture.

## 📊 Architecture Diagram

![Fitness Microservice Diagram](docs/diagram.png)

## Project Summary & Accomplishments

### Project Overview
The **Fitness Microservice** is a modern, full-stack fitness application built using microservices architecture. It provides a complete backend implementation with a React frontend, enabling users to track fitness activities, receive AI-powered recommendations, and manage their fitness goals.

### Key Accomplishments
- ✅ Implemented complete microservices architecture with 6 independent services:
  - **Eureka Server**: Service registry for dynamic service discovery
  - **Config Server**: Centralized configuration management
  - **API Gateway**: Single entry point for all client requests
  - **User Service**: User registration, authentication, and profile management
  - **Activity Service**: Fitness activity logging and tracking
  - **AI Service**: Intelligent recommendations using Google Gemini API (2.5 Flash)
  
- ✅ Integrated advanced authentication using **Keycloak OAuth2**
- ✅ Implemented asynchronous communication with **RabbitMQ 4.x**
- ✅ Multi-database approach: PostgreSQL (user data) + MongoDB (activities & recommendations)
- ✅ RESTful APIs for user operations, activity management, and AI-powered recommendations
- ✅ Modern React + Vite frontend with Redux state management and Material UI

---

## Challenges Faced & Solutions

### Challenges & How They Were Solved

| Challenge | Solution |
|-----------|----------|
| **Service-to-Service Communication** | Implemented Eureka for automatic service discovery, eliminating the need for hardcoded service URLs |
| **Configuration Management Complexity** | Deployed centralized Config Server for managing environment-specific configurations across all microservices |
| **Authentication & Authorization** | Integrated Keycloak OAuth2 for secure, scalable, and centralized user authentication |
| **Asynchronous Processing** | Used RabbitMQ message broker for decoupled, event-driven communication between services |
| **Data Consistency** | Separated concerns using PostgreSQL for relational data (users) and MongoDB for flexible document storage (activities, recommendations) |
| **Scalability & Load Balancing** | Leveraged Spring Cloud & API Gateway to handle routing and load distribution efficiently |
| **Cross-Origin Requests** | Implemented CORS support in the API Gateway to enable React frontend communication |

---

## Future Changes & Plans

### Planned Enhancements

1. **Advanced Analytics & Reporting**
   - Dashboard with fitness progress visualization
   - Weekly/Monthly fitness reports and insights
   - Goal-setting and achievement tracking

2. **Enhanced AI Capabilities**
   - More sophisticated ML models for personalized workout recommendations
   - Integration with additional AI APIs (beyond Gemini)
   - Real-time activity analysis and instant feedback

3. **Performance & Scalability**
   - Implementation of caching layer (Redis) for frequently accessed data
   - Database optimization and indexing strategies
   - Containerization and Kubernetes orchestration for deployment

4. **Mobile Application**
   - Native mobile apps (iOS/Android) with push notifications
   - Real-time activity tracking using device sensors
   - Offline-first capabilities

5. **Social Features**
   - User communities and fitness challenges
   - Social sharing and leaderboards
   - Real-time collaboration features

6. **Security & Compliance**
   - Enhanced security protocols and encryption
   - GDPR compliance implementation
   - API rate limiting and throttling

7. **Testing & CI/CD**
   - Comprehensive unit and integration test coverage
   - Automated testing pipelines
   - Docker containerization for all services

---

## Tools & Technologies Used

### Backend Framework
- **Java** - Primary backend language
- **Spring Boot 4.0.5** - Rapid application development framework
- **Spring Cloud 2025.1.1** - Cloud-native microservices support

### Microservices Architecture
- **Eureka Server** - Service registry and discovery
- **Config Server** - Centralized configuration management
- **API Gateway** - Request routing and load balancing

### Message Broker & Async Communication
- **RabbitMQ 4.x** - Asynchronous message processing

### Authentication & Security
- **Keycloak OAuth2** - Centralized authentication and authorization

### Databases
- **PostgreSQL** - Relational database for user data
- **MongoDB** - NoSQL database for activities and recommendations

### External APIs
- **Google Gemini API 2.5 Flash** - AI-powered recommendations

### Build Tools
- **Maven** - Project build and dependency management

### Frontend Framework
- **React 19.2.5** - UI library for building user interfaces
- **Vite 8.0.10** - Next-generation frontend build tool

### Frontend Libraries & Tools
- **Material UI (MUI 9.0.0)** - Component library for UI design
- **Redux Toolkit 2.11.2** - State management library
- **React Redux 9.2.0** - React bindings for Redux
- **React Router DOM 7.14.2** - Client-side routing
- **Axios 1.15.2** - HTTP client for API calls
- **Emotion (React & Styled 11.14.0+)** - CSS-in-JS styling solution
- **React OAuth2 Code PKCE 1.24.0** - OAuth2 authentication flow

### Code Quality & Development Tools
- **Lombok** - Boilerplate code reduction for Java
- **ESLint 10.2.1** - JavaScript code linting
- **Java Version**: Java 26

### Local Development Access Links
- 🌐 **Frontend**: http://localhost:5173/
- 📡 **Eureka Server**: http://localhost:8761/
- 📨 **RabbitMQ Management**: http://localhost:15672/
- 🔐 **Keycloak**: http://localhost:8181/

---

## Project Statistics

- **Primary Language**: Java (44,158 lines)
- **Frontend**: JavaScript (12,774 lines), HTML (372 lines), CSS (5,060 lines)
- **Repository Size**: ~8.9 MB
- **Architecture Pattern**: Microservices with Event-Driven Communication
- **Repository Status**: Active Development

---

## API Endpoints Overview

### User Service
- **Register** - Create new user account
- **Get** - Retrieve user information
- **Validate** - Validate user credentials

### Activity Service
- **Register** - Log fitness activity
- **Get by User** - Retrieve user's activities
- **Get by Activity** - Query specific activity type

### AI Recommendation Service
- **User Recommendation** - Personalized fitness recommendations
- **Activity Recommendation** - AI-suggested activities based on history

---
# Backend Services
- **Config Server** - port 8888)
- **Eureka Server** - port 8761)
- **API Gateway** - port 8080)
- **User Service** - port 8081)
- **Activity Service** - port 8082)
- **AI Service** - port 8083)

## Getting Started

### Prerequisites
- Java 26
- Docker (for RabbitMQ & Keycloak)
- Node.js (for frontend development)
- Maven (for backend build)

### Running the Application

1. **Start Infrastructure Services**
   ```bash
   # RabbitMQ
   docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4-management
   
   # Keycloak
   docker run -p 127.0.0.1:8181:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.6.1 start-dev

### for more deatails and references watch https://youtu.be/_FdKTSFnWeg?si=PJTiwe-abW4V1tr5
