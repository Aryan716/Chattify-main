import express from 'express';
import authRoutes from "./routes/auth.js"
import messageRoutes from './routes/message.js'
import {connectDB} from './lib/db.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import multer from 'multer'
import { server,app } from './lib/socket.js';

import path from "path";

dotenv.config();
const __dirname = path.resolve();

const PORT= process.env.PORT
app.use(cookieParser())
app.use(express.json({limit: '50mb'}));
app.use(cors({
    origin: ["http://localhost:5173", "https://chattify-orpin.vercel.app"],
    credentials: true,
}));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
if(process.env.NODE_ENV=="production")
{
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    });
    
}

server.listen(PORT,()=> {console.log(`Server started on ${PORT} `)
connectDB();
});