import * as z from "zod";

/**
 * Base Metadata object for non event related message
 */
export const TwitchBaseMetadataSchema = z.object({
    message_id: z.string(),
    message_type: z.enum([
        "session_welcome",
        "session_keepalive",
        "notification",
        "session_reconnect",
        "revocation",
    ]),
    message_timestamp: z.iso.datetime(),
});

/**
 * Metadata object for event related message
 */
export const TwitchSubscriptionMetadataSchema = TwitchBaseMetadataSchema.extend(
    {
        subscription_type: z.string(),
        subscription_version: z.string(),
    },
);

/**
 * Metadata used in Welcome message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#welcome-message
 */
export const TwitchWelcomeMetadataSchema = TwitchBaseMetadataSchema.extend({
    message_type: z.literal("session_welcome"),
});

/**
 * Metadata used in Keepalive message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#keepalive-message
 */
export const TwitchKeepaliveMetadataSchema = TwitchBaseMetadataSchema.extend({
    message_type: z.literal("session_keepalive"),
});

/**
 * Metadata used in Notification message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#notification-message
 */
export const TwitchNotificationMetadataSchema =
    TwitchSubscriptionMetadataSchema.extend({
        message_type: z.literal("notification"),
    });

/**
 * Metadata used in Reconnect message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#reconnect-message
 */
export const TwitchReconnectMetadataSchema = TwitchBaseMetadataSchema.extend({
    message_type: z.literal("session_reconnect"),
});

/**
 * Metadata used in Revocation message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#revocation-message
 */
export const TwitchRevocationMetadataSchema =
    TwitchSubscriptionMetadataSchema.extend({
        message_type: z.literal("revocation"),
    });
