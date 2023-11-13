/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.actions.ActionJsonParseErrorResultListener
import com.scandit.datacapture.id.data.CapturedId
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionVerifyCapturedId(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val capturedIdJSON = args.get(0).toString()
            val capturedId = CapturedId.fromJson(capturedIdJSON)
            listener.onVerifyCapturedId(capturedId, callbackContext)
        } catch (e: Exception) { // TODO SDC-1851 fine-catch deserializer exceptions
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onVerifyCapturedId(capturedId: CapturedId, callbackContext: CallbackContext)
    }
}
