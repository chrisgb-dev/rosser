import { getPocketBase } from '../utils/pb';
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pb = await getPocketBase();

    const readingList = await pb.collection('books').getList(1, 999, {
        expand: 'authors'
    });

    return {
        items: readingList.items.map((item) => ({
            id: item.id,
            title: item.title,
            progress: item.progress,
            linkAmazon: item.linkAmazon,
            status: item.status,
            cover: item.cover,
            expand: {
                authors: item.expand.authors.map((author) => ({
                    firstName: author.firstName,
                    lastName: author.lastName
                }))
            }
        }))
    }

})