import express from 'express';
import * as httpProxy from 'http-proxy-middleware';
import { Signale } from 'signale';

const app = express();
const signale = new Signale();

const clientsServiceProxy = httpProxy.createProxyMiddleware({
    target: 'http://localhost:3002', // Puerto del servicio de clientes
    changeOrigin: true,
    onError: (err, req, res) => {
        signale.error('Error de proxy:', err);
        res.status(500).send('Proxy error');
    },
});

const productsServiceProxy = httpProxy.createProxyMiddleware({
    target: 'http://localhost:3001', // Puerto del servicio de productos
    changeOrigin: true,
    onError: (err, req, res) => {
        signale.error('Error de proxy:', err);
        res.status(500).send('Proxy error');
    },
});

app.use(express.json());

app.use('/api/gateway/v1/clients', clientsServiceProxy);
app.use('/api/gateway/v1/products', productsServiceProxy);

async function startServer() {
    try {
        // Inicializa y conecta la base de datos aquí si es necesario

        // Inicia el servidor Express
        app.listen(3000, () => {
            signale.success('API Gateway online on port 3000');
        });
    } catch (error) {
        signale.error('Error al iniciar el servidor:', error);
    }
}

// Inicia todo
startServer();
