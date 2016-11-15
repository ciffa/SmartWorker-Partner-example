const express = require( 'express' );
var router    = express.Router();

const response = {
  "version": 1,
  "sections": [{
    "header": "Denne uken (44)",
    "rows": [{
      "type": "text-full",
      "title": "Torsdag 3. november",
      "subtitle": "Kl 08:00 - 15:00",
      "text": "REMA Sagene"
    }, {
      "type": "text-full",
      "title": "Fredag 4. november",
      "subtitle": "Kl 08:00 - 15:00",
      "text": "REMA Oslo Sentrum"
    }]
  }, {
    "header": "Neste uke (45)",
    "rows": [{
      "type": "text-full",
      "title": "Tirsdag 8. november",
      "subtitle": "Kl 08:00 - 15:00",
      "text": "REMA Sagene"
    }, {
      "type": "text-full",
      "title": "Onsdag 9. november",
      "subtitle": "Kl 08:00 - 15:00",
      "text": "REMA Sagene"
    }, {
      "type": "text-full",
      "title": "Torsdag 10. november",
      "subtitle": "Kl 08:00 - 15:00",
      "text": "REMA Sagene"
    }]
  }]
}

router
  .route("/")
  .get( (req, res, next) => {
    res.json( response );
  });

module.exports = router;