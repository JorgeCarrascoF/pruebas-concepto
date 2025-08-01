const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
    openapi: '3.0.0',
    info: {
        swagger: "2.0",
        title: 'API Equipo 2 Tarde',
        description: 'Documentación de login, registro y logout usando JWT + Cookies',
        version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        host: 'api.example.com'
      }
    ],
    basePath: '/v1',
    schemes: '- https'
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use('/api-equipo2tarde', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📘 Documentación Swagger disponible en: http://localhost:3000/api-equipo2tarde');
}

module.exports = swaggerDocs;