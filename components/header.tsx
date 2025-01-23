import { FontAwesome6 } from "@expo/vector-icons";
import { Button, H1, cn } from "@untr/core-components";
import { router } from "expo-router";
import type { ComponentProps, ElementType } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = ComponentProps<typeof View> & {
	buttonBack?: boolean;
	onPressBack?: () => void;
	headerClassName?: string | undefined;
	headerLabel?: string;
	addonRight?: ElementType;
};

export const Header = ({
	buttonBack = false,
	onPressBack,
	headerClassName,
	headerLabel,
	addonRight: AddonRight,
	children,
	...props
}: HeaderProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View className="px-4 mb-4" style={{ paddingTop: insets.top }} {...props}>
			<View
				className={cn(
					"flex flex-row items-center justify-between",
					children && "mb-2",
				)}
			>
				<View className="flex flex-row items-center gap-2">
					{buttonBack && (
						<Button
							variant="ghost"
							size="icon"
							onPress={() => {
								onPressBack ? onPressBack() : router.back();
							}}
						>
							{/* {({ pressed }) => (
								<View
									className={cn("p-1", pressed && "rounded-md bg-gray-100")}
								> */}
							<FontAwesome6
								name="chevron-left"
								size={16}
								className="text-gray-900"
							/>
							{/* </View>
							)} */}
						</Button>
					)}
					{headerLabel && (
						<H1 className={cn("text-2xl", headerClassName)}>{headerLabel}</H1>
					)}
				</View>
				{AddonRight && <AddonRight />}
			</View>

			{children}
		</View>
	);
};
