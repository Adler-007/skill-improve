export interface NoteMeta {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  route: string;
  readingTime: string;
}

export type NoteContentBlock = {
  type: "heading" | "paragraph" | "list" | "code" | "quote" | "table";
  id?: string;
  level?: 2 | 3;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  language?: string;
  code?: string;
};

export interface Note extends NoteMeta {
  content: NoteContentBlock[];
}

export interface CategoryDefinition {
  name: string;
  summary: string;
  meta: string;
}

export interface CategoryStats extends CategoryDefinition {
  count: number;
  updatedAt: string | null;
  tags: string[];
}

export interface TagStats {
  name: string;
  count: number;
  categories: string[];
  updatedAt: string;
}
