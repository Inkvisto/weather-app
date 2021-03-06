
export type Weather = {

    base:string;
    clouds:{
        all: number;
    }
    cod:number | string;
    coord:{
        lat: number;
        lon: number;
    }
    dt: number;
    id: number;
    main:{
        feels_like: number;
        humidity:   number;
        pressure:   number;
        temp:       number;
        temp_max:   number;
        temp_min:   number;
    }
    name: string;
    sys:{
        country: string;
        id:      number;
        sunrise: number;
        sunset:  number;
        type:    number;
    }
    timezone:   number;
    visibility: number;
    weather: [
        {
            id:number;
            main:string;
            description:string;
            icon:string;
        }
    ]
    wind:{
        deg:number;
        speed:number;
        gust:number;
    }
    snow?:{
       '1h':number;
    }
    rain?:{
        '1h':number;
    },
    message:string

}



export type WeatherDescription = {
    speed: string,
    degrees: string,
    gust: string,
    pressure: string,
    humidity: string,
    rain: string,
    snow: string
}