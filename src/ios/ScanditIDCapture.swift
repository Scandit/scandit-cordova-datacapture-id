import ScanditFrameworksCore
import ScanditFrameworksId

@objc(ScanditIdCapture)
public class ScanditIdCapture: CDVPlugin {
    var idModule: IdCaptureModule!
    var emitter: CordovaEventEmitter!

    override public func pluginInitialize() {
        super.pluginInitialize()
        emitter = CordovaEventEmitter(commandDelegate: commandDelegate)
        idModule = IdCaptureModule(emitter: emitter)
        idModule.didStart()
    }

    public override func dispose() {
        idModule.didStop()
        emitter.removeCallbacks()
        super.dispose()
    }

    @objc(executeId:)
    func executeId(_ command: CDVInvokedUrlCommand) {
        guard let argsJson = command.defaultArgumentAsDictionary else {
            commandDelegate.send(
                .failure(with: "Invalid argument received in executeParser"),
                callbackId: command.callbackId
            )
            return
        }

        let coreModuleName = String(describing: CoreModule.self)
        guard let coreModule = DefaultServiceLocator.shared.resolve(clazzName: coreModuleName) as? CoreModule else {
            commandDelegate.send(
                .failure(with: "Unable to retrieve the CoreModule from the locator."),
                callbackId: command.callbackId
            )
            return
        }

        let result = CordovaResult(commandDelegate, emitter: emitter, command: command)
        let handled = coreModule.execute(
            CordovaMethodCall(command: command),
            result: result,
            module: self.idModule
        )

        if !handled {
            let methodName = argsJson["methodName"] as? String ?? "unknown"
            commandDelegate.send(.failure(with: "Unknown Core method: \(methodName)"), callbackId: command.callbackId)
        }
    }

    @objc(getDefaults:)
    func getDefaults(command: CDVInvokedUrlCommand) {
        commandDelegate.send(
            .success(message: idModule.getDefaults() as CDVPluginResult.JSONMessage),
            callbackId: command.callbackId
        )
    }
}
