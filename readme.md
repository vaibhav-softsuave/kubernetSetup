# Requirements

- docker

- minikube

create your app

create image of the app in docker

```
docker build -t dockerUsername/appName path/to/src/code/root
```

push it to docker
```
docker push username/appName:latest
```
create kubernetes deployment config yml or json

create kubernetes service file

deploy kubernetes [minikube]

# TO DEPLOY IN KUBERNETES
```
minikube start // for windows
minikube start --driver=none  // for IOS
```
```
	cmd  kubectl apply -f deployment.yml
```
```
	cmd  kubectl get deployment
```
```
	cmd  kubectl get pods
```
#  TO DEPLOY SERVICE THIS WILL ALLOW TO ACCESS THE APP
```
	cmd  kubectl apply -f service.yml  
```
```
	cmd  kubectl get svc 
```
# WILL DISPLAY URL TO ACCESS THE SERVICE
```
	cmd  minikube service myServiceName  
```

I got the same issue resolved it by changing minikube base driver to hyperv from docker.

Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
Your pc will restart after that you can say

minikube config set driver hyperv
Then minikube start will start you with that driver.