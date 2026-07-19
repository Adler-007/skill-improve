import { categoryDefinitions } from "./categories";
import { notes } from "./notes";
import type { CategoryStats, Note, TagStats } from "./types";

const byUpdatedDesc = (a: Note, b: Note) =>
  b.updatedAt.localeCompare(a.updatedAt) || b.createdAt.localeCompare(a.createdAt);

export const sortedNotes = [...notes].sort(byUpdatedDesc);

export const featuredNotes = sortedNotes.filter((note) => note.featured);

export const recentNotes = sortedNotes.slice(0, 4);

export const totalNoteCount = notes.length;

export const totalCategoryCount = categoryDefinitions.length;

export const categoriesWithStats: CategoryStats[] = categoryDefinitions.map((category) => {
  const categoryNotes = notes.filter((note) => note.category === category.name);
  const tagSet = new Set(categoryNotes.flatMap((note) => note.tags));
  const updatedAt = categoryNotes
    .map((note) => note.updatedAt)
    .sort((a, b) => b.localeCompare(a))[0] ?? null;

  return {
    ...category,
    count: categoryNotes.length,
    updatedAt,
    tags: [...tagSet].slice(0, 5)
  };
});

export const tagStats: TagStats[] = [...new Set(notes.flatMap((note) => note.tags))]
  .map((tag) => {
    const taggedNotes = notes.filter((note) => note.tags.includes(tag));
    const categories = [...new Set(taggedNotes.map((note) => note.category))];
    const updatedAt = taggedNotes
      .map((note) => note.updatedAt)
      .sort((a, b) => b.localeCompare(a))[0];

    return {
      name: tag,
      count: taggedNotes.length,
      categories,
      updatedAt
    };
  })
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "zh-Hans-CN"));

export const getNoteById = (id: string) => notes.find((note) => note.id === id);

export const getNotesByCategory = (categoryName: string) =>
  sortedNotes.filter((note) => note.category === categoryName);

export const getNotesByTag = (tagName: string) =>
  sortedNotes.filter((note) => note.tags.includes(tagName));

export const getAdjacentNotes = (id: string) => {
  const index = sortedNotes.findIndex((note) => note.id === id);

  return {
    previous: index > 0 ? sortedNotes[index - 1] : null,
    next: index >= 0 && index < sortedNotes.length - 1 ? sortedNotes[index + 1] : null
  };
};

export const getRelatedNotes = (target: Note, limit = 3) =>
  sortedNotes
    .filter((note) => note.id !== target.id)
    .map((note) => {
      const sameCategoryScore = note.category === target.category ? 3 : 0;
      const sharedTagScore = note.tags.filter((tag) => target.tags.includes(tag)).length;

      return {
        note,
        score: sameCategoryScore + sharedTagScore
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || byUpdatedDesc(a.note, b.note))
    .slice(0, limit)
    .map((item) => item.note);
