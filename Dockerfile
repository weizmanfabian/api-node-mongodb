# indicar imagen base
FROM node:18

# crear una carpeta en la cual vamos a meter el código de nuestra app. Distribución linux del container
RUN mkdir -p /home/app

# indicar de donde va a sacar el código fuente que vaa meter dentro de este container
COPY . /home/app

#exponer un puerto para que otros contenedores se puedan conectar al contenedor
EXPOSE 5000

CMD ["node", "home/app/server.js"]