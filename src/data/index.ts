import { z } from "zod"
import photos from "./photos.json"
import mainPhotos from "./mainProjects.json"
import animationWorks from "./animations.json"

const TextContentSchema = z.union([z.string(), z.string().array()]);

//////// Photos

const RelatedItemSchema = z.object({
    smallSource: z.string(),
    largeSource: z.string(),
});

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
    summary: TextContentSchema.optional(),
    link: z.url().optional(),
    linkDescription: z.string().optional(),
    banner: z.string().optional(),
});
export type PhotoItem = z.infer<typeof PhotoItemSchema>;

const PhotosSchema = z.array(PhotoItemSchema);

//////// Main Photos

// pretty close to PhotosItem, but not exactly. I'll refactor this later
const MainPhotoItemSchema = z.object({
    id: z.union([z.number(), z.string()]),
    alt: z.string(),
    title: z.string(),
    smallSource: z.string(),
    largeSource: z.string(),
    type: z.literal("photo"),
});
export type MainPhotoItem = z.infer<typeof MainPhotoItemSchema>;

const MainPhotosSchema = z.array(MainPhotoItemSchema);

//////// Animation Works

const VideoSchema = z.object({
    url: z.url(),
    title: z.string(),
})

const DraftSchema = z.object({
    url: z.url(),
    title: z.string(),
    type: z.enum(["sketchfab"]).optional(),
});

const DraftsSectionSchema = z.object({
    title: z.string().optional(),
    "general-text": z.string().optional(), // TODO: switch to TextContentSchema
    drafts: z.array(DraftSchema).optional(),
});

const AnimationWorkItemSchema = z.object({
    id: z.number(),
    alt: z.string(),
    title: z.string(),
    source: z.string(),
    type: z.enum(["game", "tv", "stop-motion"]),
    summary: z.string(), // TODO: switch to TextContentSchema
    description: TextContentSchema,
    link: z.string(), // TODO: now it is empty string or url, get rid of empty strings
    linkDescription: z.string().optional(), // // TODO: switch to TextContentSchema
    videos: z.array(VideoSchema),
    "drafts-section": DraftsSectionSchema,
});

export type AnimationWorkItem = z.infer<typeof AnimationWorkItemSchema>

export const AnimationWorksSchema = z.array(AnimationWorkItemSchema)

//////// Access functions

export function getPhotos(): { success: true, photos: PhotoItem[]} | { success: false, message: string } {
    const parseResult = PhotosSchema.safeParse(photos);
    if (parseResult.success) {
        return { success: true, photos: parseResult.data };
    }
    return { success: false, message: parseResult.error.message}
}

export function getMainPhotos(): { success: true, photos: MainPhotoItem[] } | { success: false, message: string }{
    const parseResult = MainPhotosSchema.safeParse(mainPhotos);
    if (parseResult.success) {
        return { success: true, photos: parseResult.data };
    }
    return { success: false, message: parseResult.error.message};
}

export function getAnimationWorks(): { success: true, animationWorks: AnimationWorkItem[] } | { success: false, message: string } {
    const parseResult = AnimationWorksSchema.safeParse(animationWorks);
    if (parseResult.success) {
        return { success: true, animationWorks: parseResult.data };
    }
    console.log("getAnimationWorks:parse", parseResult);
    return { success: false, message: parseResult.error.message};
}
