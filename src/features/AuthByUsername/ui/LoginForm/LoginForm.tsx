import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import {
	DynamicModuleLoader,
	ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Button } from "@/shared/ui/redesigned/Button";
import { Input } from "@/shared/ui/redesigned/Input";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useForceUpdate } from "@/shared/lib/render/forceUpdate";

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm({
	className,
	onSuccess,
}: LoginFormProps) {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginLoading);
	const error = useSelector(getLoginError);
	const forceUpdate = useForceUpdate();

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === "fulfilled") {
			onSuccess();
			forceUpdate(); //if need can be used windows.location.reload()
		}
	}, [dispatch, username, password, onSuccess, forceUpdate]);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<ToggleFeatures
				feature="isAppRedesigned"
				on={
					<VStack
						gap="16"
						className={classNames(cls.LoginForm, [className], {})}
					>
						<Text title={t("Authorization form")} />
						{error && (
							<Text text={t("Incorrect login or password")} variant="error" />
						)}
						<Input
							autofocus
							type="text"
							className={cls.input}
							placeholder={t("Username")}
							onChange={onChangeUsername}
							value={username}
						/>
						<Input
							type="text"
							className={cls.input}
							placeholder={t("Password")}
							onChange={onChangePassword}
							value={password}
						/>
						<Button
							className={cls.loginBtn}
							onClick={onLoginClick}
							disabled={isLoading}
						>
							{t("Sign in")}
						</Button>
					</VStack>
				}
				off={
					<div className={classNames(cls.LoginForm, [className], {})}>
						<TextDeprecated title={t("Authorization form")} />
						{error && (
							<TextDeprecated
								text={t("Incorrect login or password")}
								theme={TextTheme.ERROR}
							/>
						)}
						<InputDeprecated
							autofocus
							type="text"
							className={cls.input}
							placeholder={t("Username")}
							onChange={onChangeUsername}
							value={username}
						/>
						<InputDeprecated
							type="text"
							className={cls.input}
							placeholder={t("Password")}
							onChange={onChangePassword}
							value={password}
						/>
						<ButtonDeprecated
							theme={ButtonTheme.OUTLINE}
							className={cls.loginBtn}
							onClick={onLoginClick}
							disabled={isLoading}
						>
							{t("Sign in")}
						</ButtonDeprecated>
					</div>
				}
			/>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
