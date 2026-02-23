export interface Post {
    id: number;
    title: string;
    categories: string[];
    date: string;
    author: string;
    imageUrl: string;
    categoryColor?: string;
}


export const listPosts: Post[] = [
    {
        id: 6,
        title: "Art Exhibition Going To Start This Week",
        categories: ["Art"],
        date: "July 24, 2023",
        author: "DemoAdmin",
        imageUrl: "https://www.discoverhongkong.com/content/dam/dhk/intl/explore/arts-entertainment/artsinhk/2025/gallery_art-basel.jpg",
    },
    {
        id: 7,
        title: "Grand Live Concert In Germany",
        categories: ["Music"],
        date: "July 24, 2023",
        author: "DemoAdmin",
        imageUrl: "https://rju.edu.np/wp-content/uploads/2018/08/aditya-chinchure-494048-unsplash.jpg",
    },
    {
        id: 8,
        title: "Fighter Plane Crash During World War",
        categories: ["History"],
        date: "July 24, 2023",
        author: "DemoAdmin",
        imageUrl: "https://static01.nyt.com/images/2013/07/07/world/07plane_7/07plane_7-superJumbo.jpg",
    },
    {
        id: 9,
        title: "Nutritious Food Good For Healthy Life",
        categories: ["Health"],
        date: "July 24, 2023",
        author: "DemoAdmin",
        imageUrl: "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
    }
];