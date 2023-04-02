import {
	SiObsidian,
	SiPnpm,
	SiPython,
	SiBabel,
	SiDiscord,
	SiDocker,
	SiGit,
	SiArchlinux,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiReactquery,
	SiSpotify,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiWebpack,
} from 'react-icons/si';
import { BsFillTerminalFill } from 'react-icons/bs'

export const Technologies = () => {
    return (
        <div className="col-span-3 flex items-center justify-center rounded-2xl bg-mainblue p-6 text-fuchsia-100 md:col-span-2">
            <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center ">
                <SiTypescript size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiDocker size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiNextdotjs size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiObsidian size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiReactquery size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiPostgresql size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiReact size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiTailwindcss size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <BsFillTerminalFill size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiArchlinux size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiJavascript size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiPnpm size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiWebpack size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiBabel size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiGit size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiSpotify size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiMongodb size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiVisualstudiocode size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiDiscord size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
                <SiPython size={24} className='transition-transform duration-500 hover:scale-[1.6]' />
            </div>
        </div>
    )
}

