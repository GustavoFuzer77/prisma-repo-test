import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
  })

app.listen(3001, () => {
  console.log("🔥🔥🔥");
});
