# Local machine
Open Docker Desktop to build the image

Build the new Docker image: (have Docker Desktop running)
sudo docker build --no-cache -t weekendtilmeldingimage:latest .

Save the docker file in the current directory
sudo docker save -o ./weekendtilmeldingimage.tar weekendtilmeldingimage:latest

Copy the image to the Pi
sudo scp ./weekendtilmeldingimage.tar luka2257@100.119.217.67:~/docker/weekendtilmelding 

Copy the environment file (just in case)
sudo scp ./.env luka2257@100.119.217.67:~/docker/weekendtilmelding 

Copy the docker-compose file
sudo scp ./docker-compose.yaml luka2257@100.119.217.67:~/docker/weekendtilmelding


# On Pi
Navigate to folder
cd docker/weekendtilmelding

Prune old images
sudo docker image prune -af

Load the docker image
sudo docker load -i weekendtilmeldingimage.tar

Use docker compose to deploy new version
sudo docker-compose down && sudo docker-compose up -d