import type { Note } from "../types";
import { systemUnderstandingAbilityNotes } from "./system-understanding-ability";
import { fullStackThinkingNotes } from "./full-stack-thinking";
import { agentDevelopmentNotes } from "./agent-development";
import { aiToolsApplyNotes } from "./ai-tools-apply";
import { projectReviewNotes } from "./project-review";
import { readingNotes } from "./reading-notes";
import { methodSummaryNotes } from "./method-summary";

export const notes: Note[] = [
  ...systemUnderstandingAbilityNotes,
  ...fullStackThinkingNotes,
  ...agentDevelopmentNotes,
  ...aiToolsApplyNotes,
  ...projectReviewNotes,
  ...readingNotes,
  ...methodSummaryNotes,
];
