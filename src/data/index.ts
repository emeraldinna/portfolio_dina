import { z } from "zod"
import photos from "./photos.json"

const RelatedItemSchema = z.object({
    smallSource: z.string(),
    largeSource: z.string(),
})

const PhotoItemSchema = z.object({
    id: z.union([z.number(), z.string()]),
    alt: z.string(),
    title: z.string(),
    mainImage: z.string(),
    largeSource: z.string().optional(), // only photos
    description: z.string(),
    type: z.literal("photo"),
    kind: z.enum(["individual", "project"]),
    genre: z.enum(["people", "stories"]),
    // only projects
    related: z.array(RelatedItemSchema).optional(),
    summary: z.array(z.string()).optional(),
    link: z.url().optional(),
    linkDescription: z.string().optional(),
    banner: z.string().optional(),
})

export type PhotoItem = z.infer<typeof PhotoItemSchema>

export const PhotosSchema = z.array(PhotoItemSchema)

export function getPhotos(): { success: true, photos: PhotoItem[]} | { success: false, message: string } {
    const parseResult = PhotosSchema.safeParse(photos);
    if (parseResult.success) {
        return { success: true, photos: parseResult.data };
    }
    return { success: false, message: parseResult.error.message}
}