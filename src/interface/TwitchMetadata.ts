import type z from "zod";
import type {
    TwitchBaseMetadataSchema,
    TwitchSubscriptionMetadataSchema,
} from "../schema/twitch/TwitchMetadata.js";

export type TwitchBaseMetadata = z.infer<typeof TwitchBaseMetadataSchema>;
export type TwitchSubscriptionMetadata = z.infer<
    typeof TwitchSubscriptionMetadataSchema
>;
