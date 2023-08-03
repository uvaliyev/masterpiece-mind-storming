import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/app/home", (req, res) => {
    res.json({ message: "Hello, world!" });
});

app.post("/app/api", async (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured",
            },
        });
        return;
    }

    const question = req.body.question || "";
    if (question.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid question",
            },
        });
        return;
    }

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-16k",
            messages: [
                { role: "system", content: `You are helpful chatbot.` },
                { role: "user", content: question },
            ],
            temperature: 0.6,
            max_tokens: 4000,
        });
        res.status(200).json({
            result: completion.data.choices[0].message.content,
        });
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: "An error occurred during your request.",
                },
            });
        }
    }
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3001, () => {
    console.log("Server started");
});
