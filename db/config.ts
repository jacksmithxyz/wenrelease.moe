import { defineDb, defineTable, column } from 'astro:db';

const Anime = defineTable({
  columns: {
    id: column.number(),
    anilistId: column.number(),
    title: column.text(),
    description: column.text(),
    releaseDate: column.date(),
    coverImage: column.text(),
    anilistUrl: column.text(),
    streamingInfo: column.json()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Anime }
});
