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
import com.scandit.datacapture.cordova.id.actions.ActionFinishCallback
import com.scandit.datacapture.cordova.id.actions.ActionGetDefaults
import com.scandit.datacapture.cordova.id.actions.ActionIdCaptureReset
import com.scandit.datacapture.cordova.id.actions.ActionSubscribeIdCapture
import com.scandit.datacapture.cordova.id.actions.ActionVerifyCapturedId
import com.scandit.datacapture.frameworks.id.IdCaptureModule

class IdCaptureActionFactory(
    private val idCaptureModule: IdCaptureModule,
    private val eventEmitter: CordovaEventEmitter
) : ActionFactory {

    @Throws(InvalidActionNameError::class)
    override fun provideAction(actionName: String): Action {
        return when (actionName) {
            GET_DEFAULTS -> createActionGetDefaults()
            SUBSCRIBE_ID_CAPTURE_LISTENER -> createActionSubscribeIdCapture()
            VERIFY_LAST_SESSION -> createActionVerifyCapturedId()
            FINISH_BLOCKING_ACTION -> createActionFinishBlocking()
            RESET_ID_CAPTURE_ACTION -> createResetIdCaptureAction()
            else -> throw InvalidActionNameError(actionName)
        }
    }

    override fun canBeRunWithoutCameraPermission(actionName: String): Boolean = true

    private fun createActionGetDefaults(): Action = ActionGetDefaults(idCaptureModule)

    private fun createActionSubscribeIdCapture(): Action =
        ActionSubscribeIdCapture(idCaptureModule, eventEmitter)

    private fun createActionVerifyCapturedId(): Action = ActionVerifyCapturedId(idCaptureModule)

    private fun createActionFinishBlocking() = ActionFinishCallback(idCaptureModule)

    private fun createResetIdCaptureAction() = ActionIdCaptureReset(idCaptureModule)

    companion object {
        private const val GET_DEFAULTS = "getDefaults"
        private const val SUBSCRIBE_ID_CAPTURE_LISTENER = "subscribeIdCaptureListener"
        private const val FINISH_BLOCKING_ACTION = "finishCallback"
        private const val RESET_ID_CAPTURE_ACTION = "resetIdCapture"
        const val VERIFY_LAST_SESSION = "verifyCapturedId"
    }
}
