import { cn } from "~/lib/utils";

export default function InlineHeader({
	title,
	color,
}: {
	title: string;
	color?: string;
}) {
	return (
		<div className="flex flex-row space-x-2 items-center">
			<div className={cn("w-11 h-px", color ? `bg-${color}` : "bg-white")} />
			<p
				className={cn(
					"font-manrope font-semibold text-sm",
					color ? `text-${color}` : "text-white"
				)}
			>
				{title}
			</p>
		</div>
	);
}
