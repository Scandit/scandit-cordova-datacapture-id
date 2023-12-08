/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id

import android.Manifest
import com.scandit.datacapture.cordova.core.ScanditCaptureCore
import com.scandit.datacapture.cordova.core.communication.CameraPermissionGrantedListener
import com.scandit.datacapture.cordova.core.errors.InvalidActionNameError
import com.scandit.datacapture.cordova.core.factories.ActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.handlers.CameraPermissionsActionsHandlerHelper
import com.scandit.datacapture.cordova.core.utils.CordovaEventEmitter
import com.scandit.datacapture.cordova.id.factories.IdCaptureActionFactory
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.frameworks.id.listeners.FrameworksIdCaptureListener
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray

class ScanditIdCapture :
    CordovaPlugin(),
    CameraPermissionGrantedListener {

    private val eventEmitter = CordovaEventEmitter()
    private val idCaptureModule = IdCaptureModule(FrameworksIdCaptureListener(eventEmitter))

    private val actionFactory: ActionFactory = IdCaptureActionFactory(idCaptureModule, eventEmitter)
    private val actionsHandler: ActionsHandler = ActionsHandler(
        actionFactory, CameraPermissionsActionsHandlerHelper(actionFactory)
    )

    private var lastIdCaptureEnabledState: Boolean = false

    override fun pluginInitialize() {
        super.pluginInitialize()
        ScanditCaptureCore.addPlugin(serviceName)
        idCaptureModule.onCreate(cordova.context)

        if (cordova.hasPermission(Manifest.permission.CAMERA)) {
            onCameraPermissionGranted()
        }
    }

    override fun onStop() {
        lastIdCaptureEnabledState = idCaptureModule.isModeEnabled()
        idCaptureModule.setModeEnabled(false)
    }

    override fun onStart() {
        idCaptureModule.setModeEnabled(lastIdCaptureEnabledState)
    }

    override fun onReset() {
        idCaptureModule.onDestroy()
        pluginInitialize()
    }

    override fun execute(
        action: String,
        args: JSONArray,
        callbackContext: CallbackContext
    ): Boolean {
        return try {
            actionsHandler.addAction(action, args, callbackContext)
        } catch (e: InvalidActionNameError) {
            println(e)
            false
        } catch (e: Exception) {
            println(e)
            true
        }
    }

    //region CameraPermissionGrantedListener
    override fun onCameraPermissionGranted() {
        actionsHandler.onCameraPermissionGranted()
    }
    //endregion
}
