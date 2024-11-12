import dotenv from 'dotenv';
dotenv.config();

const validApiKeys = process.env.API_KEYS?.split(',') || [];  //optional chaining to prevent from errors and convert string
                                                              //values to array using split
const validSecrets = process.env.API_SECRETS?.split(',') || [];


export const validateApiKey = (req, res, next) => {
  const apiKey = req.header('X-API-Key');
  const secretKey = req.header('X-Secret-Key');
  
  if (!apiKey || !secretKey) {
    return res.status(401).json({ 
      error: 'Both API key and Secret key are required' 
    });
  }

  const keyIndex = validApiKeys.indexOf(apiKey);
  if (keyIndex === -1) {
    return res.status(403).json({ 
      error: 'Invalid API key' 
    });
  }

  // Validate that the secret matches the API key pair
  if (validSecrets[keyIndex] !== secretKey) {
    return res.status(403).json({ 
      error: 'Invalid Secret key or key pair mismatch' 
    });
  }

  next();
};  //optional chaining to prevent from errors and convert string to array