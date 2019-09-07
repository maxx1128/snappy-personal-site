var Turbolinks = require("turbolinks"),
    menu       = require("./menu");

Turbolinks.start()
document.addEventListener("turbolinks:load", function() { menu(); });
