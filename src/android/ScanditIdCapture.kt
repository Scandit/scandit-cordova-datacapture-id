/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id

import com.scandit.datacapture.cordova.core.ScanditCaptureCore
import com.scandit.datacapture.cordova.core.utils.CordovaEventEmitter
import com.scandit.datacapture.cordova.core.utils.CordovaResult
import com.scandit.datacapture.cordova.core.utils.PluginMethod
import com.scandit.datacapture.cordova.core.utils.optBoolean
import com.scandit.datacapture.cordova.core.utils.successAndKeepCallback
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.frameworks.id.listeners.FrameworksIdCaptureListener
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONObject
import java.lang.reflect.Method

class ScanditIdCapture :
    CordovaPlugin() {

    private val eventEmitter = CordovaEventEmitter()

    private val idCaptureModule = IdCaptureModule(eventEmitter)

    private lateinit var exposedFunctionsToJs: Map<String, Method>

    private var lastIdCaptureEnabledState: Boolean = false

    override fun pluginInitialize() {
        super.pluginInitialize()
        ScanditCaptureCore.addPlugin(serviceName)
        idCaptureModule.onCreate(cordova.context)

        // Init functions exposed to JS
        exposedFunctionsToJs =
            this.javaClass.methods.filter { it.getAnnotation(PluginMethod::class.java) != null }
                .associateBy { it.name }
    }

    override fun onStop() {
        lastIdCaptureEnabledState = idCaptureModule.isTopmostModeEnabled()
        idCaptureModule.setTopmostModeEnabled(false)
    }

    override fun onStart() {
        idCaptureModule.setTopmostModeEnabled(lastIdCaptureEnabledState)
    }

    override fun onReset() {
        idCaptureModule.onDestroy()
        pluginInitialize()
    }

    override fun onDestroy() {
        idCaptureModule.onDestroy()
        super.onDestroy()
    }

    override fun execute(
        action: String,
        args: JSONArray,
        callbackContext: CallbackContext
    ): Boolean {
        return if (exposedFunctionsToJs.contains(action)) {
            exposedFunctionsToJs[action]?.invoke(this, args, callbackContext)
            true
        } else {
            false
        }
    }

    @PluginMethod
    fun getDefaults(
        @Suppress("UNUSED_PARAMETER") args: JSONArray,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(JSONObject(idCaptureModule.getDefaults()))
    }

    @PluginMethod
    fun resetIdCaptureMode(
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")
        idCaptureModule.resetMode(modeId)
        callbackContext.success()
    }

    @PluginMethod
    fun addIdCaptureListener(
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        eventEmitter.registerModeSpecificCallback(
            modeId,
            FrameworksIdCaptureListener.ON_ID_CAPTURED_EVENT_NAME,
            callbackContext
        )
        eventEmitter.registerModeSpecificCallback(
            modeId,
            FrameworksIdCaptureListener.ON_ID_REJECTED_EVENT_NAME,
            callbackContext
        )

        idCaptureModule.addListener(modeId)
        callbackContext.successAndKeepCallback()
    }

    @PluginMethod
    fun removeIdCaptureListener(
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        eventEmitter.unregisterModeSpecificCallback(
            modeId,
            FrameworksIdCaptureListener.ON_ID_CAPTURED_EVENT_NAME,
        )

        eventEmitter.unregisterModeSpecificCallback(
            modeId,
            FrameworksIdCaptureListener.ON_ID_REJECTED_EVENT_NAME,
        )

        idCaptureModule.removeListener(modeId)
        callbackContext.success()
    }

    @PluginMethod
    fun finishDidCaptureCallback(
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")
        idCaptureModule.finishDidCaptureId(modeId, argsJson.optBoolean("enabled", false))
        callbackContext.success()
    }

    @PluginMethod
    fun finishDidRejectCallback(
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")
        idCaptureModule.finishDidRejectId(modeId, argsJson.optBoolean("enabled", false))
        callbackContext.success()
    }

    @PluginMethod
    fun setModeEnabledState(args: JSONArray, callbackContext: CallbackContext) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        idCaptureModule.setModeEnabled(modeId, argsJson.optBoolean("enabled", false))
        callbackContext.success()
    }

    @PluginMethod
    fun applyIdCaptureModeSettings(args: JSONArray, callbackContext: CallbackContext) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        idCaptureModule.applyModeSettings(
            modeId,
            argsJson.getString("settingsJson"),
            CordovaResult(callbackContext)
        )
    }

    @PluginMethod
    fun updateIdCaptureMode(args: JSONArray, callbackContext: CallbackContext) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        idCaptureModule.updateModeFromJson(
            modeId,
            argsJson.getString("modeJson"),
            CordovaResult(callbackContext)
        )
    }

    @PluginMethod
    fun updateIdCaptureOverlay(args: JSONArray, callbackContext: CallbackContext) {
        val overlayJson = args.getJSONObject(0).getString("overlayJson")
        idCaptureModule.updateOverlay(overlayJson, CordovaResult(callbackContext))
    }

    @PluginMethod
    fun updateIdCaptureFeedback(args: JSONArray, callbackContext: CallbackContext) {
        val argsJson = args.getJSONObject(0)
        val modeId = argsJson.getInt("modeId")

        idCaptureModule.updateFeedback(
            modeId,
            argsJson.getString("feedbackJson"),
            CordovaResult(callbackContext)
        )
    }
}
