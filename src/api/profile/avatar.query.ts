import { Endpoints } from "@/src/shared/constants/endpoints";
import { QueryKeys } from "@/src/shared/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { api } from "../axios";

export const useAvatarQuery = (userId: number) => {
	return useQuery({
		queryKey: [QueryKeys.avatarUser],
		queryFn: () =>
			api.get(`${Endpoints.avatarUser}/${userId}`).then((res) => {
				const avatarData = res.data;

				const imageUrl = `https://storage.yandexcloud.net/ars.avatar/image/${encodeURIComponent(avatarData.bucket_key)}`;

				return {
					...avatarData,
					imageUrl,
				};
			}),
	});
};
