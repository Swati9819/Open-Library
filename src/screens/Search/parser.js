export const parseSearchList = (data) => {
    const getSearchData = data?.docs
    const formatSearchData = getSearchData?.map((item, index) => {
    let genreList = item?.subject ?? []
    genreList.length = 5
    return {
        title: item.title,
        bookDetail: item.key,
        thumbnail:item.cover_i,
        genre: genreList.join(", "),
        authors: item.author_name[0],
        id: `${index}_${item.cover_id}`,
        publishYear: item?.first_publish_year
    }
})
return formatSearchData
}