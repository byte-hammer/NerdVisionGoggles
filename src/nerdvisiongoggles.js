exports.mod = (mod_data) => {
    logger.logInfo("[MOD-BITWAVE] NerdVisionGoggles");

    const T7_THERMAL_ID = "5c110624d174af029e69734c";

    let PathResolver = global.internal.path.resolve;
    let items = global.fileIO.readParsed(PathResolver('user/cache/items.json'));
    let settings = require("../settings.json");

    let Thermals = items.data[T7_THERMAL_ID];
    Thermals._props.RampPalette = settings.RampPalette;
    Thermals._props.DepthFade = settings.DepthFade;
    Thermals._props.RoughnessCoef = settings.RoughnessCoef;
    Thermals._props.SpecularCoef = settings.SpecularCoef;
    Thermals._props.MainTexColorCoef = settings.MainTexColorCoef;
    Thermals._props.MinimumTemperatureValue = settings.MinimumTemperatureValue;
    Thermals._props.Intensity = settings.Intensity;
    Thermals._props.DiffuseIntensity = settings.DiffuseIntensity;
    Thermals._props.RampShift = settings.RampShift;
    Thermals._props.HeatMin = settings.HeatMin;
    Thermals._props.ColdMax = settings.ColdMax;
    Thermals._props.IsNoisy = settings.IsNoisy;
    Thermals._props.NoiseIntensity = settings.NoiseIntensity;
    Thermals._props.IsFpsStuck = settings.IsFpsStuck;
    Thermals._props.IsGlitch = settings.IsGlitch;
    Thermals._props.IsMotionBlurred = settings.IsMotionBlurred;
    Thermals._props.Mask = settings.Mask;
    Thermals._props.MaskSize = settings.MaskSize;
    Thermals._props.IsPixelated = settings.IsPixelated;
    Thermals._props.PixelationBlockCount = settings.PixelationBlockCount;

    items.data[T7_THERMAL_ID] = Thermals;
    fileIO.write(PathResolver('user/cache/items.json'), items, true);
    
    logger.logSuccess("[MOD-BITWAVE] NerdVisionGoggles; Applied");
}