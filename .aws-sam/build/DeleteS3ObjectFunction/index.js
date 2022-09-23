
const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    // Get the object from the event and show its content type
  
    const params = {
        Bucket: event.bucketName,
        Key: event.key,
    };
    try {
        const { Body } = await s3.deleteObject(params).promise();
      const bodyContents = Body.toString();
        console.log('CONTENT TYPE:', bodyContents);
        return bodyContents;
    } catch (err) {
        console.log(err);
    }
};