import * as dotenv from "dotenv";
dotenv.config();

export const mongoConfig = {
  serverUrl: `mongodb+srv://user1:${process.env.PASSWORD}@cluster0.kjsmrot.mongodb.net/?retryWrites=true&w=majority`,
  database: "Final_Project_MJ_DEV",
};
