# api-mongo

Node Js v16.17.0
--

1. npm install
2. npm start

--
1. Descargamos la imagen
docker images
docker pull mongo
docker pull node:14

2. Creamos un container
a=>
docker run -d --network some-network --name some-mongo \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
	mongo

b=>
docker create -p27017:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=weizmanfabian -e MONGO_INITDB_ROOT_PASSWORD=password12345 mongo

3. lo arramcamos
docker start monguito

4. Create file Dockerfile

5. Creación de red interna
docker network ls
docker network create mired
docker network rm mired

6. Cambiar la ruta de conexión
cambiar localhost por monguito
 
7. Construimos la imagen de acuerdo al archivo Dockerfile (. es para indicar que se quede en la ruta actual)
docker build -t <nombre_imagen>:1 <ruta>
docker build -t miapp:1 .

8. verificamos la imagen creada
docker images

9. buscamos el contenedor creado monguito, lo paramos y lo borramos
docker ps -a
docker stop monguito
docker rm monguito

10. Creamos el container asignandole la red
docker create -p27017:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=weizmanfabian -e MONGO_INITDB_ROOT_PASSWORD=password12345 mongo

11. creamos el container de la app que acabamos de colocar dentro de una imagen
docker create -p5000:5000 --name chanchito --network mired miapp:1

12. arramcamos nuestros contenedores
docker start monguito
docker start chanchito

13. verificamos los logs
docker logs chanchito

