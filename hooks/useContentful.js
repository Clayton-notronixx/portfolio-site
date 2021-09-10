import {createClient} from "contentful";

const cfClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export function useContentful() {
    return cfClient;
}
