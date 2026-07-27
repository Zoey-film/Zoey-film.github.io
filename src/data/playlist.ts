// Tracks shown on /playlist. Add a line per track.
//
// `link` is optional — point it at Spotify, Apple Music, YouTube, wherever.
// Tracks with a link become clickable; ones without render as plain text.
//
//   { title: 'Song name', artist: 'Artist', link: 'https://open.spotify.com/track/…' },
//
// `note` is optional too — a short line for why it's here.

export interface Track {
	title: string;
	artist: string;
	link?: string;
	note?: string;
}

export const playlist: Track[] = [];
