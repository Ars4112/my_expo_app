import { useLoginMutation } from "@/src/api/auth/login.mutate";
import { AuthRoutes } from "@/src/shared/constants/routes/auth";
import { Input } from "@/src/shared/ui/input";
import { ILoginRequest } from "@/src/types/auth/loginRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { z } from "zod";

const schema = z.object({
	email: z.string().email("Введите валидный email").min(1, { message: "Email обязателен" }),
	password: z.string().min(6, { message: "Пароль должен быть не менее 6 символов" }),
});

export const LoginForm = () => {
	const { mutate } = useLoginMutation();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ILoginRequest>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: ILoginRequest) => {
		mutate(data);
	};

	return (
		<>
			<Text style={styles.title}>Логин</Text>

			<View>
				<Controller
					control={control}
					name="email"
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Email"
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							keyboardType="email-address"
							autoCapitalize="none"
						/>
					)}
				/>
				{errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

				<Controller
					control={control}
					name="password"
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Пароль"
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							secureTextEntry
						/>
					)}
				/>
				{errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

				<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button} disabled={isSubmitting}>
					<Text style={styles.buttonText}>Залогиниться</Text>
				</TouchableOpacity>
				<Link style={styles.link} href={AuthRoutes.REGISTER}>
					Регистрация
				</Link>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#dddddd",
		padding: 10,
		color: "#dddddd",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
		color: "#dddddd",
	},
	form: {
		width: "100%",
	},
	button: {
		marginTop: 20,
		width: "100%",
		height: 40,
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 16,
	},
	error: {
		color: "red",
		marginBottom: 8,
		marginLeft: 16,
	},
	link: {
		color: "#dddddd",
		marginVertical: 15,
		textAlign: "center",
		textDecorationLine: "underline",
	},
});
