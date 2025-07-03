import { ReactNode, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface HoverVideoProps {
	src: string;
	poster?: string;
	className?: string;
	alt?: string;
	children?: ReactNode;
}

export default function HoverVideo({
	src,
	poster,
	className = "",
	children,
	alt = "Video preview",
}: HoverVideoProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleMouseEnter = async () => {
		if (videoRef.current) {
			setIsLoading(true);
			try {
				await videoRef.current.play();
				setIsPlaying(true);
			} catch (error) {
				console.error("Error playing video:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	const handleLoadStart = () => {
		setIsLoading(true);
	};

	const handleCanPlay = () => {
		setIsLoading(false);
	};

	return (
		<div
			className={`relative group cursor-pointer overflow-hidden ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				muted
				loop
				playsInline
				preload="metadata"
				className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				onLoadStart={handleLoadStart}
				onCanPlay={handleCanPlay}
				aria-label={alt}
			/>
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />

			<div className={`absolute inset-0 flex  transition-opacity duration-300`}>
				{children}
			</div>
		</div>
	);
}
