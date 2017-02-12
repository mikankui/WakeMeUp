// featureのparamのvalueで指定したやつ
package com.gmail.mikankui.WakeUpMeTimer;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import android.util.Log;

public class WakeUpMeTimer extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
        Log.d("WakeUpMeTimer", "WakeUpMeTimer");
        if (action.equals("setTimer")) {
            String name = data.getString(0);
            String message = "Hello, World !!! " + "Hello, " + name;
            callbackContext.success(message);
            return true;
        } else {
            String message = "Hello, World !!! " + "Hello EEROR";
            callbackContext.success(message);
            return false;
        }
    }
}