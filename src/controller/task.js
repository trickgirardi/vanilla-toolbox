import { Router } from 'express';

const router = Router();

router.Get('/', (req, res) => {
  res.send('OK');
});

export default Router();
