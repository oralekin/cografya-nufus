var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/change', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#def", content: "Nedir"},
            {link: "#nat", content: "Doğal Nüfus değişiklikleri"},
            {link: "#imm", content: "Göçler"},
        ],
        title: "Nüfus Artış ve Azalışı"
    };
    res.render("change", options);
});

router.get('/distribution', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#why", content: "Nelere göre olur?"},
            {link: "#low", content: "Az olan yerler"},
            {link: "#high", content: "Çok olan yerler"}
        ],
        title: "Nüfus Dağılımı"
    };
    res.render("distribution", options);
});

router.get('/', function(req, res, next) {
    var options = {
        navitems: [
            { content: "Nüfus nedir", link: "#info" },
            { content: "Nüfus Artışı", link: "#inc" },
            { content: "Nüfus dağılımı", link: "#dist" },
            { content: "Site Hakkında", link: "#about"}
        ],
        title: "Nüfus ile ilgili bilgiler"
    };
    res.render("index", options);
});

router.get('/about', function (req, res, next) {
    var options = {
        navitems: [
            { content: "Hakkında", link: "#about"},
            { content: "Kaynakça", link: "#ref" },
            { content: "Teknik Detaylar", link:"#tech"}
        ],
        title: "Site ile ilgili bilgiler"
    };
    res.render("about", options);
});


module.exports = router;
