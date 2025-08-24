import { useRegisterMutation } from "@/src/api/auth/register.mutate";
import { TouchableButton } from "@/src/shared/ui/buttons/touchableButton";
import { Input } from "@/src/shared/ui/input";
import { IRegisterRequest } from "@/src/types/auth/registerRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { z } from "zod";

const schema = z.object({
	first_name: z
		.string()
		.min(1, { message: "Имя обязательно" })
		.max(20, { message: "Имя не должно превышать 20 символов" }),
	last_name: z.string().min(1, { message: "Фамилия обязательно" }),
	email: z.string().email("Введите валидный email").min(1, { message: "Email обязателен" }),
	password: z.string().min(6, { message: "Пароль должен быть не менее 6 символов" }),
});

export const RegistrationForm = () => {
	const { mutate } = useRegisterMutation();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IRegisterRequest>({
		resolver: zodResolver(schema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: IRegisterRequest) => {
		mutate(data);
	};

	return (
		<>
			<Text style={styles.title}>Регистрация</Text>

			<View>
				<View style={styles.inputWrapper}>
					<Controller
						control={control}
						name="first_name"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input placeholder="Имя" onChangeText={onChange} onBlur={onBlur} value={value} />
						)}
					/>
					{errors.first_name && <Text style={styles.error}>{errors.first_name.message}</Text>}

					<Controller
						control={control}
						name="last_name"
						render={({ field: { onChange, onBlur, value } }) => (
							<Input placeholder="Фамилия" onChangeText={onChange} onBlur={onBlur} value={value} />
						)}
					/>
					{errors.last_name && <Text style={styles.error}>{errors.last_name.message}</Text>}

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
							<Input placeholder="Пароль" onChangeText={onChange} onBlur={onBlur} value={value} secureTextEntry />
						)}
					/>
					{errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
				</View>

				<TouchableButton onPress={handleSubmit(onSubmit)} style={styles.button} disabled={isSubmitting}>
					<Text style={styles.buttonText}>Зарегистрироваться</Text>
				</TouchableButton>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	inputWrapper: {
		gap: 10,
	},
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
});
