import { getPocketBase } from '../../utils/pb';
import { parseAuthorName } from '../../utils/parseAuthorName';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const pb = await getPocketBase();
    
    const body = await readBody(event);

    const { title, author, reason, kobo_link, website } = body;
    
    if (website) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad request',
            data: {
                success: false,
                message: 'Bad request: bot detected!'
            }
        })
    }

    const { firstName: author_first_name, lastName: author_last_name } = parseAuthorName(author);

    let pbAuthor;

    pbAuthor = await pb.collection('authors').getFirstListItem(
        `firstName="${author_first_name}" && lastName="${author_last_name}"`
    ).catch(() => null);


    if (!pbAuthor) {
        pbAuthor = await pb.collection('authors').create({
            firstName: author_first_name,
            lastName: author_last_name
        });
    }

    await pb.collection('books').create({
        title: title,
        status: 'pending',
        linkKobo: kobo_link,
        authors: [pbAuthor.id],
    })

    return {
        success: true,
        message: '',
        donationLink: 'https://donate.stripe.com/7sY00k3yP0ti6vsb3m08g00'
    }

})