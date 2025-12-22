import type { Metadata } from "next";
import {
	ClerkProvider,
	// SignInButton,
	// SignUpButton,
	// SignedIn,
	// SignedOut,
	// UserButton,
} from '@clerk/nextjs'
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Journal Building and analysis application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={jetbrainsMono.className} >
			<ClerkProvider>
				<body
					className={`${jetbrainsMono.variable} antialiased font-mono`}
				>
					{/* //<UserButton /> */}

					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
