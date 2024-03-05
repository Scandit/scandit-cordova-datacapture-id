/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.utils.CordovaEventEmitter
import com.scandit.datacapture.cordova.core.utils.successAndKeepCallback
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.frameworks.id.listeners.FrameworksIdCaptureListener
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionSubscribeIdCapture(
    private val idCaptureModule: IdCaptureModule,
    private val eventEmitter: CordovaEventEmitter
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        eventEmitter.registerCallback(
            FrameworksIdCaptureListener.ON_ID_CAPTURED_EVENT_NAME,
            callbackContext
        )
        eventEmitter.registerCallback(
            FrameworksIdCaptureListener.ON_ID_LOCALIZED_EVENT_NAME,
            callbackContext
        )
        eventEmitter.registerCallback(
            FrameworksIdCaptureListener.ON_ID_REJECTED_EVENT_NAME,
            callbackContext
        )

        idCaptureModule.addListener()
        callbackContext.successAndKeepCallback()
    }
}
