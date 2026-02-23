// posts.ts
export interface Post {
    id: number;
    title: string;
    categories: string[];
    date: string;
    author: string;
    imageUrl: string;
    categoryColor?: string;
}

export const featuredPosts: Post[] = [
    {
        id: 1,
        title: "Trending Gadget That Simply Change Your Lifestyle",
        categories: ["Gadget", "Tech"],
        date: "July 17, 2023",
        author: "DemoAdmin",
        imageUrl: "https://softbenz.com/media/blog/blog-1620647299.jpg",
    },
    {
        id: 2,
        title: "Grand Live Concert In Germany",
        categories: ["Music"],
        date: "July 24, 2023",
        author: "DemoAdmin",
        imageUrl: "https://thumbs.6sqft.com/wp-content/uploads/2021/07/13123945/The-Rooftop-at-Pier-17-concert.jpg?w=1560&format=webp",
        categoryColor: "bg-orange-500"
    },
    {
        id: 3,
        title: "New Trending Wedding Fashion",
        categories: ["Fashion"],
        date: "July 20, 2023",
        author: "DemoAdmin",
        imageUrl: "https://storage.googleapis.com/buro-malaysia-storage/beta.buro247.my/2022/08/b2a5cc44-iconic-wedding-gown-cr.jpg",
        categoryColor: "bg-pink-600"
    },
    {
        id: 4,
        title: "Best New Phone For New Lifestyle",
        categories: ["Lifestyle"],
        date: "July 20, 2023",
        author: "DemoAdmin",
        imageUrl: "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-My-top-picks-tried-and-tested.jpg",
        categoryColor: "bg-orange-600"
    },
    {
        id: 5,
        title: "Most Important Thing That Need To Carry When Travelling",
        categories: ["Travel"],
        date: "July 20, 2023",
        author: "DemoAdmin",
        imageUrl: "https://i0.wp.com/bigtinyworld.com/wp-content/uploads/2019/04/travel-gear-1-1.jpg?resize=640%2C427&ssl=1",
        categoryColor: "bg-purple-600"
    }
];