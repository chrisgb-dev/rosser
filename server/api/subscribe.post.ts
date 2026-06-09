export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    
    const body = await readBody(event);
    
    const { email, website } = body;

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

    if (!email) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email is required',
            data: {
                success: false,
                message: 'Email is required'
            }
        })
    }

    const subscriber = {
        email: email,
        lists: [2]
    }

    try {
        const rsp = await fetch(`${config.listmonkHost}/api/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${config.listmonkApiUser}:${config.listmonkApiToken}`
            },
            body: JSON.stringify(subscriber)
        });

        if (!rsp.ok) {
            const errorData = await rsp.json();
            console.error('Subscription failed:', errorData);
            throw createError({
                statusCode: rsp.status,
                statusMessage: 'Subscription failed: ' + (errorData.message || rsp.statusText),
                data: {
                    success: false,
                    message: errorData.message || 'An error occurred while subscribing'
                }
            })
        }



    } catch (error:any) {
        throw createError({
            statusCode: error.cause?.statusCode || 500,
            statusMessage: error.statusMessage || 'Subscription failed',
            data: {
                success: error.data?.success || false,
                message: error.data?.message || 'An error occurred while subscribing'
            }
        })
    }

    return {
        success: true,
        message: 'You will receive an email asking you to confirm your subscription. Please check your inbox and click the confirmation link to complete the subscription process.'
    }
});