export const AuthRoutes = {
	LOGIN: '/(auth)/login',
	REGISTER: '/(auth)/register',
} as const

export type Auth = (typeof AuthRoutes)[keyof typeof AuthRoutes]