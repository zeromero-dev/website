export const UATimeFormatter = new Intl.DateTimeFormat(undefined, {
	timeZone: 'Europe/Kyiv',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false,
});

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
	style: 'long',
});

export const discordId = '281860093463756802';
export const dob = new Date('2002-04-24');
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
export const hasHadBirthdayThisYear = new Date().getMonth() >= dob.getMonth() && new Date().getDate() >= dob.getDate();
export const nextBirthdayYear = new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
	Math.floor(
		(new Date(nextBirthdayYear, dob.getMonth(), dob.getDate() + 1).getTime() - Date.now()) / 1000 / 60 / 60 / 24, //getDay returns the day of the week, not the day of the month
	),
	'day',
)[1]!.value.toString();

export const movieInitial = [];
// export const movieInitial = [
// 	{
// 		type: 'diary',
// 		date: {
// 			published: 1_680_379_506_000,
// 			watched: 1_680_307_200_000,
// 		},
// 		film: {
// 			title: 'John Wick: Chapter 4',
// 			year: '2023',
// 			image: {
// 				tiny: 'https://a.ltrbxd.com/resized/film-poster/5/3/0/8/8/2/530882-john-wick-chapter-4-0-35-0-50-crop.jpg?v=bc32219057',
// 				small:
// 					'https://a.ltrbxd.com/resized/film-poster/5/3/0/8/8/2/530882-john-wick-chapter-4-0-70-0-105-crop.jpg?v=bc32219057',
// 				medium:
// 					'https://a.ltrbxd.com/resized/film-poster/5/3/0/8/8/2/530882-john-wick-chapter-4-0-150-0-225-crop.jpg?v=bc32219057',
// 				large:
// 					'https://a.ltrbxd.com/resized/film-poster/5/3/0/8/8/2/530882-john-wick-chapter-4-0-230-0-345-crop.jpg?v=bc32219057',
// 			},
// 		},
// 		rating: {
// 			text: '★★★★½',
// 			score: 4.5,
// 		},
// 		review:
// 			"if you ain't cumming on the \"hotline miami\" sequence - I don't even know why you're watching movies at this point",
// 		spoilers: false,
// 		isRewatch: false,
// 		uri: 'https://letterboxd.com/zeromero/film/john-wick-chapter-4/',
// 	},
// 	{
// 		type: 'diary',
// 		date: {
// 			published: 1_678_315_855_000,
// 			watched: 1_678_320_000_000,
// 		},
// 		film: {
// 			title: 'Sorry to Bother You',
// 			year: '2018',
// 			image: {
// 				tiny: 'https://a.ltrbxd.com/resized/sm/upload/pi/8d/sk/jg/wdiJKxlyg3bzqZgRsNcIfoaQs1O-0-35-0-50-crop.jpg?v=f85a9cc2f4',
// 				small:
// 					'https://a.ltrbxd.com/resized/sm/upload/pi/8d/sk/jg/wdiJKxlyg3bzqZgRsNcIfoaQs1O-0-70-0-105-crop.jpg?v=f85a9cc2f4',
// 				medium:
// 					'https://a.ltrbxd.com/resized/sm/upload/pi/8d/sk/jg/wdiJKxlyg3bzqZgRsNcIfoaQs1O-0-150-0-225-crop.jpg?v=f85a9cc2f4',
// 				large:
// 					'https://a.ltrbxd.com/resized/sm/upload/pi/8d/sk/jg/wdiJKxlyg3bzqZgRsNcIfoaQs1O-0-230-0-345-crop.jpg?v=f85a9cc2f4',
// 			},
// 		},
// 		rating: {
// 			text: '★★★',
// 			score: 3,
// 		},
// 		review: 'AYO 📢📢📢 WHO LET THE BRO COOK 🔥🔥🔥🔥',
// 		spoilers: false,
// 		isRewatch: false,
// 		uri: 'https://letterboxd.com/zeromero/film/sorry-to-bother-you/',
// 	},
// 	{
// 		type: 'diary',
// 		date: {
// 			published: 1_678_308_724_000,
// 			watched: 1_678_233_600_000,
// 		},
// 		film: {
// 			title: 'The Nice Guys',
// 			year: '2016',
// 			image: {
// 				tiny: 'https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-35-0-50-crop.jpg?v=40616daa2c',
// 				small:
// 					'https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-70-0-105-crop.jpg?v=40616daa2c',
// 				medium:
// 					'https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-150-0-225-crop.jpg?v=40616daa2c',
// 				large:
// 					'https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-230-0-345-crop.jpg?v=40616daa2c',
// 			},
// 		},
// 		rating: {
// 			text: '★★★½',
// 			score: 3.5,
// 		},
// 		review: 'what if I told you, that the nice guys are actually neo-noiur...',
// 		spoilers: false,
// 		isRewatch: true,
// 		uri: 'https://letterboxd.com/zeromero/film/the-nice-guys/',
// 	},
// ];
