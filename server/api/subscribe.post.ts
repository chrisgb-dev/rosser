export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    
    const body = await readBody(event);
    
    const { email } = body;

    if (!email) {
        return {
            status: 400,
            success: false,
            message: 'Email is required'
        }
    }

    const subscriber = {
        email: email,
        lists: [2]
    }

    try {
        await fetch(`${config.listmonkHost}/api/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${config.listmonkApiUser}:${config.listmonkApiToken}`
            },
            body: JSON.stringify(subscriber)
        });

    } catch (error) {
        return {
            status: 500,
            success: false,
            message: 'An error occurred while subscribing'
        }
    }

    return {
        status: 200,
        success: true,
        message: 'You will receive an email asking you to confirm your subscription. Please check your inbox and click the confirmation link to complete the subscription process.'
    }
});