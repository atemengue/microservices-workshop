@echo off

REM List all pods
echo Pods list...
kubectl get pods
pause
REM List all deployments
echo Deployments list...
kubectl get deployments
pause
REM List all services
echo Services list...
kubectl get services
pause