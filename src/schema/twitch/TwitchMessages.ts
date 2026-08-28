import * as z from "zod";
import { TwitchBaseMetadataSchema } from "./TwitchMetadata.js";
import { TwitchSessionPayloadScheme } from "./TwitchSessionPayload.js";

/**
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#welcome-message
 */
export const TwitchWelcomeMessageScheme = z.object({
    metadata: TwitchBaseMetadataSchema.extend({
        message_type: z.literal("session_welcome"),
    }),
    payload: TwitchSessionPayloadScheme.extend({
        status: z.literal("connected"),
        reconnect_url: z.literal(null),
    }),
});

/**
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#keepalive-message
 */

export const TwitchKeepAliveMessageScheme = z.object({
    metadata: TwitchBaseMetadataSchema.extend({
        message_type: z.literal("session_keepalive"),
    }),
    payload: z.object(),
});
