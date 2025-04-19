# Travel Memory - Locally 

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3001
```

Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```


For frontend, you need to create `.env` file and put the following content (remember to change it based on your requirements):
```bash
REACT_APP_BACKEND_URL=http://localhost:3001
```
# Travel Memory - backend and frontend run as separate container
`backend\.env` update it to work with backend image details
```
REACT_APP_BACKEND_URL=http://tmbackend:3001
```
- create a network and run backend application 
```bash 
# Create a network in docker
docker network create myapp-network
# Build the image
docker build -t tmbackend:v1.0 .

# Run the container
docker run -d --name tmbackend --network myapp-network -p 3002:3001 tmbackend:v1.0
```
- run similar way and build frontend / backend 
``` bash
# Build the image
docker build -t tmfrontend:v1.0 .

# Run the container
docker run -d --name tmfrontend --network myapp-network -p 3000:80  tmfrontend:v1.0

```
- Below commands can be used to investigate more on network 
```bash
# check running docker image 
docker ps 
# to stop the images 
docker stop {container_id}
# list all the networks 
docker network ls
# inspect the network 
# both tmbackend,tmfrontend in same network
docker network inspect myapp-network
#check docker logs 
docker logs {container_id}
````