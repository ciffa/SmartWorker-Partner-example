const express = require( 'express' );

var router    = express.Router();

const tile = {
            type: "text", 
            version: 1,
            text: "5. sept",
            subtext: "kl 08.00 - 16.00",
            microAppApi:"http://worklist.smartansatt.no/microapp", 
          }

router
  .route("/")
  .get( (req, res, next) => {
    res.json( tile );
  });

module.exports = router;