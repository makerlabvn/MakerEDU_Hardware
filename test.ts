// tests go here; this will not be compiled when this package is used as an extension.
{
    lcd.displayText(convertToText(ds18b20.readTemperature(ds18b20.PinKit.P0, ds18b20.TemperatureType.Celsius)), 1, 1)
    basic.pause(500)
    lcd.clearScreen()
}