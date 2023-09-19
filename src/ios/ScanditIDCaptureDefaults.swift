import ScanditIdCapture

fileprivate typealias IdCaptureOverlayClass = IdCaptureOverlay

struct ScanditIdCaptureDefaults: Encodable {
    struct IdCaptureDefaultsContainer: Encodable {
        let recommendedCameraSettings: CameraSettingsDefaults
        let idCaptureOverlay: [String: BrushDefaults]

        enum CodingKeys: String, CodingKey {
            case recommendedCameraSettings = "RecommendedCameraSettings"
            case idCaptureOverlay = "IdCaptureOverlay"
        }
    }
    
    static let defaults = IdCaptureDefaultsContainer()

}

extension ScanditIdCaptureDefaults.IdCaptureDefaultsContainer {
    init() {
        self.recommendedCameraSettings = CameraSettingsDefaults.from(IdCapture.recommendedCameraSettings)
        self.idCaptureOverlay = [
            "DefaultCapturedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultCapturedBrush
            ),
            "DefaultLocalizedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultLocalizedBrush
            ),
            "DefaultRejectedBrush": BrushDefaults.from(
                IdCaptureOverlayClass.defaultRejectedBrush
            ),
        ]
    }
}
