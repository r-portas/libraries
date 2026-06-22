# CLAUDE.md

- This design system is built ontop of Mantine, see here for the docs: https://mantine.dev/llms.txt
- The goal is to leverage Mantine, with this Design System providing a set of pre-built components ontop of what Mantine provides.
- Use the "CSF Next" format for writing Storybook stories, see here for the docs: https://storybook.js.org/docs/api/csf/csf-next.md
- When writing a story for a Mantine polymorphic component (e.g. `Button`), cast it to `ComponentType<TheProps>` in `preview.meta({ component })`, e.g. `component: Button as ComponentType<ButtonProps>` to prevent TypeScript errors.
