// The /playlist page renders one poster for the whole playlist: a cover, a
// colour bar taken from it, and the track list below.
//
// To add a track: in Spotify, right-click → Share → Copy Song Link, and paste
// it as `spotify`. Tracking parameters are stripped automatically. Clicking a
// track on the page loads it into the player at the foot of the poster.

export interface Track {
	title: string;
	artist: string;
	spotify: string;
}

export const playlist = {
	title: 'On Rotation',
	subtitle: 'Zoey Zhang',
	/**
	 * Cover filename inside src/assets/albums/. Currently a placeholder —
	 * swap in real artwork and the colour bar re-derives from it.
	 */
	cover: 'placeholder.jpg',
	year: 2026,
};

// Metadata below was read from each track's public Spotify page.
export const tracks: Track[] = [
	{
		title: 'Concerto for Piano and Orchestra No. 5 in F Minor, BWV 1056: II. Largo',
		artist: 'Glenn Gould, Columbia Symphony Orchestra',
		spotify: 'https://open.spotify.com/track/5u43fvet3KMNgn10z94qvP',
	},
	{
		title: 'Spring 3',
		artist: 'Max Richter, Elena Urioste, Chineke! Orchestra',
		spotify: 'https://open.spotify.com/track/3ebpIjpsSZhIJQNYV2pkKG',
	},
	{
		title: 'Moonlight Serenade',
		artist: 'The Eddie Higgins Trio',
		spotify: 'https://open.spotify.com/track/06wdxmKQej1W4HYsZipuhW',
	},
	{
		title: 'energy flow — rework',
		artist: 'U-zhaan, Ryuichi Sakamoto',
		spotify: 'https://open.spotify.com/track/1gHCJtYWR8oO1WzT44oIst',
	},
	{
		title: 'Movement 6',
		artist: 'Floating Points, Pharoah Sanders, London Symphony Orchestra',
		spotify: 'https://open.spotify.com/track/5i0EqAX50KcKNgMDMHZndM',
	},
	{
		title: '1979',
		artist: 'The Smashing Pumpkins',
		spotify: 'https://open.spotify.com/track/3h5zik31hTTat9jmpCZZNC',
	},
	{
		title: 'Bluesen',
		artist: 'Svaneborg Kardyb',
		spotify: 'https://open.spotify.com/track/4q4emoW3IX2eHhY3sVkudj',
	},
	{
		title: 'Dream 1 (before the wind blows it all away) — Pt. 8',
		artist: 'Max Richter',
		spotify: 'https://open.spotify.com/track/1A8qD0Ygjzsby5OmXh1PTa',
	},
];
