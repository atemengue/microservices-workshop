# Microservice de Payement avec Spring Boot & PostgreSQL

## Description
Ce projet est une simple API fais avec java, pour implémenter une architecture microservice.
Il utilise PostgreSQL comme base de données.

## Prérequis

- Java 14 ou supérieur
- PostgreSQL 13 ou supérieur

## Installation

### 1. Cloner le dépôt 

```bash
git clone https://github.com/atemengue/microservices-workshop.git
cd votre-repo
```

### 2. Configuration de PostgreSQL

- Assurez vous que postgreSQL est installé et en cours d'execution 
- Assurez vous qu'un serveur (dont vous connaissez les configs) est en cours, si non créez en un
- Creez la base données avec un nom au choix (par exemple payment-db) et rajoutez le dans l'url de connexion dans le fichier
d'environnement

### 3. Configurer l'application

- Modifiez le fichier d'environnement et ajoutez le mot de passe et le nom d'utilisateur
de votre configuration postgresSQL.
- En local, décommenter dans le .env l'url de connexion correspondant pour docker et utiliser celle avec localhost

### . Construire et exécuter l'application 

```bash
./mvnw clean
./mvnw spring-boot:run
```
