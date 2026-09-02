import type z from "zod";
import type {
    TwitchBaseMetadataSchema,
    TwitchBaseSubscriptionMetadataSchema,
} from "../schema/twitch/TwitchMetadata.js";

export type TwitchBaseMetadata = z.infer<typeof TwitchBaseMetadataSchema>;
export type TwitchBaseSubscriptionMetadata = z.infer<
    typeof TwitchBaseSubscriptionMetadataSchema
>;
