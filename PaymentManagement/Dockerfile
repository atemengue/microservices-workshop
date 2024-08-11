FROM openjdk:17-alpine
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src ./src
COPY .env /app

CMD ["./mvnw", "spring-boot:run"]



