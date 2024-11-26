import { Review } from "./general";

const womanPicutreUrl = `https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=`;

const manMockPicutreUrl = `https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=612x612&w=0&k=20&c=D14m64UChVZyRhAr6MJW3guo7MKQbKvgNVdKmsgQ_1g=`;

const secondWomanUrl = `https://t4.ftcdn.net/jpg/05/69/89/19/240_F_569891944_kDbkk5J3PRy2FMKV8msXxJy2hSMFdyu7.jpg`;

export const mockReviews: Review[] = [
    {
        img: womanPicutreUrl,
        name: "Madison J.",
        date: "10 months ago",
        reviewText:
            "I have learnt countless things from this series such as Corporate Culture, Decision Making, Conflict Management, Patience, Emotions, Romance, Etiquette, Achievements, Feelings, Understanding, so on…",
    },
    {
        img: manMockPicutreUrl,
        name: "Jake, M.",
        date: "3 months ago",
        reviewText:
            "I was pleasantly surprised by this show. Tried it once a few years ago and wasn't keen, but have given it a second shot recently and I loved it. The dialogue is smart and confident but never too cocky...",
    },
    {
        img: secondWomanUrl,
        name: "Vanessa R.",
        date: "1 year ago",
        reviewText:
            "I can't believe I took so many years to watch this show, I FINALLY DID, AND I LOVED IT!!!  I finished all the 9 seasons , and I loved every second of it!!  Was never interested in law, but this show hooked me in so deep, I felt respect...",
    },
];
