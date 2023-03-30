import Image from 'next/image'
import me from '../images/me.jpg';
import Link from 'next/link';
import {age} from '../utils/constants';

export const AboutMe = () => {
    return (
        <div className="flex flex-col items-center space-y-4 py-8 px-6 md:flex-row md:space-y-0 md:space-x-4">
            <Image
                src={me}
                placeholder="blur"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full border border-pink-500 object-cover"
                alt="Photo of me"
            />

            <div className="space-y-1">
                <h1 className="text-center font-title text-xl font-bold tracking-tighter text-pink-900 dark:text-pink-300 dark:text-glow-pink-500/50 md:text-left">
                    Roman Holubenko
                </h1>

                <p className="text-center text-pink-800 dark:text-pink-300/95 dark:text-glow-pink-500/50 md:text-left">
                    {age} y/o full stack TypeScript engineer 🪄
                </p>

                <p className="text-center text-pink-800 dark:text-pink-300/80 dark:text-glow-pink-500/30 md:text-left">
                    <Link href="https://www.linkedin.com/in/zeromerodev/" target="_blank" rel="noopener noreferrer">
                        linkedin ↗️
                    </Link>
                </p>
            </div>
        </div>
    )
}
