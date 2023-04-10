import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { age } from '../utils/constants';

export const AboutMe = () => {
	const [showPopup, setShowPopup] = useState(false);
	const { rive, RiveComponent } = useRive({
		src: 'wokign.riv',
		animations: 'eyeSiding',
		autoplay: false,
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.TopCenter,
		}),
	});

	const handleClick = () => {
		navigator.clipboard.writeText('holubenko.job@gmail.com');
		setShowPopup(true);
		setTimeout(() => {
			setShowPopup(false);
		}, 1600);
	};
	return (
		<div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-darkpurple dark:border-darkpurple dark:bg-darkpurple  md:col-span-4 md:h-52">
			<div className=" flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
				{/* <Image
					src={me}
					// placeholder="blur"
					height={104}
					width={104}
					className="h-24 w-24 rounded-full border border-darkpink object-cover"
					alt="Photo of me"
				/> */}

				<RiveComponent
					onMouseEnter={() => rive && rive.play()}
					onMouseLeave={() => rive && rive.pause()}
					className="h-32 w-32 rounded-lg border-2 border-darkpink object-cover"
				/>
				<div className="space-y-1">
					<h1 className="text-center font-title text-xl font-bold tracking-tighter text-pink-900 dark:text-pink-300 dark:text-glow-pink-500/50 md:text-left">
						Roman Holubenko
					</h1>

					<p className="text-center text-pink-800 dark:text-pink-300/95 dark:text-glow-pink-500/50 md:text-left">
						{age} y/o full stack TypeScript engineer 🪄
					</p>

					<p className="text-center text-pink-800 dark:text-pink-300/80 dark:text-glow-pink-500/30 md:text-left ">
						linkedin {` `}
						<Link href="https://www.linkedin.com/in/zeromerodev/" target="_blank" rel="noopener noreferrer">
							<HiOutlineExternalLink className="mb-1 inline text-xl opacity-50 transition duration-200 hover:opacity-100" />
						</Link>
						<br />
						<button
							className="inline text-center text-pink-800 opacity-100 transition duration-200 dark:text-pink-300/80 dark:text-glow-pink-500/30 md:text-left "
							onClick={handleClick}
						>
							my gmail
							{showPopup && (
								<div className="bottom absolute w-16 rounded bg-mainblack py-1 text-center text-sm text-pink-300/80">
									copied!
								</div>
							)}
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
