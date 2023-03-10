const jwt = require('jsonwebtoken');

 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.token;
       console.log(token);       
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       console.log(decodedToken);
       const userId = decodedToken.userId;    
       console.log(userId);  
       
       
       req.userId = userId;           
       
	next();
   } catch(error) {
       res.status(401).json({ error });
    }
};
