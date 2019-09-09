var Turbolinks    = require("turbolinks"),
    menu          = require("./menu"),
    themeSwitcher = require("./themeSwitcher");

Turbolinks.start()
document.addEventListener("turbolinks:load", function() {
  menu();
  themeSwitcher();
});
