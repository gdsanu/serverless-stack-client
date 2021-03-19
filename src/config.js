const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "myserverless-notes-app",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://exg8m6maa5.execute-api.ap-south-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_Gs6CRILRT",
    APP_CLIENT_ID: "3kc12aulr74nmrq24odpi18jlo",
    IDENTITY_POOL_ID: "ap-south-1:f0662422-1311-47e1-aba9-12493aa8978d",
  },
};

export default config;