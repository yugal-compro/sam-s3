# AWS S3 BUCKET CRUD OPERATIONS

CRUD Operations on s3 Bucket through AWS API Gateway & Lambda thought SAM Script

## Steps Involved
- Create IAM User from AWS Console
- Download SAM and setup it with IAM User credentials in local environment.
- Create lambda functions for operations in AWS S3 Bucket.
- Deploying lambda functions through SAM Script.
- Creating Rest API & Serverless function resourses in SAM template.
- Specifing API Template in swagger.yaml file.
- Integrate lambda functions with API.
- Integrate swagger with API Resource.
- Deploying all resourses in Cloud formation stack 

##  About

### Lambda Functions
#### get-s3-object
This Lambda function retrives the object of the given key from the S3 bucket.
#### post-s3-object
This Lambda function creates the object with given key in S3 Bucket.
#### put-s3-object
This Lambda function updates the object of given key in S3 Bucket.
#### delete-s3-object
This Lambda function deletes the object of given key in S3 Bucket.