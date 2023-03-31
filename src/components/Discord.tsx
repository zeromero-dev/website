import clsx from "clsx"
import {SiDiscord} from "react-icons/si"
import type { Data } from 'use-lanyard';

type DiscordProps = {
    lanyard: Data,
    status: "online" | "idle" | "dnd" | "offline"
}

export const Discord = ({lanyard, status} : DiscordProps) => {
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
            <div className="space-y-1 text-center md:scale-[1.2] transform-gpu transition group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
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
    )
}
