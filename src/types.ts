export interface Asteroid {
    id: string;
    name: string;
    close_approach_data: {
        miss_distance: {
            kilometers: number;
        };
    }[];
    absolute_magnitude_h: number;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_max: number;
        };
    };
    is_potentially_hazardous_asteroid: boolean;
}

export interface PhotoDayData {
    title: string;
    url: string;
    hdurl: string;
    explanation: string;
}

export interface FormData {
    planetName: string;
    galaxy: string;
    diameter: number;
    distance: number;
    name: string;
    email: string;
}


