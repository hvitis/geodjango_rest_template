const dev = {
    API_URL: "http://tobeprinted.es/api",
    API_KEY_GMAPS : "AIzaSyA1umOS6BOBvTNLReOage940S6VDqLskkk"
  };
  
  const prod = {
    API_URL: "ttp://tobeprinted.es/api",
    API_KEY_GMAPS : "AIzaSyA1umOS6BOBvTNLReOage940S6VDqLskkk"

  };

  // const config = prod;
  // Default to dev if not set
  const config = process.env.ENVIRONMENT === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    // MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };