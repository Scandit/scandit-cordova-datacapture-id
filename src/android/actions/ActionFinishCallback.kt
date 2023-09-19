/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.data.SerializableCallbackAction.Companion.FIELD_FINISH_CALLBACK_ID
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData
import com.scandit.datacapture.cordova.core.errors.JsonParseError
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.frameworks.id.listeners.FrameworksIdCaptureListener
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject

class ActionFinishCallback(
    private val idCaptureModule: IdCaptureModule
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val data = args.getJSONObject(0)
            // We need the "result" field to exist ( null is also allowed )
            if (!data.has(FIELD_RESULT)) {
                throw JSONException("Missing $FIELD_RESULT field in response json")
            }
            val result: JSONObject = data.getJSONObject(FIELD_RESULT)

            if (!data.has(FIELD_FINISH_CALLBACK_ID)) {
                throw JSONException("Cannot recognise finish callback action with data $data")
            }

            val resultData = SerializableFinishModeCallbackData.fromJson(result)

            when (data[FIELD_FINISH_CALLBACK_ID]) {
                FrameworksIdCaptureListener.ON_ID_CAPTURED_EVENT_NAME ->
                    idCaptureModule.finishDidCaptureId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_ID_LOCALIZED_EVENT_NAME ->
                    idCaptureModule.finishDidLocalizeId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_ID_REJECTED_EVENT_NAME ->
                    idCaptureModule.finishDidRejectId(resultData?.enabled == true)

                FrameworksIdCaptureListener.ON_TIMEOUT_EVENT_NAME ->
                    idCaptureModule.finishDidTimeout(resultData?.enabled == true)
            }
        } catch (e: JSONException) {
            callbackContext.error(JsonParseError(e.message).serializeContent())
        } catch (e: RuntimeException) { // TODO [SDC-1851] - fine-catch deserializer exceptions
            callbackContext.error(JsonParseError(e.message).serializeContent())
        }
    }

    companion object {
        private const val FIELD_RESULT = "result"
    }
}
