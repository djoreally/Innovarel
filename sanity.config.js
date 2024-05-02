import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { markdownSchema } from "sanity-plugin-milkdown";

import { theme } from 'https://themer.sanity.build/api/hues?primary=00ffaa'
import { schemaTypes } from "./sanity-schema";

export default defineConfig({
    theme,
    name: "default",
    title: "api-portfolio",

    projectId: "6t5vwplb",
    dataset: "production",

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },

    basePath: "/admin",
});
