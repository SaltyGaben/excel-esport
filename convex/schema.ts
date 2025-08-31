import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	users: defineTable({
		discordId: v.string(),
		username: v.string(),
		discriminator: v.optional(v.string()),
		avatarUrl: v.string(),
		email: v.optional(v.string()),
		createdAt: v.string(),
		lastLoginAt: v.optional(v.string()),
		teamId: v.optional(v.string()),
		roles: v.optional(v.array(v.string())),
		isActive: v.optional(v.boolean()),
		metadata: v.optional(v.any()),
	}),

	teams: defineTable({
		name: v.string(),
		shortName: v.optional(v.string()),
		tag: v.optional(v.string()),
		color: v.string(),
		createdAt: v.string(),
		captainUserId: v.string(),
		memberUserIds: v.array(v.string()),
		isActive: v.optional(v.boolean()),
		metadata: v.optional(v.any()),
	}),

	seasons: defineTable({
		name: v.string(),
		startDate: v.string(),
		endDate: v.optional(v.string()),
		createdAt: v.string(),
		isActive: v.optional(v.boolean()),
		metadata: v.optional(v.any()),
	}),

	tracks: defineTable({
		name: v.string(),
		location: v.string(),
		lengthKm: v.number(),
		imageUrl: v.string(),
		createdAt: v.string(),
		metadata: v.optional(v.any()),
	}),

	events: defineTable({
		seasonId: v.string(),
		trackId: v.string(),
		name: v.string(),
		roundNumber: v.number(),
		date: v.string(),
		published: v.optional(v.boolean()),
		createdAt: v.string(),
		metadata: v.optional(v.any()),
	}),

	sessions: defineTable({
		eventId: v.string(),
		sessionType: v.string(),
		name: v.string(),
		lengthMinutes: v.optional(v.number()),
		startTime: v.optional(v.string()),
		status: v.optional(v.string()),
		lapCount: v.optional(v.number()),
		createdAt: v.string(),
		metadata: v.optional(v.any()),
	}),

	qualifyingResults: defineTable({
		sessionId: v.string(),
		eventId: v.string(),
		seasonId: v.string(),
		userId: v.string(),
		teamId: v.string(),
		userDisplayName: v.string(),
		teamTag: v.optional(v.string()),
		position: v.number(),
		bestLapTimeMs: v.optional(v.number()),
		createdAt: v.string(),
		metadata: v.optional(v.any()),
	}),

	raceResults: defineTable({
		sessionId: v.string(),
		eventId: v.string(),
		seasonId: v.string(),
		userId: v.string(),
		teamId: v.string(),
		userDisplayName: v.string(),
		teamTag: v.optional(v.string()),
		position: v.number(),
		gridPosition: v.number(),
		bestLapTimeMs: v.optional(v.number()),
		totalTimeMs: v.optional(v.number()),
		lapsCompleted: v.optional(v.number()),
		pointsAwarded: v.number(),
		penaltiesSeconds: v.number(),
		disqualified: v.boolean(),
		createdAt: v.string(),
		metadata: v.optional(v.any()),
	}),

	standings: defineTable({
		seasonId: v.string(),
		entityType: v.string(), // "user" | "team"
		entityId: v.string(), // userId or teamId
		standingPosition: v.optional(v.number()), // current rank (for convenience)
		points: v.number(),
		wins: v.number(),
		podiums: v.number(),
		races: v.number(),
		lastUpdatedAt: v.string(),
		displayName: v.string(), // user name or team name
		tag: v.optional(v.string()), // team tag or empty
		meta: v.optional(v.any()),
	}),

	news: defineTable({
		title: v.string(),
		body: v.string(),
		authorUserId: v.optional(v.string()),
		publishDate: v.optional(v.string()),
		isDraft: v.optional(v.boolean()),
		tags: v.optional(v.array(v.string())),
		createdAt: v.string(),
		updatedAt: v.optional(v.string()),
		metadata: v.optional(v.any()),
	}),
});
