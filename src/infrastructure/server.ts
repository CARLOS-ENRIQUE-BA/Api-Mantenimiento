import dotenv from 'dotenv';
dotenv.config();

import app from '../interfaces/http/expressApp';

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
    console.log(`Server online on port ${PORT}`);
    console.log(`Using ${process.env.USE_MONGODB === 'true' ? 'MongoDB' : 'MySQL'} database`);
});
