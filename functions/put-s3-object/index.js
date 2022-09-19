const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event, context) => {
   
   console.log(event);
  
    const params = {
        Bucket: event.bucketName,
        Key: event.key,
        Body: event.body
    };
    try {
        const { Body } = await s3.putObject(params).promise();
      const bodyContents = Body.toString();
        console.log('CONTENT TYPE:', bodyContents);
        return bodyContents;
    } catch (err) {
        console.log(err);
    }
};
