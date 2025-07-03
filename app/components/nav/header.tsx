import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import BurgerMenu from "./burger";

const Header = () => {
	return (
		<header className="flex items-center justify-between mx-auto py-6 max-w-7xl">
			<div className="flex items-center gap-2">
				<img src="/logo.png" alt="EKM Supply Co" className="w-52 h-11" />
			</div>
			<div className="sm:flex space-x-10 items-center hidden">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<Link to="/about-us">About us</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Services</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[300px] gap-4">
									<li>
										<NavigationMenuLink asChild>
											<Link to="#">
												<div className="font-medium">Components</div>
												<div className="text-muted-foreground">
													Browse all components in the library.
												</div>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link to="#">
												<div className="font-medium">Documentation</div>
												<div className="text-muted-foreground">
													Learn how to use the library.
												</div>
											</Link>
										</NavigationMenuLink>
										<NavigationMenuLink asChild>
											<Link to="#">
												<div className="font-medium">Blog</div>
												<div className="text-muted-foreground">
													Read our latest blog posts.
												</div>
											</Link>
										</NavigationMenuLink>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<Link to="/industries">Industries</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Button className="font-sfpro font-bold">Contact us</Button>
			</div>
			<BurgerMenu />
		</header>
	);
};

export default Header;
