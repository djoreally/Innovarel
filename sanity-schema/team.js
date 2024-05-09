import { defineField } from "sanity";

export const team = {
    name: "Team",
    title: "Team",
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
            name: "designation",
            title: "Designation",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "github_link",
            title: "Github Link",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
        defineField({
            name: "linkedin_link",
            title: "Linkedin Link",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
        defineField({
            name: "facebook_link",
            title: "Facebook Link",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
        defineField({
            name: "portfolio_link",
            title: "Portfolio Link",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
    ],
};
