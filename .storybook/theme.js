import { create } from '@storybook/theming';

import theme from '../src/config/theme'

export default create({
  base: 'light',

  colorPrimary: theme.colors.primary.default,
  colorSecondary: theme.colors.grayscale3],

  // UI
  appBg: theme.colors.white,
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.grayscale1],
  appBorderRadius: theme.radii[1],

  // Typography
  fontBase: theme.fonts.Montserrat,
  fontCode: 'monospace',

  // Text colors
  textColor: theme.colors.dark,

  // Toolbar default and active colors
  barTextColor: theme.colors.grayscale3],
  barSelectedColor: theme.colors.primary.default,
  barBg: theme.colors.white,

  // Form colors
  inputBg: theme.colors.white,
  inputBorder: theme.colors.grayscale0],
  inputTextColor: theme.colors.black,
  inputBorderRadius: theme.radii[1],

  brandTitle: 'Lesson Desk | Schoolbus',
  brandUrl: 'https://www.lessondesk.com/',
  brandImage: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjIzIDg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9z%0D%0AdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGgg%0D%0AaWQ9ImEiPjxwYXRoIGQ9Im0wIDBoMjIzdjg0aC0yMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBh%0D%0AdGg9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSIiPjxwYXRoIGQ9Im05%0D%0AOCAyNi44MiAxMS4yMTUgNS41OTMgMTQuODY3LTcuNDEzIDYuNTc1IDMuMjc5YS42MTUuNjE1IDAg%0D%0AMCAxIDAgMS4xbC0yMS4xNjMgMTAuNTU1YS42MjkuNjI5IDAgMCAxIC0uNTU4IDBsLTEwLjkzNi01%0D%0ALjQ1M3YtNy42NnptLTEwLjY0IDEuMDggNS42NC0yLjl2N2wtNS42NC0yLjlhLjY3Ni42NzYgMCAw%0D%0AIDEgMC0xLjE5NXoiIGZpbGw9IiNmZmE0MDAiLz48ZyBmaWxsPSIjMzIzOTNhIj48cGF0aCBkPSJt%0D%0AODEuNTg1IDEzLjk2IDI3LjYtMTMuN2EuNjE0LjYxNCAwIDAgMSAuNTQ4IDBsMjcuNiAxMy43YS42%0D%0ALjYgMCAwIDEgMCAxLjA3N2wtMjcuNiAxMy43YS42MTQuNjE0IDAgMCAxIC0uNTQ4IDBsLTEwLjM2%0D%0AMS01LjE0N3YxNi43NjJhMS4zMyAxLjMzIDAgMCAxIC0xLjIyNCAxLjM0OCAxLjI4NCAxLjI4NCAw%0D%0AIDAgMSAtMS4zNjEtMS4yNzN2LTE3LjQ5YS40NzkuNDc5IDAgMCAxIC4yNjktLjQzbDEzLjQ2OC02%0D%0ALjY4MWExLjMxNSAxLjMxNSAwIDAgMCAuNjY3LTEuNjgyIDEuMyAxLjMgMCAwIDAgLTEuNzY0LS42%0D%0AMjhsLTE1LjE3OSA3LjUzMi0xMi4xMTQtNi4wMTJhLjYuNiAwIDAgMSAwLTEuMDc3Ii8+PHBhdGgg%0D%0AZD0ibTkgNzd2LTIxaDQuODF2MTYuODI0aDkuMTl2NC4xNzZ6bTMyLjY1OC0yMXY0LjE3NmgtMTAu%0D%0AODExdjQuMzI0aDkuNzI0djRoLTkuNzI0djQuMzU2aDExLjE1M3Y0LjE0NGgtMTZ2LTIxeiIvPjxw%0D%0AYXRoIGQ9Im01MC42ODUgNjAuNzQxYTEuNzA2IDEuNzA2IDAgMCAwIC0uNjczIDEuNDA4IDEuNTc4%0D%0AIDEuNTc4IDAgMCAwIC44MjMgMS4zOTMgMTUuMzg3IDE1LjM4NyAwIDAgMCAzLjggMS4yMiAxMC45%0D%0AIDEwLjkgMCAwIDEgNC42MjEgMi4xMTIgNS4xMSA1LjExIDAgMCAxIDEuNjQ0IDQuMTA4IDUuMzM5%0D%0AIDUuMzM5IDAgMCAxIC0yLjEwOCA0LjM4MSA4LjY0MyA4LjY0MyAwIDAgMSAtNS41NDggMS42OCAx%0D%0AMy4xMTcgMTMuMTE3IDAgMCAxIC04Ljk0NC0zLjUzM2wyLjc4MS0zLjI3NXEzLjM3OSAyLjg0NCA2%0D%0ALjI1MSAyLjg0NGEzLjM5MSAzLjM5MSAwIDAgMCAyLjAyLS41MzEgMS42ODUgMS42ODUgMCAwIDAg%0D%0ALjczMi0xLjQzNyAxLjY1NyAxLjY1NyAwIDAgMCAtLjc3OC0xLjQzNiAxMC40MTEgMTAuNDExIDAg%0D%0AMCAwIC0zLjA4LTEuMDc3IDEzLjcwNyAxMy43MDcgMCAwIDEgLTUuMzQtMi4xNjkgNS4wMjEgNS4w%0D%0AMjEgMCAwIDEgLTEuNjktNC4xOTQgNS4xMjMgNS4xMjMgMCAwIDEgMi4xMzktNC40MSA4Ljg1NCA4%0D%0ALjg1NCAwIDAgMSA1LjM0LTEuNTUxIDEzLjMxNyAxMy4zMTcgMCAwIDEgNC4xODcuNjkgMTEuMzQg%0D%0AMTEuMzQgMCAwIDEgMy42NDkgMS45NTNsLTIuMzYzIDMuMjc1YTkuNDQgOS40NCAwIDAgMCAtNS42%0D%0AMjMtMS45ODIgMi45IDIuOSAwIDAgMCAtMS44NC41MzF6Ii8+PHBhdGggZD0ibTY5LjUgNjAuNzQx%0D%0AYTEuNyAxLjcgMCAwIDAgLS42NzQgMS40MDggMS41NzggMS41NzggMCAwIDAgLjgyMyAxLjM5MyAx%0D%0ANS4zODcgMTUuMzg3IDAgMCAwIDMuOCAxLjIyIDEwLjkgMTAuOSAwIDAgMSA0LjYyMSAyLjExMiA1%0D%0ALjEwNyA1LjEwNyAwIDAgMSAxLjY0NSA0LjEwOCA1LjM0IDUuMzQgMCAwIDEgLTIuMTA5IDQuMzgx%0D%0AIDguNjQxIDguNjQxIDAgMCAxIC01LjU0OCAxLjY4IDEzLjExNyAxMy4xMTcgMCAwIDEgLTguOTQz%0D%0ALTMuNTMzbDIuNzg1LTMuMjc1cTMuMzc5IDIuODQ0IDYuMjUxIDIuODQ0YTMuMzg4IDMuMzg4IDAg%0D%0AMCAwIDIuMDItLjUzMSAxLjY4NiAxLjY4NiAwIDAgMCAuNzMzLTEuNDM3IDEuNjU3IDEuNjU3IDAg%0D%0AMCAwIC0uNzc4LTEuNDM2IDEwLjQzMiAxMC40MzIgMCAwIDAgLTMuMDg0LTEuMDc1IDEzLjcwNyAx%0D%0AMy43MDcgMCAwIDEgLTUuMzQtMi4xNjkgNS4wMiA1LjAyIDAgMCAxIC0xLjY4OS00LjE5NCA1LjEy%0D%0ANSA1LjEyNSAwIDAgMSAyLjEzOC00LjQxIDguODU2IDguODU2IDAgMCAxIDUuMzQtMS41NTEgMTMu%0D%0AMzEyIDEzLjMxMiAwIDAgMSA0LjE4Ny42OSAxMS4zMjkgMTEuMzI5IDAgMCAxIDMuNjQ5IDEuOTUz%0D%0AbC0yLjM2MyAzLjI3NWE5LjQzNSA5LjQzNSAwIDAgMCAtNS42MjMtMS45ODIgMi45IDIuOSAwIDAg%0D%0AMCAtMS44NC41MzEiLz48cGF0aCBkPSJtOTkuMDE3IDY3LjAxNWE2Ljg2IDYuODYgMCAwIDAgLTEu%0D%0AODgtNC44NiA2LjMxOSA2LjMxOSAwIDAgMCAtOS4yNDQgMCA3LjIgNy4yIDAgMCAwIDAgOS43MDUg%0D%0ANi4zNDkgNi4zNDkgMCAwIDAgOS4yNDQgMCA2LjgwOCA2LjgwOCAwIDAgMCAxLjg4LTQuODQ1em0x%0D%0ALjY2IDcuODMxYTEyLjE3OCAxMi4xNzggMCAwIDEgLTE2LjM1NSAwIDEwLjkyOCAxMC45MjggMCAw%0D%0AIDEgMC0xNS42OTIgMTIuMTgyIDEyLjE4MiAwIDAgMSAxNi4zNTggMCAxMC45MjggMTAuOTI4IDAg%0D%0AMCAxIDAgMTUuNjkybTIwLjcyLTE4Ljg0Nmg0LjZ2MjFoLTQuNmwtOS44LTEzLjE1OXYxMy4xNTlo%0D%0ALTQuNnYtMjFoNC4zbDEwLjEgMTMuNTJ6Ii8+PC9nPjxwYXRoIGQ9Im0xNDIuNTcxIDcxLjIzMmE2%0D%0ALjE2NSA2LjE2NSAwIDAgMCAxLjcyMy00LjcxNyA2LjMxOCA2LjMxOCAwIDAgMCAtMS43MjMtNC43%0D%0ANjFxLTEuNzI0LTEuNjY4LTUuMjktMS42NjhoLTIuNjA3djEyLjc2OGgyLjk2OGE2LjkyMyA2Ljky%0D%0AMyAwIDAgMCA0LjkzLTEuNjIybTMuNDI4LTEyLjQ4M2E5Ljg2IDkuODYgMCAwIDEgMyA3LjY0NiAx%0D%0AMC4zMzcgMTAuMzM3IDAgMCAxIC0yLjkyMiA3Ljc1MXEtMi45MjIgMi44NTQtOC45MTYgMi44NTRo%0D%0ALTcuMTYydi0yMWg3LjRxNS42IDAgOC42IDIuNzVtMjEuNjU4LTIuNzV2NC4xNzZoLTEwLjgxMnY0%0D%0ALjMyNGg5LjcyNXY0aC05LjcyNXY0LjM1NmgxMS4xNTR2NC4xNDRoLTE2di0yMXoiIGZpbGw9IiNm%0D%0AZmE0MDAiLz48cGF0aCBkPSJtMTc2LjY4NyA2MC43OTFhMS43MjkgMS43MjkgMCAwIDAgLS42NzQg%0D%0AMS40MjMgMS42IDEuNiAwIDAgMCAuODIzIDEuNDA4IDE1LjMgMTUuMyAwIDAgMCAzLjggMS4yMzMg%0D%0AMTAuODUxIDEwLjg1MSAwIDAgMSA0LjYyIDIuMTM0IDUuMTkxIDUuMTkxIDAgMCAxIDEuNjQ1IDQu%0D%0AMTUyIDUuNDEyIDUuNDEyIDAgMCAxIC0yLjEwOSA0LjQyNyA4LjU3MiA4LjU3MiAwIDAgMSAtNS41%0D%0ANDcgMS43IDEzLjA0MiAxMy4wNDIgMCAwIDEgLTguOTQ0LTMuNTcybDIuNzgyLTMuMzA5cTMuMzc4%0D%0AIDIuODc0IDYuMjUgMi44NzRhMy4zNTEgMy4zNTEgMCAwIDAgMi4wMi0uNTM3IDEuNzA5IDEuNzA5%0D%0AIDAgMCAwIC43MzMtMS40NTIgMS42NzUgMS42NzUgMCAwIDAgLS43NzgtMS40NSAxMC4yOTIgMTAu%0D%0AMjkyIDAgMCAwIC0zLjA4MS0xLjA5IDEzLjYxNiAxMy42MTYgMCAwIDEgLTUuMzQtMi4xOTEgNS4x%0D%0AIDUuMSAwIDAgMSAtMS42ODctNC4yNDEgNS4yIDUuMiAwIDAgMSAyLjEzOC00LjQ1NSA4Ljc4NSA4%0D%0ALjc4NSAwIDAgMSA1LjM0LTEuNTY4IDEzLjE5MiAxMy4xOTIgMCAwIDEgNC4xODguNyAxMS4yODkg%0D%0AMTEuMjg5IDAgMCAxIDMuNjQ4IDEuOTc0bC0yLjM2MiAzLjMxYTkuMzgxIDkuMzgxIDAgMCAwIC01%0D%0ALjYyNC0yIDIuODc4IDIuODc4IDAgMCAwIC0xLjg0MS41M3oiIGZpbGw9IiNmZmE0MDAiLz48cGF0%0D%0AaCBkPSJtMTkwIDU2aDQuODM1djguNjIzbDguMTgzLTguNjIzaDUuOTgybC04LjYxNyA5LjI4M3Ex%0D%0ALjExOCAxLjUgNC4xMjMgNS42IDIuMjQxIDMuMDY1IDQuNDk0IDYuMTE3aC01LjY0MWwtNi4zNTQt%0D%0AOC4yOTItMi4xNyAyLjM0M3Y1Ljk0OWgtNC44MzV6bTI5LjIwOS0xLjIwN2EuOTQyLjk0MiAwIDAg%0D%0AMCAuMjgzLS43NjcuODUxLjg1MSAwIDAgMCAtLjI5LS43MzkgMS44NDMgMS44NDMgMCAwIDAgLTEu%0D%0AMDIyLS4yMDdoLTEuMTQ3djEuOTQ4aDEuMTE5YTEuNzIgMS43MiAwIDAgMCAxLjA1Ny0uMjM1em0x%0D%0ALjIwOC0uNzZhMS41NjcgMS41NjcgMCAwIDEgLTEuMTc0IDEuNjg1bDEuNDM3IDEuOTQ4aC0xLjE2%0D%0AbC0xLjMtMS44MWgtMS4xODh2MS44MWgtLjk0di01LjRoMi4wMzFhMi44NzIgMi44NzIgMCAwIDEg%0D%0AMS43NjEuNDIgMS42MTUgMS42MTUgMCAwIDEgLjUzMiAxLjM0N20uNyA0LjA3NWE0LjQxOCA0LjQx%0D%0AOCAwIDAgMCAuMDE0LTYuMiA0LjM4NyA0LjM4NyAwIDAgMCAtNi4yMDkuMDA3IDQuNDQ2IDQuNDQ2%0D%0AIDAgMCAwIC0uMDE0IDYuMjA4IDQuMTU4IDQuMTU4IDAgMCAwIDMuMDkzIDEuMjgzIDQuMjA3IDQu%0D%0AMjA3IDAgMCAwIDMuMTE1LTEuM20uNDIxLTYuNjQ0YTQuOTg1IDQuOTg1IDAgMSAxIC0zLjUzNi0x%0D%0ALjQ2MiA0LjggNC44IDAgMCAxIDMuNTM2IDEuNDY0eiIgZmlsbD0iI2ZmYTQwMCIvPjwvZz48L3N2%0D%0AZz4=',
});
