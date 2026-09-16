# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/). Versionamento semântico:
**major** = campo removido/renomeado ou tipo incompatível; **minor** = campo novo (aditivo);
**patch** = valor de cor/número ajustado sem mudar a forma.

## [0.2.0] - 2026-09-15

Troca de identidade: laranja+sand (paleta provisória, escolhida antes de existir uma logo de
verdade) dá lugar à paleta extraída por amostragem de pixel real de `icon.png`/`logo.png` — ver a
análise de harmonia feita junto com essa mudança. Ink/indigo/azul do ícone são um hue só
(H 211°–225°) esticado do quase-preto ao vívido; mapeado pra escala `blue` do Radix (`primary`,
antes `orange`). O mint do pingo do "i" (H 165°, 60° do azul) mapeia pra `jade`
(`accent`/`accentSoft`/`accentSoftText`, novo — contraste utilizável em fundo claro) mais um
`accentGlow` novo (o mint bruto da logo, `#2cf6c2` — 1.4:1 de contraste em branco mas 13.8:1 em
fundo escuro, reservado pra superfícies já escuras por natureza, tipo indicador de voz/IA). O
neutro troca de `sand` (quente, combinava com o laranja) pra `slate` (frio, combina com o ink).
`colors.dark` deixa de ser placeholder — agora usa ink/indigo de verdade como base, com as escalas
Dark oficiais do Radix pro resto (`blueDark`, `jadeDark`, `greenDark`, `amberDark`, `redDark`).

Campos novos (aditivo): `accent`, `accentHover`, `accentSoft`, `accentSoftText`, `accentGlow` em
`colors.light`/`colors.dark`. Nenhum campo removido ou renomeado — só valores de cor trocados
(`primary*`, neutros, `black`, `overlay`, `shadows`) e os cinco novos.

## [0.1.0] - 2026-09-15

Primeira versão. Extraído de `dita_web/src/styles/stitches.config.ts` (fonte original) — os
valores de `colors.light` são idênticos aos resolvidos lá (conferidos direto contra
`@radix-ui/colors` instalado, não copiados de comentário). `colors.dark` é o placeholder que já
existia em `dita_mobile/constants/theme.ts` (Dita não tem tema escuro desenhado de verdade ainda);
web nunca teve nenhum tema escuro, nem placeholder.

Duas divergências que existiam entre as cópias manuais dos dois apps, resolvidas nesta extração:
- `dangerHover` (`red10`, `#dc3e42`) existia no web e nunca tinha sido portado pro mobile —
  incluído aqui.
- `space` do web ia até `10` (`72px`); o mobile parava em `9` (`56`) — mantido até `10`.
