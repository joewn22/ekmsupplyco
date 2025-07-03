import React from "react";
import Header from "../nav/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header /> {children}
		</div>
	);
};

export default MainLayout;
