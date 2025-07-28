export const ProfileRoutes = {
	HOME: '/(tabs)/index',
	PROFILE: '/(tabs)/profile',
} as const

export type Profile = (typeof ProfileRoutes)[keyof typeof ProfileRoutes]