export interface Movie {
    id: number;
    poster_path: string;
    original_title: string;
    overview: string;
    videoKey?: string;
    original_name?: string;

}



export interface Video {
    id: string;
    iso_639_1:string;
    iso_3166_1:string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;

}