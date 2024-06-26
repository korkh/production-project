import { Suspense } from "react";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Modal } from "@/shared/ui/redesigned/Modal";

import cls from "./LoginModal.module.scss";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
	return (
		<Modal
			className={classNames(cls.LoginModal, [className], {})}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
}
