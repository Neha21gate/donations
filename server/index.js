const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("sk_test_51IUMjrE9BSuOW8HAR0IGxdXcWH3Ehz2PsNnKFIT2ucGUbEMIiEcpIq22GXz64b4FrJlM15SJ8XWtQJ3Pk9F79pB000vih5lV6B")
const crypto = require ("crypto")
const cors = require("cors")
const uuid = require("uuid")



app.use(cors())


app.get("/", (req,res)=>{
	res.send("It is working at donateplus")
});

app.post ("/reset-password",(req,res)=>{
	crypto.randomBytest(32,(err,buffer)=>{
		if (err){
			console.log(err);

		}

		const token = buffer.toString("hex")

		user.findOne({email:req.body.email})
		.then(user=>{
			if(!user){
				return res.status(200).json({error:"user not found with this email"})
			}
			user.resetToken = token 
			user.expireToken = Date.now()+3600000                //token will be valid for an hour after one hour it will expire
		user.save()
.then((result)=>{
	transporter.sendMail({
		to:user.email.send,
		from:"no-reply@insta.com",
		subject:"password reset",
		html:`
		<p>You requested for password reset</p>
		<h5>click on this <a href="htttp:localhost:3000//${token}">link</a> to reset your password</h5>
		`
	})

	res.json({message:"check your email"})
})		})
	})

}
)


app.post("/payment", cors(), async (req, res) => { 
	const { donation, token} = req.body                         //destructring
	console.log("DONATION", donation);
	console.log("CHARGE", donation.charge);
	const idempotencyKey= uuid()

	return stripe.donor.create({
		email:token.email,
		source:token.id,
	}).then(donor => {

		stripe.charges.create({
			amount: donation.amount * 100,
			currency:'nzd',
			donor:donor.id,
			receipt_email: token.email,
			description:`donation.charity`
		}, {idempotencyKey})
	})

	.then(result => res.status(200).json(result))
	.catch(err => console.log (err))


})

app.listen(process.env.PORT || 3040, () => {
	console.log("Sever is listening on port 3040")
})