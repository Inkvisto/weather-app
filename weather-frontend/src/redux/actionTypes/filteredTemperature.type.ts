
export interface FilteredTemperature {
    dailyWeather: {
        temperature: string[];
        description: string[];
        dataTime: number[];
        icons: string[];
    },
    current: {
        temperature: number;
    },
    currentNames: string[],
    location: {
        temperature: string[]
    }
}