import * as z from "zod";
import type { TwitchBaseMetadata } from "../../interface/TwitchMetadata.js";
import { TwitchBaseMetadataSchema } from "./TwitchMetadata.js";

// export interface TwitchMessage {
//     metadata: TwitchBaseMetadata;
//     payload: unknown;
// }

// Used for both Welcome Payload and Reconnect Payload
export const TwitchSessionPayloadScheme = z.object({
    session: z.object({
        id: z.string(),
        status: z.string(),
        keepalive_timeout_seconds: z.number(),
        reconnect_url: z.string().nullable(),
        connected_at: z.string(),
    }),
});
