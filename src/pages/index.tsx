import clsx from 'clsx';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub, SiSpotify, SiTwitter } from 'react-icons/si';
import type { Data } from 'use-lanyard';
import { AboutMe } from '../components/aboutMe';
import { ConfigComponent } from '../components/configComponent';
import { ContactForm } from '../components/contactForm';
import { Discord } from '../components/discordComponent';
import { CardHoverEffect, hoverClassName } from '../components/hover-card';
import Letterboxd from '../components/letterboxd';
import { Technologies } from '../components/technologies';
import { Time } from '../components/time';
import { useUpdatingLanyard } from '../hooks/lanyard';
import { LetterboxdSchema } from '../hooks/useLetterboxd';
import { getLetterboxd } from '../server/getLetterboxd';
import { getLanyard } from '../server/lanyard';
import { discordId, movieInitial } from '../utils/constants';
import { formatList } from '../utils/lists';

export interface Props {
	lanyard: Data;
	movies: LetterboxdSchema;
}


//commenting this breaks the build
export const getStaticProps: GetStaticProps<Props> = async () => {
	const lanyard = await getLanyard(discordId);
	const movies = await getLetterboxd(movieInitial);
	return {
		//causes re-renders every 10 seconds
		revalidate: 10,
		props: { lanyard, movies },
	};
};

export default function Home(props: Props) {
	const { data: lanyard } = useUpdatingLanyard(discordId, props.lanyard);
	const items = props.movies ?? movieInitial;
	const status = lanyard.discord_status ?? 'offline';

	return (
		<main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16 ">
			<AboutMe />
			<CardHoverEffect className="col-span-2 h-full">
				<Link
					href="https://twitter.com/zeromerodev"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-mainblue text-4xl text-white hover:border-pink-500/50',
					)}
				>
					<span className="sr-only">Twitter</span>
					<span className="transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
						<SiTwitter />
					</span>
				</Link>
			</CardHoverEffect>
			<Discord lanyard={lanyard} status={status} />
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
					<span
						aria-hidden
						className="pointer-events-none absolute inset-0 -z-20 transition duration-300 group-hover:blur-[3px]"
					>
						<img
							src="bladen.png"
							className="inset-0 h-full w-full object-cover object-center brightness-[1.4] transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15]"
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

						<span className="block text-sm">my profile on github</span>
					</span>
				</Link>
			</CardHoverEffect>

			{/* Spotify  copmonent*/}
			<CardHoverEffect className="col-span-3 h-52">
				{!lanyard?.spotify || !lanyard.spotify.album_art_url ? (
					<Link
						href="https://open.spotify.com/playlist/37i9dQZF1EVKuMoAJjoTIw?si=ff54ca7cd1ae485e"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
							hoverClassName,
						)}
					>
						<span className="absolute bg-cover inset-0 -z-10 pointer-events-none transition duration-300 group-hover:blur-[3px]">
							{/* <Image
								src={playlist}
								className={clsx(
									'absolute inset-0 h-full w-full bg-black  object-cover object-center brightness-50 transition duration-500 group-hover:blur-[3px]',
								)}
								alt="Album cover art"
								fill
								style={{ objectFit: 'cover' }}
							/> */}
							<img
								src="playlist.png"
								alt="album cover art"
								className="inset-0 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>

							<div className="space-y-0.5">
								<h2 className="font-title font-bold">
									<span className="font-medium">my vibe is: </span>
									moody
								</h2>
								<p className="text-sm">moody playlist</p>
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
						<span className="absolute inset-0 -z-10 transition duration-300 group-hover:blur-[3px]">
							<img
								src={`${lanyard.spotify.album_art_url}?cache=${Date.now()}`}
								className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
								alt="Album cover art"
							/>
						</span>

						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100  " />
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
			{/* @ts-ignore */}
			<Letterboxd items={items} />
			<Technologies />
			<ConfigComponent />
			<div className="col-span-6 space-y-4 rounded-2xl bg-darkpurple p-6 text-black md:col-span-6">
				<ContactForm />
			</div>
		</main>
	);
}
