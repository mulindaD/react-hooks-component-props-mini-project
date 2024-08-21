import Article from "./Article"

function ArticleList({ posts }){

    const articleCards = posts.map( post => {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        )
    })
    return(
        <main>
            {articleCards}
        </main>
    )
}

export default ArticleList