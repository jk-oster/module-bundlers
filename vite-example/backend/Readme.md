# Setting up docker container
## Create the `Dockerfile`
```docker
FROM node:16

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]

```
## Create the docker image
```bash
docker build -t jkoster/backend-example
```
## Start the docker container
Port forward the port ``8080`` where the express server is listening to the outside available port `9999`
```bash
docker run -p 9999:8080 2a5755f11ccb
```
