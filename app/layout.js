// import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Periodic Tables",
	description: "Developed by Aries Grey Richards",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full bg-white">
			<body className="h-full">
				<Nav />
				<main className="py-10 lg:pl-72">{children}</main>
			</body>
		</html>
	);
}
