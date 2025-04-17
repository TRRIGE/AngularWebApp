import "dotenv/config";
import express from 'express';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE"
}))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;