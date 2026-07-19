<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  code: string;
  language?: string;
}>();

type TokenPattern = {
  className: string;
  regex: RegExp;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const patternSets: Record<string, TokenPattern[]> = {
  ts: [
    { className: "token-comment", regex: /\/\/.*/y },
    { className: "token-string", regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/y },
    {
      className: "token-keyword",
      regex:
        /\b(?:as|async|await|break|case|catch|class|const|continue|default|else|export|extends|false|for|from|function|if|import|interface|let|new|null|return|switch|true|try|type|undefined|var|while)\b/y
    },
    { className: "token-number", regex: /\b\d+(?:\.\d+)?\b/y },
    { className: "token-function", regex: /\b[A-Za-z_$][\w$]*(?=\()/y },
    { className: "token-punctuation", regex: /[{}()[\].,:;]/y }
  ],
  css: [
    { className: "token-comment", regex: /\/\*.*?\*\//y },
    { className: "token-string", regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    { className: "token-color", regex: /#[0-9a-fA-F]{3,8}\b/y },
    { className: "token-number", regex: /\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms)?\b/y },
    { className: "token-property", regex: /--?[\w-]+(?=\s*:)/y },
    { className: "token-punctuation", regex: /[{}():;,]/y }
  ],
  html: [
    { className: "token-comment", regex: /<!--.*?-->/y },
    { className: "token-tag", regex: /<\/?[A-Za-z][\w-]*/y },
    { className: "token-attr", regex: /\s[\w:@-]+(?==)/y },
    { className: "token-string", regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    { className: "token-punctuation", regex: /\/?>|=/y }
  ],
  json: [
    { className: "token-property", regex: /"(?:\\.|[^"\\])*"(?=\s*:)/y },
    { className: "token-string", regex: /"(?:\\.|[^"\\])*"/y },
    { className: "token-keyword", regex: /\b(?:true|false|null)\b/y },
    { className: "token-number", regex: /-?\b\d+(?:\.\d+)?\b/y },
    { className: "token-punctuation", regex: /[{}[\]:,]/y }
  ],
  shell: [
    { className: "token-comment", regex: /#.*/y },
    { className: "token-string", regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    { className: "token-keyword", regex: /\b(?:cd|cp|echo|export|git|mkdir|npm|pnpm|rm|yarn)\b/y },
    { className: "token-attr", regex: /--?[\w-]+/y }
  ],
  text: [
    { className: "token-comment", regex: /^\s*[└├│─]+.*/y },
    { className: "token-string", regex: /[A-Za-z0-9_-]+\.(?:css|html|js|json|md|ts|vue)\b/y },
    { className: "token-keyword", regex: /\b(?:components|data|router|src|styles|views)\b/y },
    { className: "token-punctuation", regex: /[/.]/y }
  ]
};

patternSets.js = patternSets.ts;
patternSets.javascript = patternSets.ts;
patternSets.typescript = patternSets.ts;
patternSets.vue = patternSets.html;
patternSets.bash = patternSets.shell;

const tokenizeLine = (line: string, patterns: TokenPattern[]) => {
  let position = 0;
  let output = "";

  while (position < line.length) {
    const match = patterns
      .map((pattern) => {
        pattern.regex.lastIndex = position;
        return {
          pattern,
          match: pattern.regex.exec(line)
        };
      })
      .find((candidate) => candidate.match?.index === position);

    if (match?.match?.[0]) {
      output += `<span class="${match.pattern.className}">${escapeHtml(match.match[0])}</span>`;
      position += match.match[0].length;
      continue;
    }

    output += escapeHtml(line[position]);
    position += 1;
  }

  return output || " ";
};

const normalizedLanguage = computed(() => props.language?.toLowerCase() || "text");

const highlightedLines = computed(() => {
  const patterns = patternSets[normalizedLanguage.value] ?? patternSets.text;

  return props.code.split("\n").map((line) => tokenizeLine(line, patterns));
});
</script>

<template>
  <figure class="code-block">
    <figcaption class="code-block-caption">{{ normalizedLanguage }}</figcaption>
    <pre><code :class="`language-${normalizedLanguage}`"><span
      v-for="(line, index) in highlightedLines"
      :key="index"
      class="code-line"
    ><span class="code-line-number">{{ index + 1 }}</span><span
      class="code-line-content"
      v-html="line"
    ></span></span></code></pre>
  </figure>
</template>
