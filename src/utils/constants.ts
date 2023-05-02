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
const today = new Date();

export const hasHadBirthdayThisYear = (
	today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate())
) && today.getFullYear() >= dob.getFullYear();

export const nextBirthdayYear = today.getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
  Math.floor(
    (new Date(nextBirthdayYear, dob.getMonth(), dob.getDate() + 1).getTime() - today.getTime()) / 1000 / 60 / 60 / 24
  ),
  'day',
)[1]!.value.toString();
export const movieInitial = [];
