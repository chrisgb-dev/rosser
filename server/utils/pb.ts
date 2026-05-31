import PocketBase from "pocketbase";

export async function getPocketBase() {
    const config = useRuntimeConfig();
    const pbClient = new PocketBase(config.pbUrl);

    // Authenticate with PocketBase using the provided credentials
    await pbClient.collection('users').authWithPassword(config.pbUsername, config.pbPassword);

    return pbClient;
}