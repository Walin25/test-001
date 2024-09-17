import express from 'express';
import productRoutes from './src/Routes/Product';
import connectDB from './src/Config/dbConfig'
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api', productRoutes);

app.get('/fruits', (req, res) => {
  res.send('Get all fruits');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
