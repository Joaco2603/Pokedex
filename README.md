<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



#Ejecutar en desarrollo

1. Clonar el repositorio.
2. Ejecutar.
```
yarn install || yarn i
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.example.env__ y reno,brar la copa a __.env__


7. Ejecutar la aplicacion en dev:
```
yarn start:dev
```

7. Recontruir la base de datos con seed.
```
http://localhost:3000/api/seed
``` 

# Production Build

1. Crear el archivo ```.env.prod```.
2. Llenar las variables de entorno de producción.
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Stack usado
* MongoDB
* Nest