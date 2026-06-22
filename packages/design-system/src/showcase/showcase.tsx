import { Box, Stack, Table, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";

// #region Page scaffolding

/** Wraps a full showcase story with padding, max-width and vertical rhythm. */
export function ShowcasePage({ children }: { children: ReactNode }) {
  return (
    <Box p="xl" maw={1280} mx="auto">
      <Stack gap={48}>{children}</Stack>
    </Box>
  );
}

/** A titled block grouping related demos within a showcase page. */
export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Stack gap="md">
      <div>
        <Title order={3}>{title}</Title>
        {description ? (
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        ) : null}
      </div>
      {children}
    </Stack>
  );
}

// #endregion

// #region Matrix

interface MatrixProps<Row, Col> {
  /** Values rendered down the left-hand column. */
  rows: Row[];
  /** Values rendered across the header. */
  cols: Col[];
  /** Label for a row header cell. */
  rowLabel: (row: Row) => string;
  /** Label for a column header cell. */
  colLabel: (col: Col) => string;
  /** Renders the component for the intersection of a row and column. */
  children: (row: Row, col: Col) => ReactNode;
}

/**
 * Renders a labelled grid of a single component swept across two axes — e.g.
 * `variant` down the side and `color` across the top. The workhorse of the
 * matrix-style showcase stories: change the theme, glance at the grid.
 */
export function Matrix<Row, Col>({
  rows,
  cols,
  rowLabel,
  colLabel,
  children,
}: MatrixProps<Row, Col>) {
  return (
    <Table withRowBorders={false} verticalSpacing="md" horizontalSpacing="lg">
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          {cols.map((col) => (
            <Table.Th key={colLabel(col)}>
              <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                {colLabel(col)}
              </Text>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row) => (
          <Table.Tr key={rowLabel(row)}>
            <Table.Td>
              <Text size="sm" fw={500}>
                {rowLabel(row)}
              </Text>
            </Table.Td>
            {cols.map((col) => (
              <Table.Td key={colLabel(col)}>{children(row, col)}</Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

// #endregion
