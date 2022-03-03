const aws = require("aws-sdk");

const id = "";
const secret = "";
const bucket_name = "";
const s3 = new aws.S3({
  accessKeyId: id,
  secretAccessKey: secret,
});
const params = {
  Bucket: bucket_name,
  CreateBucketConfiguration: {
    LocationConstraint: "",
  },
};

s3.createBucket(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log("Bucket Created Successfully", data.Location);
});
