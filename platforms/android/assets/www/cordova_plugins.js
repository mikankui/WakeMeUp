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
    },
    {
        "id": "cordova-plugin-WakeUpMeTimer.WakeUpMeTimer",
        "file": "plugins/cordova-plugin-WakeUpMeTimer/www/WakeUpMeTimer.js",
        "pluginId": "cordova-plugin-WakeUpMeTimer",
        "clobbers": [
            "navigator.plugins.alarming"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
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
    "de.schchr.cordova.plugin.timers": "0.2",
    "cordova-plugin-WakeUpMeTimer": "0.3.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-app-event": "1.2.0",
    "de.appplant.cordova.plugin.local-notification": "0.8.4",
    "cordova-plugin-background-mode": "0.7.2"
};
// BOTTOM OF METADATA
});