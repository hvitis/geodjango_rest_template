const dev = {
    API_URL: "http://localhost:8000/api/",
    API_KEY_GMAPS : "AIzaSyA1umOS6BOBvTNLReOage940S6VDqLskkk"
  };
  
  const prod = {
    API_URL: "https://tobeprint3d.herokuapp.com/api/",
    API_KEY_GMAPS : "AIzaSyA1umOS6BOBvTNLReOage940S6VDqLskkk"

  };
  
  // Default to dev if not set
  const config = process.env.ENVIRONMENT === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    // MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };