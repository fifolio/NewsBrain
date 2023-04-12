import NewsCard from "../NewsCard/NewsCard"

export default function NewsCards({ articles }) {
    return (
        <>
            {articles.map((article, index) => (
                <NewsCard />
            ))}
        </>
    )
}