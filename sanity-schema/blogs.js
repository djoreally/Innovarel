import { defineField } from "sanity";

export const blogs = {
    name: "Blogs",
    title: "Blogs",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
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
            title: "Blog",
            name: "blog",
            type: "block",
            options: { spellCheck: true },
            of: [{ type: "block", options: { spellCheck: true } }],
        }),
        // defineField({
        //     title: "Markdown",
        //     name: "blog_markdown",
        //     type: "markdown",
        // }),
        // defineField({
        //     title: "Date",
        //     name: "date",
        //     type: "date",
        //     options: {
        //         dateFormat: "DD-MMMM-YY",
        //     },
        // }),
    ],
};
