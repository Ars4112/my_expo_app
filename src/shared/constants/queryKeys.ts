export const QueryKeys = {
	avatarUser: "avatarUser",
    logIn: "logIn",
    logOut: "logOut",
    registration: "registration",
} as const

export type QueryKeys = (typeof QueryKeys)[keyof typeof QueryKeys]