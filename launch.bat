@echo off
cd ./docker_config
docker compose --env-file .env up
cd ..