import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { DeprecatedUi, Primitives, ThemeProvider } from "@untr/core-components";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { ToastProvider } = DeprecatedUi;
const { PortalHost } = Primitives;

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
	return (
		<ThemeProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<Stack
						initialRouteName="(dca)"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen
							name="(dca)"
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="+not-found"
							options={{
								headerShown: false,
							}}
						/>
					</Stack>
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
			<PortalHost />
			<ToastProvider />
		</ThemeProvider>
	);
}
