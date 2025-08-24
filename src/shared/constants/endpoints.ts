export const Endpoints = {
    // Аутентификация
	login: "/auth/login",
	registration: "/auth/registration",
	logOut: "/auth/logout",
    // Профиль
	avatarUser: "/avatar",
} as const

export type Endpoints = (typeof Endpoints)[keyof typeof Endpoints]