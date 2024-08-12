@echo off

REM Suppression des pods
kubectl delete pods --all
echo Delete pods success...
pause
REM Suppression des deployments
kubectl delete deployments --all
echo Delete deployments success...
pause
REM Suppression des services
kubectl delete services gateway-clusterip inventory-clusterip mongo-clusterip order-clusterip payment-clusterip postgres-clusterip pricing-clusterip product-clusterip user-clusterip
echo Delete services success...
pause