import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createFont, createTokens } from "@tamagui/core";

const headingFont = createFont({
  family: "Arial",
  size: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 22,
    6: 24,
  },
  lineHeight: {
    1: 20,
    2: 22,
    3: 24,
    4: 26,
    5: 28,
    6: 30,
  },
  weight: {
    4: "300",
    6: "600",
  },
});

const bodyFont = createFont({
  family: "Arial",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
  },
  lineHeight: {
    1: 18,
    2: 20,
    3: 22,
    4: 24,
  },
  weight: {
    4: "400",
  },
});

const config = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: createTokens({
    ...tokens,
    color: {
      ...tokens.color,
    },
  }),
  themes,
  shorthands,
});

type AppConfig = typeof config;

export type { AppConfig };
export default config;
