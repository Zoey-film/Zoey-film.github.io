// Albums shown on /playlist, rendered as posters.
//
// For each album: drop the cover image into src/assets/albums/ and add an
// entry here whose `cover` matches the filename. The colour bar under the
// artwork is extracted from the cover automatically — nothing to pick.
//
//   {
//     title: 'Ghosts',
//     artist: 'Hania Rani',
//     cover: 'ghosts.jpg',
//     tracks: ['Oltre Terra', 'Hello', 'Don\'t Break My Heart'],
//     releaseDate: '2023-10-06',
//     label: 'Gondwana Records',
//     link: 'https://open.spotify.com/album/…',
//   },

export interface Album {
	title: string;
	artist: string;
	/**
	 * Filename inside src/assets/albums/. Optional — without it the poster
	 * renders with a plain tile and a neutral colour bar.
	 */
	cover?: string;
	tracks: string[];
	/** ISO date, e.g. '2023-10-06'. Also controls order (newest first). */
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

export const albums: Album[] = [
	{
		// NOTE: title/artist/tracks below were read off a truncated screenshot of
		// the Spotify player — please correct them. The `spotify` link is exact,
		// and the player itself always shows the authoritative metadata.
		title: 'The Sound Of',
		artist: 'Johann Sebastian Bach',
		tracks: ['Concerto for Keyboard'],
		spotify: 'https://open.spotify.com/track/5u43fvet3KMNgn10z94qvP',
	},
];
