import type { MetaFunction } from "@remix-run/node";
import MainLayout from "~/components/layout/main";
import HoverVideo from "~/components/player/video";
import InlineHeader from "~/components/text/inline-header";
import { Button } from "~/components/ui/button";
import { services, values } from "~/lib/data";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
	return [
		{ title: "EKM Supply Co" },
		{
			name: "description",
			content:
				"EKM Supply Co is a dynamic sourcing and supply company committed to delivering high-quality goods and equipment tailored to the evolving needs of modern businesses. With a strong focus on reliability, efficiency, and innovation, we streamline the supply process—bridging the gap between manufacturers and end users.",
		},
	];
};

export default function Index() {
	return (
		<MainLayout>
			<div className="flex flex-col h-screen space-y-20 items-center">
				<div className={"relative w-full"}>
					<div className="h-[80vh] w-full">
						<img
							src="/hero.png"
							alt="EKM Supply Co"
							className="w-full h-full"
						/>
					</div>
					<div className="absolute inset-0 flex items-end justify-end w-full">
						<div className="flex sm:w-1/2 w-full h-full items-center justify-center sm:justify-start px-5 sm:px-20">
							<div className="text-white flex flex-col space-y-9 w-full">
								<InlineHeader title="DYNAMIC SUPPLIER" />
								<h1 className="font-sfpro font-bold text-3xl sm:text-5xl">
									Equipping Vision. Empowering Execution.
								</h1>
								<p className="font-manrope text-sm sm:text-lg w-[70%]">
									Your all-in-one supply partner, across industrial, creative,
									office and branded solutions.
								</p>
								<Button
									size="default"
									variant="outline"
									className="text-base w-fit"
								>
									Let's work together
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-12 w-[87%] h-fit p-10 sm:p-20 bg-grey">
					<div className="flex flex-col space-y-5">
						<InlineHeader title="OUR SERVICES" color="dark" />
						<h1 className="font-medium font-sfpro text-4xl sm:w-[30%]">
							Designed to grow with your goals
						</h1>
						<p className="sm:text-right">
							Tailored supply solutions built to keep your business moving.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
						{services.map((serv, index) => (
							<div className="w-full h-[45vh]" key={index}>
								<HoverVideo
									className="w-full h-full"
									alt={serv.name}
									src=""
									children={
										<div className="flex flex-col bg-dark/30 justify-end p-5 space-y-5 text-white font-manrope">
											<p className="text-2xl font-medium">{serv.name}</p>
											<p>{serv.description}</p>
										</div>
									}
								/>
							</div>
						))}
					</div>
					<div className="flex w-full justify-center">
						<div className="sm:flex-row flex-col space-y-5 sm:space-y-0 space-x-20 justify-between items-center">
							<Button size="lg" variant="outline" className="border-black">
								Browse all services
							</Button>
						</div>
					</div>
				</div>
				{/* <div className="flex flex-col space-y-12 w-[87%] bg-red-200">
					<div className="flex flex-col space-y-5">
						<InlineHeader title="OUR VALUES" color="dark" />
					</div>
				</div> */}
			</div>
		</MainLayout>
	);
}
