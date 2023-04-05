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
