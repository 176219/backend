import express from 'express';
const router = express.Router();
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// Load the swagger.yaml file from the project root
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

swaggerDocument.servers = [
  {
    url: process.env.BASE_URL || 'http://localhost:4000',
    description: 'API server',
  },
];

// Mount Swagger UI on the root path of this router
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;