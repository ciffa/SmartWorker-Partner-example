import express     from 'express';
import jwt         from 'jsonwebtoken';
import ejwt        from 'express-jwt';
import http        from 'http';

import worklistApi from './routes/microapp';
import tileApi from './routes/tile';


// Setup a router that will handle HTTP paths
var router      = express.Router();


// Initialize the JWT middleware that is responsible for verifying incoming user tokens
var tokenAuthMiddleware = ejwt({
  // The shared secret
  secret        : "32fa36e9-6f1a-42e6-a744-0df5b9e358d8", 

  // The ExpressJS request object will be extended with this parameter. This is then
  // reachable as req.authorizationToken and will contain the information necessary to
  // identify a user eg: a phone number.
  userProperty  : "authorizationToken" 
})

// Define an API call path and pass the request through the `tokenAuthMiddleware` before
// activating the handler `worklistApi`
router.use("/microapp", tokenAuthMiddleware, worklistApi );


// Define an API call path and pass the request through the `tokenAuthMiddleware` before
// activating the handler `worklistApi`
router.use("/tile", tokenAuthMiddleware, tileApi );



module.exports = router;
