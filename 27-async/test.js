
var queuedo = require("./queuedo");
var dates = [];
var task = require("./data_offline.js");
for (var i = 29; i > 0; i--) {
    dates.push("2014-7-" + i);
}
queuedo(dates, function(date, next, context) {
    task.run(date);
    setTimeout(function() {
        next.call(context);
    }, 1000 * 60 * 1);
}, function() {
    console.log("end");
});