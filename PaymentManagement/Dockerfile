FROM maven:3.8.4-openjdk-17 AS builder
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-alpine
WORKDIR /app

COPY --from=builder /app/target/payment-service.jar .
COPY .env .


ENTRYPOINT ["java", "-jar", "payment-service.jar"]







