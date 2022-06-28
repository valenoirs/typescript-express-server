import express, { Express, Request, Response } from "express";

const app: Express = express()
const port: any = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        error: false,
        message: 'OK'
    })
})

app.listen(port, () => {
    console.log(`[server]: Server running at port ${port}`)
})