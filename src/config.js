const dev = {
    API_URL: "http://localhost:8000/api/",
  };
  
  const prod = {
    API_URL: "https://tobeprint3d.herokuapp.com/api/",
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