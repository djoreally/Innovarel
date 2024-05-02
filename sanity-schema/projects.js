import { defineField } from "sanity";

export const projects = {
    name: "Projects",
    title: "Projects",
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
            name: "live_link",
            title: "Live Site Link",
            type: "url",
            validation: (rule) =>
                rule.required().uri({
                    scheme: ["http", "https"],
                }),
        }),
        // defineField({
        //     name: "front_end_link",
        //     title: "Front-end Link",
        //     type: "url",
        //     validation: (rule) =>
        //         rule.uri({
        //             scheme: ["http", "https"],
        //         }),
        // }),
        // defineField({
        //     name: "backend_link",
        //     title: "Backend Link",
        //     type: "url",
        //     validation: (rule) =>
        //         rule.uri({
        //             scheme: ["http", "https"],
        //         }),
        // }),
        defineField({
            title: "Category",
            name: "category",
            type: "string",
            options: {
                list: [
                    { title: "Full stack", value: "full_stack" },
                    { title: "Front end", value: "front_end" },
                    { title: "Backend", value: "backend" },
                    { title: "Design", value: "design" },
                    { title: "Wordpress", value: "wordpress" },
                ], // <-- predefined values
            },
        }),
        // defineField({
        //     title: "Features",
        //     name: "features",
        //     type: "array",
        //     of: [{ type: "string" }],
        // }),
    ],
};
