cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-storage": "2.6.0",
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-plugin-admob-simple": "3.3.8"
};
// BOTTOM OF METADATA
});