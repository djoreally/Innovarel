import { defineField } from "sanity";

export const testimonials = {
    name: "Testimonials",
    title: "Testimonials",
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
            name: "text",
            title: "Text",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            options: {
                list: [
                    { title: "1", value: 1 },
                    { title: "2", value: 2 },
                    { title: "3", value: 3 },
                    { title: "4", value: 4 },
                    { title: "5", value: 5 },
                ],
            },
            validation: (rule) => rule.required().min(1).max(5).integer(),
        }),
    ],
};
