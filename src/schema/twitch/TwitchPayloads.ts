import * as z from "zod";

// export interface TwitchMessage {
//     metadata: TwitchBaseMetadata;
//     payload: unknown;
// }

// Used for both Welcome Payload and Reconnect Payload
/**
 * Session Payload object used for é **non-event** related messages
 */
export const TwitchBaseSessionPayloadScheme = z.object({
    id: z.string(),
    status: z.enum(["connected", "reconnecting"]),
    keepalive_timeout_seconds: z.number(),
    reconnect_url: z.string().nullable(),
    connected_at: z.string(),
});

/**
 * Session Payload object use for Welcome Message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#welcome-message
 */
export const TwitchConnectedSessionPayloadScheme =
    TwitchBaseSessionPayloadScheme.extend({
        status: z.literal("connected"),
    });

/**
 * Session Payload object use for Reconnect Message
 *
 * @see Documentation: https://dev.twitch.tv/docs/eventsub/websocket-reference#reconnect-message
 */
export const TwitchReconnectingSessionPayloadScheme =
    TwitchBaseSessionPayloadScheme.extend({
        status: z.literal("reconnecting"),
    });

// [x]: Detach `TwitchSubscriptionPayloadScheme` of the z.object (payload). In this way we can have better control on the subriction object
// TODO: Create a general Payload Scheme, that accept TwitchBaseSessionPayloadScheme and TwitchSubscriptionPayloadScheme as a Discriminated Union
/**
 * Subription Payload object used for **event** related messages
 */
export const TwitchBaseSubscriptionPayloadScheme = z.object({
    id: z.string(),
    status: z.enum([
        "enabled",
        "authorization_revoked",
        "user_removed",
        "version_removed",
    ]),
    type: z.string(),
    version: z.string(),
    cost: z.int(),
    condition: z.object(), //TODO: For `condition` property use a Discriminated Union of the defined condition namely the implemented events
    created_at: z.string(),
});

// TODO: Create the `TransportObjectScheme` for the Subscription Payload
export const TwitchBaseTransportScheme = z.object({
    method: z.enum(["websocket"]),
    session_id: z.string(),
});

/**
 * Subription payload for `authorization_revoked` status
 */
export const TwitchAuthorizationRevokedSubscriptionPayloadScheme =
    TwitchBaseSubscriptionPayloadScheme.extend({
        status: z.literal("authorization_revoked"),
    });

/**
 * Subription payload for `user_removed` status
 */
export const TwitchUserRemovedSubscriptionPayloadScheme =
    TwitchBaseSubscriptionPayloadScheme.extend({
        status: z.literal("user_removed"),
    });

/**
 * Subription payload for `version_removed` status
 */
export const TwitchVersionRemovedSubscriptionPayloadScheme =
    TwitchBaseSubscriptionPayloadScheme.extend({
        status: z.literal("version_removed"),
    });
