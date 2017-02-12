var alarming = {
    set: function(countDownTime, success, error) {
    console.log("called setTimer");
    cordova.exec(success, error, "WakeUpMeTimer", "setTimer", [countDownTime]);
    }
};
module.exports = alarming;