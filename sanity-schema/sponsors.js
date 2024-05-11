import { defineField } from "sanity";

export const sponsors = {
    name: "Sponsors",
    title: "Sponsors",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: "Upload website picture",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "url",
            title: "Sponsors Site Link",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
    ],
};
