# @dita/design-tokens

Fonte única dos tokens de identidade visual do Dita (cores, espaçamento, tipografia, raios,
sombras, z-index) — consumida por `dita_web` (monta o tema do Stitches) e `dita_mobile` (monta
`constants/theme.ts`). Antes desta separação, `dita_mobile/constants/theme.ts` era uma cópia
manual em hex de `dita_web/src/styles/stitches.config.ts`, mantida em sincronia à mão (e já fora
de sincronia em alguns pontos — ver CHANGELOG).

## O que está aqui (e o que não está)

Valores puros em `src/index.js` (CommonJS puro, sem build step — resolve igual em Vite e Metro),
tipados em `src/index.d.ts` ao lado. Deliberadamente **não** inclui:

- **A escala crua do Radix** (`sand1`...`sand12`, etc.) — vários componentes do `dita_web` usam
  passos crus da escala diretamente (ex. `$sand4` num fundo), não só os nomes semânticos. Cada app
  que precisar disso continua dependendo de `@radix-ui/colors` diretamente.
- **Componentes** (Button, Badge, etc.) — cada app implementa os seus em cima destes tokens.
  Unificar isso exigiria trocar Stitches (web) e RN puro (mobile) por algo tipo Tamagui — fora de
  escopo por enquanto.
- **Unidade** — espaçamento/raio/tamanho de fonte são números puros. CSS (Stitches) quer string
  com `px`; React Native quer number cru. Cada app decide a unidade na borda, não aqui.

## Uso

```ts
// dita_web/src/styles/stitches.config.ts
import { colors, space, radii, fontSizes, fontWeights, lineHeights, shadows, zIndices, fontFamily } from '@dita/design-tokens'
import { sand, orange, green, red, amber } from '@radix-ui/colors'

const px = (obj: Record<string, number>) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, `${v}px`]))

createStitches({
  theme: {
    colors: { ...sand, ...orange, ...green, ...red, ...amber, ...colors.light },
    space: px(space),
    radii: px(radii),
    fontSizes: px(fontSizes),
    fontWeights,
    lineHeights,
    shadows,
    zIndices,
    fonts: { sans: `"${fontFamily}", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` },
  },
})
```

```ts
// dita_mobile/constants/theme.ts
import { colors, space, radii, fontSizes, fontWeights, fontFamily } from '@dita/design-tokens'

export const Colors = colors // { light, dark }
export const Spacing = space
export const Radii = radii
export const FontSizes = fontSizes
export const FontWeights = fontWeights
```

## Versionamento e workflow

Sem build step, sem registry — cada app instala via `github:ma-axis/dita-design-tokens#vX.Y.Z`
(mesmo modelo do `dita-api-contract`). Semver: **major** = campo removido/renomeado ou tipo
incompatível; **minor** = campo novo; **patch** = valor de cor/número ajustado sem mudar a forma.

Fluxo pra mudar um token:
1. Editar `src/index.js` (e `src/index.d.ts` se mudou a forma).
2. Bump de versão em `package.json` + entrada no `CHANGELOG.md`.
3. Commit, tag `vX.Y.Z`, push.
4. Em cada app: `npm install github:ma-axis/dita-design-tokens#vX.Y.Z --allow-git=all` (a flag só é
   necessária neste ambiente de sandbox — não deve ser necessária no ambiente real do usuário).
