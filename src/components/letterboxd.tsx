import { LetterboxdSchema } from '../hooks/useLetterboxd';

import Link from 'next/link';
import { IoRepeat } from 'react-icons/io5';

export const Letterboxd = ({ items }: any) => {
	// const { items } = useLetterboxd();

	if (!items) {
		return <div>Loading data...</div>;
	}

	return (
		<div
			className="relative overflow-x-auto scrollbar-hide flex h-full min-h-[1rem] 
		col-span-3 space-x-2 w-full overflow-hidden rounded-2xl p-6 pt-1 pl-1 pr-2 text-black md:col-span-3"
		>
			{/* I don't know man */}
			{/* <img
				src={back}
				alt="bacgkround image"
				fill
				style={{objectFit: 'cover'}}
				className="opacity-0 hover:blur-[3px]"
			/> */}
			{/* <h1 className="text-white font-bold align-text-top">Recently watched</h1> */}
			{items.map((item: LetterboxdSchema) => {
				return (
					<div key={item.uri} className="content-evenly col-span-2 rounded-xl border-2 shrink border-neutral-700">
						{/* center here */}
						<div className="relative h-full w-full">
							{/* <img src={item.film.image.medium} alt={item.film.title} /> */}
							<Link href={item.uri} target="_blank">
								<img
									src={item.film.image.medium}
									alt={item.film.title}
									className="h-full w-full rounded-lg object-cover transition duration-300 hover:blur-[3px]"
								/>
							</Link>
							<div className="items-center inline-flex text-white">
								{item.rating.text}
								<p className="ml-2">{item.isRewatch && <IoRepeat size={18} />}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Letterboxd;
