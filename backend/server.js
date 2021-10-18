const express = require("express")

var cors = require('cors')

 

const { SESSION_SECRET, REDIS_PORT,REDIS_URL } = require("./configDB/config")
const configDB = require("./configDB/configDB")
const app = express()
require('dotenv').config({ path: './configDB/.env' })
const session = require("express-session")
const redis = require("redis");
// const { REDIS_URL } = require("./configDB/config");
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
  host:REDIS_URL,
  port:REDIS_PORT
})
configDB()
const authRouter = require("./routes/authRoute")
app.use(cors())
app.enable("trust proxy")
app.use(
    session({
      store: new RedisStore({ client: redisClient }),
    //   saveUninitialized: false,
      secret: SESSION_SECRET,
    //   resave: false,
    cookie : {
        secure:false,
        resave:false,
        saveUninitialized: false,
        httpOnly:true,//js can acess it
        maxAge:60000

    }
    })
  )

app.use(express.json())
app.use("/auth",authRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => err ? console.error(err) : console.log("the server is running on port "+PORT))