import { MenuIcon } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";

export default function BurgerMenu() {
	const [openOptions, setOpenOptions] = useState<boolean>();
	const [openDrawer, setOpenDrawer] = useState<boolean>();

	const closeDrawer = () => {
		setOpenDrawer(false);
		setOpenOptions(false);
	};
	return (
		<div className="sm:hidden flex">
			<Sheet onOpenChange={closeDrawer}>
				<SheetTrigger className="sm:hidden block">
					<MenuIcon size={30} />
				</SheetTrigger>
				<SheetContent side="left" className="bg-white">
					<SheetHeader>
						<SheetTitle>
							<img src="/logo.png" alt="EKM Supply Co" className="w-52 h-11" />
						</SheetTitle>
						<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between"></SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
}
