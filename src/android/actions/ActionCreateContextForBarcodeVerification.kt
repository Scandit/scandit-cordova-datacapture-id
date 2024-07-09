/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.utils.CordovaResult
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionCreateContextForBarcodeVerification(
    private val idCaptureModule: IdCaptureModule
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        idCaptureModule.createContextForBarcodeVerification(CordovaResult(callbackContext))
    }
}
