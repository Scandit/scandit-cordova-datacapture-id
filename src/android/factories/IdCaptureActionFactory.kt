/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.id.factories

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.errors.InvalidActionNameError
import com.scandit.datacapture.cordova.core.factories.ActionFactory
import com.scandit.datacapture.cordova.core.utils.CordovaEventEmitter
import com.scandit.datacapture.cordova.id.actions.ActionApplyIdCaptureModeSettings
import com.scandit.datacapture.cordova.id.actions.ActionCreateContextForBarcodeVerification
import com.scandit.datacapture.cordova.id.actions.ActionFinishCallback
import com.scandit.datacapture.cordova.id.actions.ActionGetDefaults
import com.scandit.datacapture.cordova.id.actions.ActionIdCaptureReset
import com.scandit.datacapture.cordova.id.actions.ActionSetModeEnabledState
import com.scandit.datacapture.cordova.id.actions.ActionSubscribeDidCapture
import com.scandit.datacapture.cordova.id.actions.ActionSubscribeDidLocalize
import com.scandit.datacapture.cordova.id.actions.ActionSubscribeDidReject
import com.scandit.datacapture.cordova.id.actions.ActionSubscribeDidTimeOut
import com.scandit.datacapture.cordova.id.actions.ActionUnregisterListenerForEvents
import com.scandit.datacapture.cordova.id.actions.ActionUpdateIdCaptureMode
import com.scandit.datacapture.cordova.id.actions.ActionUpdateIdCaptureOverlay
import com.scandit.datacapture.cordova.id.actions.ActionVerifyCapturedId
import com.scandit.datacapture.frameworks.id.IdCaptureModule

class IdCaptureActionFactory(
    private val idCaptureModule: IdCaptureModule,
    private val eventEmitter: CordovaEventEmitter
) : ActionFactory {

    @Throws(InvalidActionNameError::class)
    override fun provideAction(actionName: String): Action {
        return when (actionName) {
            CREATE_CONTEXT_FOR_BARCODE_VERIFICATION ->
                createActionCreateContextForBarcodeVerification()

            GET_DEFAULTS -> createActionGetDefaults()
            SUBSCRIBE_DID_CAPTURE_LISTENER -> createActionSubscribeDidCapture()
            SUBSCRIBE_DID_LOCALIZE_LISTENER -> createActionSubscribeDidLocalize()
            SUBSCRIBE_DID_REJECT_LISTENER -> createActionSubscribeDidReject()
            SUBSCRIBE_DID_TIMEOUT_LISTENER -> createActionSubscribeDidTimeOut()
            UNSUBSCRIBE_LISTENER -> createActionUnregisterListenerForEvents()
            VERIFY_LAST_SESSION -> createActionVerifyCapturedId()
            FINISH_BLOCKING_ACTION -> createActionFinishBlocking()
            RESET_ID_CAPTURE_ACTION -> createResetIdCaptureAction()
            SET_MODE_ENABLED_STATE -> createActionSetModeEnabledState()
            ACTION_APPLY_ID_MODE_SETTINGS -> createApplyIdCaptureModeSettings()
            ACTION_UPDATE_ID_CAPTURE_MODE -> createUpdateIdCaptureModeAction()
            ACTION_UPDATE_ID_CAPTURE_OVERLAY -> createUpdateIdCaptureOverlayAction()
            else -> throw InvalidActionNameError(actionName)
        }
    }

    override fun canBeRunWithoutCameraPermission(actionName: String): Boolean =
        actionName !in ACTIONS_REQUIRING_CAMERA

    private fun createActionGetDefaults(): Action = ActionGetDefaults(idCaptureModule)

    private fun createActionCreateContextForBarcodeVerification(): Action =
        ActionCreateContextForBarcodeVerification(idCaptureModule)

    private fun createActionSubscribeDidCapture(): Action =
        ActionSubscribeDidCapture(idCaptureModule, eventEmitter)

    private fun createActionSubscribeDidLocalize(): Action =
        ActionSubscribeDidLocalize(idCaptureModule, eventEmitter)

    private fun createActionSubscribeDidReject(): Action =
        ActionSubscribeDidReject(idCaptureModule, eventEmitter)

    private fun createActionSubscribeDidTimeOut(): Action =
        ActionSubscribeDidTimeOut(idCaptureModule, eventEmitter)

    private fun createActionUnregisterListenerForEvents(): Action =
        ActionUnregisterListenerForEvents(idCaptureModule, eventEmitter)

    private fun createActionSetModeEnabledState(): Action =
        ActionSetModeEnabledState(idCaptureModule)

    private fun createActionVerifyCapturedId(): Action = ActionVerifyCapturedId(idCaptureModule)

    private fun createActionFinishBlocking() = ActionFinishCallback(idCaptureModule)

    private fun createResetIdCaptureAction() = ActionIdCaptureReset(idCaptureModule)

    private fun createApplyIdCaptureModeSettings() = ActionApplyIdCaptureModeSettings(
        idCaptureModule
    )

    private fun createUpdateIdCaptureModeAction() = ActionUpdateIdCaptureMode(
        idCaptureModule
    )

    private fun createUpdateIdCaptureOverlayAction() = ActionUpdateIdCaptureOverlay(
        idCaptureModule
    )

    companion object {
        private const val CREATE_CONTEXT_FOR_BARCODE_VERIFICATION =
            "createContextForBarcodeVerification"
        private const val GET_DEFAULTS = "getDefaults"
        private const val SUBSCRIBE_DID_CAPTURE_LISTENER = "subscribeDidCaptureListener"
        private const val SUBSCRIBE_DID_LOCALIZE_LISTENER = "subscribeDidLocalizeListener"
        private const val SUBSCRIBE_DID_REJECT_LISTENER = "subscribeDidRejectListener"
        private const val SUBSCRIBE_DID_TIMEOUT_LISTENER = "subscribeDidTimeOutListener"
        private const val UNSUBSCRIBE_LISTENER = "unregisterListenerForEvents"
        private const val FINISH_BLOCKING_ACTION = "finishCallback"
        private const val RESET_ID_CAPTURE_ACTION = "resetIdCapture"
        private const val SET_MODE_ENABLED_STATE = "setModeEnabledState"
        private const val ACTION_APPLY_ID_MODE_SETTINGS = "applyIdCaptureModeSettings"
        private const val ACTION_UPDATE_ID_CAPTURE_MODE = "updateIdCaptureMode"
        private const val ACTION_UPDATE_ID_CAPTURE_OVERLAY = "updateIdCaptureOverlay"
        const val VERIFY_LAST_SESSION = "verifyCapturedId"

        private val ACTIONS_REQUIRING_CAMERA =
            setOf(
                ACTION_APPLY_ID_MODE_SETTINGS,
                ACTION_UPDATE_ID_CAPTURE_MODE,
                ACTION_UPDATE_ID_CAPTURE_OVERLAY
            )
    }
}
