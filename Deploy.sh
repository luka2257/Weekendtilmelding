#!/bin/bash

echo "Deploying new version of the website"


echo "Build the new Docker image: (have Docker Desktop running)"
sudo docker build --no-cache -t weekendtilmeldingimage:latest .


echo "Save the docker file in the current directory"
sudo docker save -o ./weekendtilmeldingimage.tar weekendtilmeldingimage:latest


echo "Copy the image to the Pi"
sudo scp ./weekendtilmeldingimage.tar luka2257@100.119.217.67:~/docker/weekendtilmelding

# echo "the environment file (just in case)"
# sudo scp ./.env luka2257@100.119.217.67:~/docker/weekendtilmelding 

echo "Copy the docker-compose file"
sudo scp ./docker-compose.yaml luka2257@100.119.217.67:~/docker/weekendtilmelding 