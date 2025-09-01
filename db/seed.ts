import { Anime, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Anime).values([
		{
			id: 1,
			anilistId: 171627,
			title: "Chainsaw Man – The Movie: Reze Arc",
			description:
				"Theatrical follow-up to <i>Chainsaw Man</i>.<br><br>\n" +
				"Denji became “Chainsaw Man”, a boy with a devil’s heart, and is now part of Special Division 4’s devil hunters. After a date with Makima, the woman of his dreams, Denji takes shelter from the rain. There he meets Reze, a girl who works in a café.<br><br>\n" +
				"\n" +
				"(Source: MAPPA CHANNEL)\n" +
				"\n",
			releaseDate: new Date("2025-09-19T00:00:00.000Z"),
			coverImage:
				"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx171627-smzCQpAP6UQE.jpg",
			anilistUrl: "https://anilist.co/anime/171627",
		},
	]);
}
