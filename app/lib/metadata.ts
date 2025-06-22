import { Metadata } from "next";

const BASE_TITLE = "Darshan Hosangadi";

export function createMetadata(pageTitle?: string): Metadata {
    return {
        title: pageTitle ? `${BASE_TITLE} /  ${pageTitle}` : BASE_TITLE,
        description: "Proficient in leading cross-functional teams and utilizing user-centered design principles to deliver standout products in the kids gaming industry. Passionate about creating meaningful connections between kids and technology through innovative and educational game design.",
    }
};