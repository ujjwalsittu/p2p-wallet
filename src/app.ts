import express from 'express';
import authRoutes from './routes/auth.routes';
import kycRoutes from './routes/kyc.routes';
import walletRoutes from './routes/wallet.routes';
import transactionRoutes from './routes/transaction.routes';
import mpinRoute from "./routes/mpin.route";

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/mpin', mpinRoute);

export default app;
