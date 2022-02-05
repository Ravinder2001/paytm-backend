const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const paymentRoute=require('./paymentRoute')


app.use(bodyParser.json())
app.use(cors())
app.use('/api',paymentRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`APP IS RUNNING AT ${PORT}`);
});