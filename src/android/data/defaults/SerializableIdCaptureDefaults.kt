/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import org.json.JSONObject

class SerializableIdCaptureDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefault,
    private val idCaptureOverlay: SerializableIdCaptureOverlayDefaults
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_RECOMMENDED_CAMERA_SETTINGS to recommendedCameraSettings.toJson(),
            FIELD_ID_CAPTURE_OVERLAY to idCaptureOverlay.toJson()
        )
    )

    private companion object {
        const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        const val FIELD_ID_CAPTURE_OVERLAY = "IdCaptureOverlayDefaults"
    }
}
