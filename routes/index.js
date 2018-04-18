var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
    navitems: [
      { content: "Nüfus nedir", link: "#info" },
      { content: "Nüfus Dağılımı", link: "#dist" }, 
      { content: "Dünyadaki nüfus dağılımı", link: "#world-dist" }, 
      { content: "Nüfus yaş dağılımı", link: "#demographic" }
    ],
    title: "Nüfus ile İlgili Bilgiler"
  };
  res.render("index", options);
});

module.exports = router;
