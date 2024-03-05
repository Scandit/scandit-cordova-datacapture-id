import ScanditFrameworksId

struct IdCaptureCallbackResult: BlockingListenerCallbackResult {
    struct ResultJSON: Decodable {
        let enabled: Bool?
    }

    let finishCallbackID: ListenerEvent.Name
    let result: ResultJSON?

    var enabled: Bool? {
        guard let result = result else {
            return nil
        }

        return result.enabled
    }
}

fileprivate extension CordovaEventEmitter {
    func registerCallback(with event: FrameworksIdCaptureEvent, call: CDVInvokedUrlCommand) {
        registerCallback(with: event.rawValue, call: call)
    }
}

@objc(ScanditIdCapture)
public class ScanditIdCapture: CDVPlugin {
    var idModule: IdCaptureModule!
    var emitter: CordovaEventEmitter!

    override public func pluginInitialize() {
        super.pluginInitialize()
        emitter = CordovaEventEmitter(commandDelegate: commandDelegate)
        let idCaptureListener = FrameworksIdCaptureListener(emitter: emitter)
        idModule = IdCaptureModule(idCaptureListener: idCaptureListener)
        idModule.didStart()
    }

    public override func dispose() {
        idModule.didStop()
        emitter.removeCallbacks()
        super.dispose()
    }

    // MARK: Listeners

    @objc(subscribeIdCaptureListener:)
    func subscribeIdCaptureListener(command: CDVInvokedUrlCommand) {
        idModule.addListener()
        FrameworksIdCaptureEvent.allCases.forEach {
            emitter.registerCallback(with: $0, call: command)
        }
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(finishCallback:)
    func finishCallback(command: CDVInvokedUrlCommand) {
        guard let result = IdCaptureCallbackResult.from(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        let enabled = result.enabled ?? false
        if result.isForListenerEvent(.didLocalizeInIdCapture) {
            idModule.finishDidLocalizeId(enabled: enabled)
        } else if result.isForListenerEvent(.didCaptureInIdCapture) {
            idModule.finishDidCaptureId(enabled: enabled)
        } else if result.isForListenerEvent(.didRejectInIdCapture) {
            idModule.finishDidRejectId(enabled: enabled)
        } else if result.isForListenerEvent(.didTimoutInIdCapture) {
            idModule.finishTimeout(enabled: enabled)
        } else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
        }
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(verifyCapturedId:)
    func verifyCapturedId(command: CDVInvokedUrlCommand) {
        guard let jsonString = command.arguments[0] as? String else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        idModule.verifyCapturedIdAamvaViz(jsonString: jsonString,
                                          result: CordovaResult(commandDelegate, command.callbackId))
    }

    // MARK: Defaults

    @objc(getDefaults:)
    func getDefaults(command: CDVInvokedUrlCommand) {
        commandDelegate.send(.success(message: idModule.defaults.toEncodable() as CDVPluginResult.JSONMessage),
                             callbackId: command.callbackId)
    }

    // MARK: Reset

    @objc(resetIdCapture:)
    func resetIdCapture(command: CDVInvokedUrlCommand) {
        idModule.resetMode()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }
}
