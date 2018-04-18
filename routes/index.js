var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  var options = {
    navitems: [
      { content: "Nüfus nedir", link: "#info" },
      { content: "Nüfus Artışı", link: "#inc" },
      { content: "Dünyadaki nüfus dağılımı", link: "#world-dist" }, 
      { content: "Nüfus yaş dağılımı", link: "#demographic" }
    ],
    title: "Nüfus ile İlgili Bilgiler"
  };
  res.render("index", options);
});

router.get('/info', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#def", content: "Tanımları"}
        ],
        title: "Nüfus ile İlgili Bilgiler"
    };
    res.render("info", options);
});

router.get('/change', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#def", content: "Tanımları"}
        ],
        title: "Nüfus ile İlgili Bilgiler"
    };
    res.render("change", options);
});



module.exports = router;
