import express from 'express';
const router = express.Router();
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// Load the swagger.yaml file from the project root
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Node.js Sign-up and Verification API',
    description: 'Node.js + MySQL - API with email sign-up, verification, authentication and forgot password',
    version: '1.0.0',
  },
  servers: [
    {
      url: process.env.BASE_URL || 'http://localhost:4000',
      description: 'API server',
    },
  ],
  
};
// Mount Swagger UI on the root path of this router
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;