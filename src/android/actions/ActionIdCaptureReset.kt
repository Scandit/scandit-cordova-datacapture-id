/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionIdCaptureReset(
    private val idCaptureModule: IdCaptureModule
) : Action {
    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        idCaptureModule.resetMode()
        callbackContext.success()
    }
}
