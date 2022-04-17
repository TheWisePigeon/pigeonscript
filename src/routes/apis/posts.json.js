// @ts-nocheck
export const get = async () => {
    const posts =
        import.meta.glob('../posts/*.md');
    const iterablePosts = Object.entries(posts);

    const allPosts = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const {
                metadata
            } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date).getDate() - new Date(a.meta.date).getDate()
    })

    return {
        body: sortedPosts
    }



}