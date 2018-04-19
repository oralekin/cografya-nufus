var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/change', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#dec", content: "Azalış"},
            {link: "#dec-reas", content: "Neden-Sonuçları"},
            {link: "#inc", content: "Artış"},
            {link: "#inc-reas", content: "Neden-Sonuçları"}
        ],
        title: "Nüfus Artış ve Azalışı"
    };
    res.render("change", options);
});

router.get('/distribution', function(req, res, next) {
    var options = {
        navitems: [
            {link: "#why", content: "Neden?"},
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
            { content: "Dünyadaki nüfus dağılımı", link: "#dist" },
            { content: "Site Hakkında", link: "#about"}
        ],
        title: "Nüfus ile ilgili bilgiler"
    };
    res.render("index", options);
});

router.get('/about', function (req, res, next) {
    var options = {
        navitems: [
            { content: "Kaynakça", link: "#ref" }
        ],
        title: "Site ile ilgili bilgiler"
    };
    res.render("about", options);
});


module.exports = router;
