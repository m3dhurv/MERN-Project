const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn")
const productModel = require("../models/product-model")

router.get("/", function(req, res){
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isloggedin, async function (req, res){
    try {
        let products = await productModel.find();
        res.render("shop", {products, user: req.user});
    } catch (error) {
        console.log(error);
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
});

router.get("/logout", function(req, res){
    res.cookie("token", "");
    res.redirect("/");
});

module.exports = router;