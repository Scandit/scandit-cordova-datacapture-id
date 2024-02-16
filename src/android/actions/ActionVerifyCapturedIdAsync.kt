/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.errors.JsonParseError
import com.scandit.datacapture.cordova.core.utils.CordovaResult
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionVerifyCapturedIdAsync(
    private val idCaptureModule: IdCaptureModule
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val capturedIdJSON = args.get(0).toString()
            idCaptureModule.verifyCapturedIdBarcode(capturedIdJSON, CordovaResult(callbackContext))
        } catch (e: Exception) {
            callbackContext.error(JsonParseError(e.message).toString())
        }
    }
}
