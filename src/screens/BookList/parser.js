

export const parseBookListData = (data) => {
const getWorks = data.works
const formatWork = getWorks.map((item, index) => {
    let genreList = item?.subject ?? []
    genreList.length = 5
    return {
        title: item.title,
        bookDetail: item.key,
        thumbnail:item.cover_id,
        genre: genreList.join(", "),
        authors: item.authors[0]?.name,
        id: `${index}_${item.cover_id}`,
        authorsDeatil: item.authors[0]?.key,
        publishYear: item?.first_publish_year
    }
})
return formatWork
}