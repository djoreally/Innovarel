import { createClient } from "@sanity/client";

const config = {
    projectId: "6t5vwplb",
    dataset: "production",
    apiVersion: "2024-02-22",
    useCdn: false,
};

const client = createClient(config);

export default client;
