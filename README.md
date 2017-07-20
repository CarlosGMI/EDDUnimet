# **============EDDUnimet============**

Universidad Metropolitana.  
Proyecto de Sistemas de Información.

**=======================================**

Aplicación encargada de gestionar mudanzas en línea así como empleos para esta empresa.  
Realizada con NodeJS, HapiJS, MySQL, Sequelize, Materialize, renderizado .ejs y entorno de desarrollo Cloud9. 

**=======================================**  

**Desarrolladores:**    
Carrione, Willmer.  
Fontanella, Maurizio  
Maldonado, Carlos.

**=======================================**  
npm start para iniciar  
mysql-ctl cli para entrar al terminal de MySQL  
En caso de presentar error con la conexión a base de datos seguir los siguientes pasos a modificar en el config.json hasta que se solvente el error  
    -Modificar el host: Puede ser 0.0.0.0 o 127.0.0.1  
    -Colocar "port": "8080" o "port": "3000"  
    -Verificar el status de la base de datos para ver si cambia el id de conexión y así colocar el "connection id": "x" que corresponde    
    -Cambiar el username a "carlosgmi@localhost" y cuando pida el password volverlo a cambiar a "carlosgmi".  
                        TODO ESTO EN LA BASE DE DATOS DE "development"  
Para crear un model: node_modules/.bin/sequelize model:create --name Post --attributes title:string,body:string
