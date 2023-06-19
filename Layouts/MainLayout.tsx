import SiteBar from "@/components/Sidebar/SiteBar";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<div
			className=" flex items-start justify-start 
         "
		>
			<div>
				<SiteBar />
			</div>
			<div>{children}</div>
		</div>
	);
}

