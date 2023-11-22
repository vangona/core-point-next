import ElasticEmail from '@elasticemail/elasticemail-client';

const defaultClient = ElasticEmail.ApiClient.instance;
// Configure API key authorization: apikey
const apikey = defaultClient.authentications['apikey'];
apikey.apiKey = process.env.NEXT_PUBLIC_ELASTIC_EMAIL_API;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix['X-ElasticEmail-ApiKey'] = "Token"

export const elasticEmailApi = new ElasticEmail.EmailsApi();
