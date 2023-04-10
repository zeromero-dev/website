import clsx from 'clsx';
import { SiDiscord } from 'react-icons/si';
import type { Data } from 'use-lanyard';

type DiscordProps = {
	lanyard: Data;
	status: 'online' | 'idle' | 'dnd' | 'offline';
};

export const Discord = ({ lanyard, status }: DiscordProps) => {
	return (
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
			<div className="transform-gpu space-y-1 text-center transition hover:-rotate-[-10deg] hover:scale-[1.3] md:scale-[1.2]">
				<div className="text-base">
					<h2>
						<SiDiscord className="mb-1 inline opacity-100 " /> {lanyard.discord_user.username}#
						{lanyard.discord_user.discriminator}
					</h2>
				</div>
				<p
					className={clsx(
						{
							online: 'bg-color-green-500 animate-blink',
							idle: 'animate-shake bg-orange-400 text-orange-50',
							dnd: 'bg-red-500 text-red-50',
							offline: 'bg-blurple text-white/90',
						}[status],
					)}
				>
					{status}
				</p>
			</div>
		</div>
	);
};
