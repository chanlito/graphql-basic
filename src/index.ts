import { app } from './server';

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on port 4000');
});
