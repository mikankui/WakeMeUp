cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "org.nypr.cordova.wakeupplugin.Wakeup",
        "file": "plugins/org.nypr.cordova.wakeupplugin/www/wakeup.js",
        "pluginId": "org.nypr.cordova.wakeupplugin",
        "clobbers": [
            "wakeuptimer"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "com.uniclau.alarmplugin.AlarmPlugin",
        "file": "plugins/com.uniclau.alarmplugin/www/alarmplugin.js",
        "pluginId": "com.uniclau.alarmplugin",
        "clobbers": [
            "navigator.plugins.alarm"
        ]
    },
    {
        "id": "org.nypr.cordova.sleeptimerplugin.SleepTimer",
        "file": "plugins/org.nypr.cordova.sleeptimerplugin/www/sleeptimer.js",
        "pluginId": "org.nypr.cordova.sleeptimerplugin",
        "clobbers": [
            "sleeptimer"
        ]
    },
    {
        "id": "de.schchr.cordova.plugin.timers.TimerPlugin",
        "file": "plugins/de.schchr.cordova.plugin.timers/www/TimerPlugin.js",
        "pluginId": "de.schchr.cordova.plugin.timers",
        "clobbers": [
            "cordova.plugins.TimerPlugin",
            "plugin.TimerPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "org.nypr.cordova.wakeupplugin": "0.1.0",
    "cordova-plugin-vibration": "2.1.3",
    "com.uniclau.alarmplugin": "0.1.0",
    "org.nypr.cordova.sleeptimerplugin": "0.1.0",
    "de.schchr.cordova.plugin.timers": "0.2"
};
// BOTTOM OF METADATA
});