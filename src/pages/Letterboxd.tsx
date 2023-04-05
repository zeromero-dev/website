import {useState, useEffect} from 'react';
import {useLetterboxd} from '../hooks/useLetterboxd';
import Image from 'next/image';
import back from '../images/back.png';

import {IoRepeat} from 'react-icons/io5';
import Link from 'next/link';

export const Letterboxd = () => {
	const {items} = useLetterboxd();

	if (!items) {
		return <div>Loading data...</div>;
	}

	return (
		<div className="relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 space-x-2 overflow-hidden rounded-2xl bg-slate-900">
			{/* <h1 className="text-4xl font-bold ">Myletterboxd</h1>  */}
			{/* I don't know man */}
			{items.map(item => {
				return (
					<div key={item.uri} className="content-evenly rounded-lg border-2 border-neutral-700">
						{/* center here */}
						<div className="relative h-full w-full">
							{/* <img src={item.film.image.medium} alt={item.film.title} /> */}
							<Link href={item.uri} target="_blank">
								<Image
									src={item.film.image.medium}
									alt={item.film.title}
									width={400}
									height={200}
									className="h-full w-full rounded-lg object-cover transition duration-300 hover:blur-[3px]"
								/>
							</Link>
							<div className="h-full w-full items-center">
								<p className="mr-2">{item.rating.text}</p>
								{item.isRewatch && <IoRepeat />}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Letterboxd;

{
	/* <div className="group relative col-span-3 flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-2xl">
				<Image
					src={back}
					className="bg-black transition duration-300 group-hover:blur-[3px]"
					fill
					alt="A map locating roughly where I am right now"
					style={{ objectFit: 'cover' }}
				/>
				<div className="absolute top-1/2 left-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
					<div aria-hidden className="absolute translate-y-[14px]">
						{<span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" /> 
		  		</div>
		  		<p className="rounded-full font-bold text-white/95 backdrop-blur-md">
		  			Movies I watched recently
		  		</p>
		  		<Image
		  			src={me}
		  			alt="Photo of me above a map of my current location"
		  			height={60}
		  			width={60}
		  			className="h-15 w-15 z-20 rounded-full border-2 border-black transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
		 		/>
		  	</div>
		 </div>  */
}
