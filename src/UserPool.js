import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-1_jtK9i7dIN",
    ClientId: "6btkna1mqhlnhttdnkm9ov41dj"
}

export default new CognitoUserPool(poolData);