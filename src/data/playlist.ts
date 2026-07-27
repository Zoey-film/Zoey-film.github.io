// Tracks and albums shown on /playlist, rendered as posters.
//
// Only `title`, `artist` and `spotify` are needed. Paste the link straight
// from Spotify's "Copy Song Link" — tracking parameters are stripped and
// share links are converted to embed URLs automatically.
//
// Cover art is optional: drop a square image into src/assets/albums/ and put
// its filename in `cover`. The colour bar under the artwork is extracted from
// the image at build time, so there are no colours to pick by hand.

export interface Album {
	title: string;
	artist: string;
	/**
	 * Filename inside src/assets/albums/. Optional — without it the poster
	 * renders with a plain tile and no colour bar.
	 */
	cover?: string;
	/** The release this comes from. Shown in the poster footer. */
	album?: string;
	/** Track listing. Leave empty for single tracks. */
	tracks?: string[];
	/** Release year. Used for ordering when `releaseDate` isn't set. */
	year?: number;
	/** ISO date, e.g. '2023-10-06'. Takes precedence over `year`. */
	releaseDate?: string;
	label?: string;
	/**
	 * Spotify link (track, album, or playlist). The play button reveals a
	 * player inside the poster; without this the button isn't shown.
	 * Spotify's iframe can't be restyled — it's cross-origin — so it stays
	 * hidden until asked for, and the poster does the visual work.
	 */
	spotify?: string;
}

// Metadata below was read from each track's public Spotify page.
export const albums: Album[] = [
	{
		title: 'Concerto for Piano and Orchestra No. 5 in F Minor, BWV 1056: II. Largo',
		artist: 'Johann Sebastian Bach, Glenn Gould, Columbia Symphony Orchestra',
		album: 'The Sound of Glenn Gould',
		year: 2015,
		spotify: 'https://open.spotify.com/track/5u43fvet3KMNgn10z94qvP',
	},
	{
		title: 'Spring 3',
		artist: 'Max Richter, Elena Urioste, Chineke! Orchestra',
		album: 'The New Four Seasons — Vivaldi Recomposed',
		year: 2022,
		spotify: 'https://open.spotify.com/track/3ebpIjpsSZhIJQNYV2pkKG',
	},
	{
		title: 'Moonlight Serenade',
		artist: 'The Eddie Higgins Trio',
		album: 'A Lovely Way to Spend an Evening',
		year: 2008,
		spotify: 'https://open.spotify.com/track/06wdxmKQej1W4HYsZipuhW',
	},
	{
		title: 'energy flow — rework',
		artist: 'U-zhaan, Ryuichi Sakamoto',
		album: 'energy flow (rework)',
		year: 2018,
		spotify: 'https://open.spotify.com/track/1gHCJtYWR8oO1WzT44oIst',
	},
	{
		title: 'Movement 6',
		artist: 'Floating Points, Pharoah Sanders, London Symphony Orchestra',
		album: 'Promises',
		year: 2021,
		spotify: 'https://open.spotify.com/track/5i0EqAX50KcKNgMDMHZndM',
	},
	{
		title: '1979',
		artist: 'The Smashing Pumpkins',
		album: 'Rotten Apples — Greatest Hits',
		year: 2001,
		spotify: 'https://open.spotify.com/track/3h5zik31hTTat9jmpCZZNC',
	},
	{
		title: 'Drone Logic',
		artist: 'Daniel Avery',
		album: 'Drone Logic',
		year: 2013,
		spotify: 'https://open.spotify.com/track/7JRN5xOUIrnI4crUMOt6X4',
	},
	{
		title: 'Dream 1 (before the wind blows it all away) — Pt. 8',
		artist: 'Max Richter',
		album: 'Sleep',
		year: 2015,
		spotify: 'https://open.spotify.com/track/1A8qD0Ygjzsby5OmXh1PTa',
	},
];
