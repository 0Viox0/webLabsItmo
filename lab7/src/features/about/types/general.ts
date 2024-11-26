export type Review = {
    img: string;
    name: string;
    date: string;
    reviewText: string;
};

export type FilmInfo = {
    id: number;
    img: string;
    title: string;
    description: string;
    reviews: Review[];
};
