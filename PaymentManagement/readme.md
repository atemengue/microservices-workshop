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

#### Variables d'environnement
Pour fonctionner, l'application utilise les variables d'environnement.
On y retrouve: 
- DATABASE_URL=jdbc:postgresql://db:5432/payment-db (la valeur de l'url de connexion à la bd)
- DATABASE_USERNAME=your_server_username (la valeur du nom de l'utilisateur d'un serveur postgres)
- DATABASE_PASSWORD=your_server_password (valeur du password de l'utilisateur d'un serveur postgres)
- DATABASE_NAME=payment-db (valeur du nom de la BD)
- PGADMIN_EMAIL=admin@admin.com (valeur de l'adresse mail de l'interface pgadmin)
- PGADMIN_PASSWORD=admin (valeur du password de l'interface pgadmin)

Notez bien que les valeurs présentées pour ces variables peuvent être changées, elles ne sont mis que pour les tests.
Lorsque vous les changez veuillez à utiliser celle que vous avez définies lors de vos travaux.
### 4. Construire et exécuter l'application 

```bash
./mvnw clean
./mvnw spring-boot:run
```
