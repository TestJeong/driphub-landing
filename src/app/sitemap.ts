// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://driphub.wakeup-six.com",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

    ];
}