const uuid = require("uuid");
const crypto = require("crypto");


exports.GenToken = (req,res)=>{
    var token = req.query.token || uuid.v4();
    var expire = req.query.expire || parseInt(Date.now() / 1000) + 2400;
    var privateAPIKey = `${process.env.IMAGE_KIT_PRIVATE_KEY}`;
    var signature = crypto
      .createHmac("sha1", privateAPIKey)
      .update(token + expire)
      .digest("hex");
    res.status(200);
    res.send({
      token: token,
      expire: expire,
      signature: signature
    });
}