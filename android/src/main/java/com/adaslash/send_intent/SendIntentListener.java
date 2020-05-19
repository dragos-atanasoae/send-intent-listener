package com.adaslash.send_intent;

import android.content.Intent;
import android.net.Uri;
import androidx.annotation.Nullable;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;

@NativePlugin()
public class SendIntentListener extends Plugin {

    private static final String EVENT_INIT = "init";
    private static final String EVENT_INIT_ERROR = "initError";

    @Nullable
    private Uri mData;

    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        mData = intent.getData();
    }

    @Override
    protected void handleOnStart() {
        Intent intent = bridge.getActivity().getIntent();
        String action = intent.getAction();
        String type = intent.getType();
        String stringExtra = intent.getStringExtra(Intent.EXTRA_TEXT);
        System.out.print("Text received: " + stringExtra);
        if (Intent.ACTION_SEND.equals(action) && type != null) {
            if ("text/plain".equals(type)) {
                JSObject ret = new JSObject();
                ret.put("text", stringExtra);
                notifyListeners(EVENT_INIT, ret, true);
            } else {
                JSObject error = new JSObject();
                error.put("text", "Error");
                notifyListeners(EVENT_INIT_ERROR, error, true);
            }
        }
    }
}
