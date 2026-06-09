import { getPocketBase } from '../../utils/pb';
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pb = await getPocketBase();

    type Item = {
        id: string;
        title: string;
        progress: number;
        linkAmazon: string;
        linkApple: string;
        linkKobo: string;
        status: string;
        cover: string;
        series: string;
        seriesNo: number;
        published: string;
        genre: string[];
        expand: {
            authors: {
                firstName: string;
                lastName: string;
            }[]
        }
    }

    const readingList = await pb.collection('books').getList<Item>(1, 999, {
        expand: 'authors'
    });

    return {
        items: readingList.items.map((item) => ({
            id: item.id,
            title: item.title,
            progress: item.progress,
            linkAmazon: item.linkAmazon,
            linkApple: item.linkApple,
            linkKobo: item.linkKobo,
            status: item.status,
            cover: item.cover,
            series: item.series,
            seriesNo: item.seriesNo,
            published: item.published,
            genre: item.genre.join(', '),
            authors: item.expand.authors.map((author) => ({
                firstName: author.firstName,
                lastName: author.lastName
            }))

        }))
    }

})