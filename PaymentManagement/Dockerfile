FROM openjdk:17-alpine
WORKDIR /app
COPY .mvn/ .mvn
COPY ./mvnw pom.xml ./
COPY .env ./
COPY src ./src

RUN sed -i 's/\r$//' mvnw
RUN ./mvnw dependency:go-offline

CMD ["./mvnw", "spring-boot:run"]



