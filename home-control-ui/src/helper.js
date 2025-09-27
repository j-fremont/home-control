import { WeatherMeasEnum } from './actions'

export const getSensor = (measurement) => {
    
    switch(measurement) {
        case WeatherMeasEnum.TEMPERATURE:
            return 'temperature';
        case WeatherMeasEnum.HUMIDITY:
            return 'humidity';
        case WeatherMeasEnum.LUMINOSITY:
            return 'luminosity';
        case WeatherMeasEnum.PRESSURE:
            return 'pressure';
        default:
            return undefined;
        }
}