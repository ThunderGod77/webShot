const result = require("dotenv").config();

const AWS = require("aws-sdk");

const spacesEndpoint = new AWS.Endpoint("fra1.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,

  accessKeyId: process.env.DIGITALOCEAN_ACCESS_KEY_ID,

  secretAccessKey: process.env.DIGITALOCEAN_SECRET_ACCESS_KEY,
});

// Configure client for use with Spaces

// Add a file to a Space
exports.upload = async(body) => {
  var params = {
    Body: body,
    Bucket: process.env.BUCKET,
    Key: "sitePhoto/exampllle.png",
    ACL: "public-read",
  };

  await s3.putObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
  });
};
