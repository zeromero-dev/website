import clsx from 'clsx';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import {
	SiAmazonaws,
	SiBabel,
	SiDiscord,
	SiDocker,
	SiGit,
	SiGithub,
	SiGo,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSpotify,
	SiTailwindcss,
	SiTwitter,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
	SiWebstorm,
	SiYarn,
} from 'react-icons/si';
import type { Data } from 'use-lanyard';
import { ContactForm } from '../components/contact-form';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import { useUpdatingLanyard } from '../hooks/lanyard';
import matrix from '../images/matrix.gif';
import me from '../images/me.jpg';
// import {getMapURL} from '../server/apple-maps';
import { env } from '../server/env';
import { getLanyard } from '../server/lanyard';
import { age, discordId } from '../utils/constants';
import { formatList } from '../utils/lists';

import { AboutMe } from '../components/about-me';

export interface Props {
	lanyard: Data;
	// map: string;
	location: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const lanyard = await getLanyard(discordId);
	const location = lanyard.kv.location ?? env.DEFAULT_LOCATION;

	// const map = getMapURL(location);

	return {
		revalidate: 10,
		props: { location, lanyard },
	};
};

export default function Home(props: Props) {
	const { data: lanyard } = useUpdatingLanyard(discordId, props.lanyard);

	const status = lanyard.discord_status ?? 'offline';

	return (
		<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16">
			<div className="p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl bg-pink-200 dark:border-pink-500 dark:bg-pink-500/20 dark:backdrop-blur-2xl md:col-span-4 md:h-52">
				<AboutMe />
			</div>

			<CardHoverEffect className="col-span-2 h-full">
				<Link
					href="https://twitter.com/zeromerodev"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-sky-500 text-4xl text-white',
					)}
				>
					<span className="sr-only">Twitter</span>
					<span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
						<SiTwitter />
					</span>
				</Link>
			</CardHoverEffect>

			{/* Discord Status Component */}
			<CardHoverEffect className={clsx(
				'col-span-2 h-full ',
			)} >
				<div
					className={clsx(
						'col-span-3 flex h-52 items-center justify-center rounded-2xl text-4xl md:col-span-2',
						{
							online: 'bg-green-500',
							idle: 'bg-orange-400 text-orange-50 ',
							dnd: 'bg-red-500 text-red-50',
							offline: 'bg-blurple text-white/90',
						}[status],
					)}
				>
					<div className=" space-y-1 text-center md:scale-[1.2] transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
						<p className="text-base">
							<h2>
								<SiDiscord className="inline opacity-100 mb-1" /> {' '}
								{lanyard.discord_user.username}#{lanyard.discord_user.discriminator}
							</h2>
						</p>
						<p className={clsx(
							{
								online: 'bg-color-green-500 animate-blink',
								idle: 'bg-orange-400 text-orange-50 animate-shake',
								dnd: 'bg-red-500 text-red-50',
								offline: 'bg-blurple text-white/90',
							}[status],
						)}>
							{status}
						</p>
					</div>
				</div>
			</CardHoverEffect>
			<Time />

			<CardHoverEffect className="col-span-3 h-full md:col-span-3">
				<Link
					href="https://github.com/zeromero-dev"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<Image
							src={matrix}
							alt="The Matrix scrolling characters effect"
							fill
							style={{ objectFit: 'cover' }}
							className="brightness-[0.7]"
						/>
						<span className="absolute inset-0 bg-neutral-900/50" />
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiGithub className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<span className="block font-title font-bold">github</span>

						<span className="block text-sm">my open source work &amp; contributions</span>
					</span>
				</Link>
			</CardHoverEffect>

			<CardHoverEffect className="col-span-3 h-52">
				{!lanyard?.spotify || !lanyard.spotify.album_art_url ? (
					<Link
						href="https://open.spotify.com/playlist/18R9Cntl2PZEaGMLz4cyX2"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					>
						<span className="absolute inset-0 -z-10">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'https://i.scdn.co/image/ab67706c0000da84e581815a92946c295b02b936'}
								className="absolute inset-0 h-full w-full bg-black  object-cover object-center brightness-50"
								alt="Album cover art"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<div className="space-y-0.5">
								<h2 className="font-title font-bold">
									<span className="font-medium">playlist:</span>early travel
								</h2>

								<p className="text-sm">because you had to get a 3 hour bus journey in the early hours</p>
							</div>
						</span>
					</Link>
				) : (
					<Link
						href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					>
						<span className="absolute inset-0 -z-10">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={`${lanyard.spotify.album_art_url}?cache=${Date.now()}`}
								className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
								alt="Album cover art"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<span>
								<h2>
									<span
										className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
										aria-hidden
									/>{' '}
									Listening to{' '}
									<span className="font-bold" suppressHydrationWarning>
										{lanyard.spotify.song}
									</span>{' '}
									by{' '}
									<span className="font-bold" suppressHydrationWarning>
										{formatList(lanyard.spotify.artist.split('; '), 'conjunction')}
									</span>
									.
								</h2>
							</span>
						</span>
					</Link>
				)}
			</CardHoverEffect>

			<div className="group relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl">
				<Image
					src={props.map}
					className="bg-black"
					fill
					alt="A map locating roughly where I am right now"
					style={{ objectFit: 'cover' }}
				/>

				<div className="absolute top-1/2 left-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
					<div aria-hidden className="absolute translate-y-[14px]">
						<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
					</div>

					<Image
						src={me}
						alt="Photo of me above a map of my current location"
						height={60}
						width={60}
						className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
					/>

					<p className="rounded-full bg-white/10 pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md">
						📍 {props.location}
					</p>
				</div>
			</div>

			<div className="col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-2">
				<div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
					<SiTypescript size={24} />
					<SiDocker size={24} />
					<SiNextdotjs size={24} />
					<SiRedis size={24} />
					<SiPostgresql size={24} />
					<SiReact size={24} />
					<SiTailwindcss size={24} />
					<SiNodedotjs size={24} />
					<SiGo size={24} />
					<SiJavascript size={24} />
					<SiAmazonaws size={24} />
					<SiWebstorm size={24} />
					<SiWebpack size={24} />
					<SiBabel size={24} />
					<SiYarn size={24} />
					<SiGit size={24} />
					<SiSpotify size={24} />
					<SiMongodb size={24} />
					<SiVisualstudiocode size={24} />
					<SiDiscord size={24} />
				</div>
			</div>

			<div className="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 dark:bg-indigo-800 md:col-span-4">
				<h2 className="font-title text-xl font-bold">
					hello world <span className="inline dark:hidden">🌻</span>
					<span className="hidden dark:inline">⭐</span>
				</h2>

				<p>
					My name is Alistair, I'm a software engineer from the United Kingdom. I've been programming for as long as I
					can remember, and I'm currently spending my time with the wonderful people at{' '}
					<Link className="underline" href="https://hop.io">
						Hop
					</Link>
					.
				</p>

				<p>
					Beyond programming, I'm really interested in music production and you can often catch spending time messing
					with DJ decks and my Maschine. Either that or I'll be out riding my Boosted Board 🛹
				</p>
			</div>

			<div className="col-span-6 space-y-4 rounded-2xl bg-lime-400 p-6 text-black md:col-span-6">
				<ContactForm />
			</div>
		</main>
	);
}
