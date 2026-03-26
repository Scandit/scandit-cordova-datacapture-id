/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id

import com.scandit.datacapture.cordova.core.ScanditCaptureCore
import com.scandit.datacapture.cordova.core.utils.CordovaEventEmitter
import com.scandit.datacapture.cordova.core.utils.CordovaMethodCall
import com.scandit.datacapture.cordova.core.utils.CordovaResult
import com.scandit.datacapture.cordova.core.utils.PluginMethod
import com.scandit.datacapture.frameworks.core.CoreModule
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONObject

class ScanditIdCapture :
    CordovaPlugin() {

    private val emitter = CordovaEventEmitter()

    private val idCaptureModule = IdCaptureModule(emitter)

    private var lastIdCaptureEnabledState: Boolean = false

    private val serviceLocator = DefaultServiceLocator.getInstance()

    override fun pluginInitialize() {
        super.pluginInitialize()
        ScanditCaptureCore.addPlugin(serviceName)
        idCaptureModule.onCreate(cordova.context)
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
        return when (action) {
            "executeId" -> executeId(args, callbackContext)
            "getDefaults" -> getDefaults(callbackContext)
            else -> false
        }.let { true }
    }

    fun executeId(args: JSONArray, callbackContext: CallbackContext) {
        val argsJson = args.getJSONObject(0)
        val coreModule = serviceLocator.resolve(
            CoreModule::class.java.simpleName
        ) as? CoreModule ?: return run {
            callbackContext.error("Unable to retrieve the CoreModule from the locator.")
        }

        val result = coreModule.execute(
            CordovaMethodCall(args),
            CordovaResult(callbackContext, emitter),
            idCaptureModule
        )

        if (!result) {
            val methodName = argsJson.getString("methodName") ?: "unknown"
            callbackContext.error("Unknown method: $methodName")
        }
    }

    @PluginMethod
    fun getDefaults(callbackContext: CallbackContext) {
        callbackContext.success(JSONObject(idCaptureModule.getDefaults()))
    }
}
