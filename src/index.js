/**
 * Tokens de identidade visual do Dita — fonte única pra dita_web (Stitches) e dita_mobile (React
 * Native). Valores puros (sem CSS embutido) porque os dois mundos têm modelos de unidade
 * diferentes: espaçamento/raio/tamanho de fonte são números (cada app decide 'px' vs number cru);
 * cores são hex resolvido (não a escala crua do Radix — components do dita_web que usam passos
 * crus tipo $sand4 continuam importando @radix-ui/colors direto, não duplicado aqui).
 *
 * Paleta extraída por amostragem de pixel real de icon.png/logo.png (não estimada no olho — ver
 * a análise de harmonia publicada durante o desenho desta versão). Ink/indigo/azul do ícone são
 * um hue só (211°-225°) esticado do quase-preto ao vívido; o mint do "i" de Dita mora a 60° dali,
 * ainda no lado frio da roda. Mapeado pras escalas Radix mais próximas (blue, jade/mint, slate)
 * em vez de usar os hex crus da logo direto — cor de logo é calibrada pra brilhar num ícone
 * escuro, não pra virar texto numa tela branca (mint vívido tem 1.4:1 de contraste em branco,
 * 13.8:1 em fundo escuro — por isso "accentGlow" é reservado pra superfícies escuras/voz, e o
 * "accent" do dia a dia usa jade, que mantém o mesmo matiz com contraste utilizável).
 *
 * Substitui a paleta laranja+sand provisória (escolhida antes de existir uma logo de verdade).
 */

const colors = {
  light: {
    white: '#ffffff',
    black: '#0a0e1a', // ink

    background: '#f9f9fb', // slate2
    surface: '#ffffff',
    surfaceHover: '#f0f0f3', // slate3
    overlay: 'rgba(10, 14, 26, 0.45)', // ink

    border: '#d9d9e0', // slate6
    borderStrong: '#b9bbc6', // slate8

    textPrimary: '#1c2024', // slate12
    textSecondary: '#60646c', // slate11
    textOnPrimary: '#ffffff',
    textDisabled: '#b9bbc6', // slate8

    primary: '#0090ff', // blue9 — mapeado do azul-elétrico do ícone (#1483fd)
    primaryHover: '#0588f0', // blue10
    primaryActive: '#0d74ce', // blue11
    primarySoft: '#e6f4fe', // blue3
    primarySoftText: '#0d74ce', // blue11
    primaryBorder: '#8ec8f6', // blue7

    // "Voz/IA" — mapeado do mint do pingo do "i". Em fundo claro, o mint vívido tem contraste
    // ruim (1.4:1) — accent/accentSoft/accentSoftText usam jade (mesmo matiz, 3.15:1, dá pra
    // usar como ícone/texto pequeno); accentGlow guarda o mint bruto da logo, só pra superfícies
    // já escuras por natureza (ver colors.dark.accentGlow e o uso em componentes tipo "IA
    // ouvindo").
    accent: '#29a383', // jade9
    accentHover: '#208368', // jade11 (usado como estado :hover/:active, mais escuro em fundo claro)
    accentSoft: '#e6f7ed', // jade3
    accentSoftText: '#208368', // jade11
    accentGlow: '#2cf6c2', // mint bruto da logo — reservado pra fundo escuro

    success: '#30a46c', // green9
    successSoft: '#e6f6eb', // green3
    successSoftText: '#218358', // green11

    warning: '#ffc53d', // amber9
    warningSoft: '#fff7c2', // amber3
    warningSoftText: '#ab6400', // amber11

    danger: '#e5484d', // red9
    dangerHover: '#dc3e42', // red10
    dangerSoft: '#feebec', // red3
    dangerSoftText: '#ce2c31', // red11
  },
  // Não é mais placeholder: ink/indigo são a cor real de fundo do ícone, não um palpite. Passos
  // "Dark" vêm das escalas Dark oficiais do Radix (@radix-ui/colors/*-dark.css) — calibradas pra
  // contraste em fundo escuro, não é só a versão light escurecida.
  dark: {
    white: '#ffffff',
    black: '#0a0e1a',

    background: '#0a0e1a', // ink — mesmo tom do fundo do ícone
    surface: '#11162a',
    surfaceHover: '#161c34',
    overlay: 'rgba(0, 0, 0, 0.6)',

    border: '#262e4d',
    borderStrong: '#333c66',

    textPrimary: '#f3f5fa',
    textSecondary: '#a3acc4',
    textOnPrimary: '#ffffff',
    textDisabled: '#5c657f',

    primary: '#0090ff', // blueDark9
    primaryHover: '#3b9eff', // blueDark10 — mais claro no hover (fundo escuro, inverso do light)
    primaryActive: '#70b8ff', // blueDark11
    primarySoft: '#0d2847', // blueDark3
    primarySoftText: '#70b8ff', // blueDark11
    primaryBorder: '#205d9e', // blueDark7

    accent: '#29a383', // jadeDark9
    accentHover: '#1fd8a4', // jadeDark11 — mais claro no hover
    accentSoft: '#0f2e22', // jadeDark3
    accentSoftText: '#1fd8a4', // jadeDark11
    accentGlow: '#2cf6c2', // mesmo mint bruto — este é o habitat natural dele

    success: '#30a46c', // greenDark9
    successSoft: '#132d21', // greenDark3
    successSoftText: '#3dd68c', // greenDark11

    warning: '#ffc53d', // amberDark9
    warningSoft: '#302008', // amberDark3
    warningSoftText: '#ffca16', // amberDark11

    danger: '#e5484d', // redDark9
    dangerHover: '#ec5d5e', // redDark10
    dangerSoft: '#3b1219', // redDark3
    dangerSoftText: '#ff9592', // redDark11
  },
}

// Unitless — dita_web anexa 'px' ao montar o tema do Stitches, dita_mobile usa o number cru.
const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 7: 32, 8: 40, 9: 56, 10: 72 }

const radii = { 1: 6, 2: 10, 3: 16, round: 999 }

const fontSizes = { 1: 12, 2: 13, 3: 14, 4: 16, 5: 18, 6: 22, 7: 28, 8: 36 }

// String, não number — é o único formato que CSS (Stitches) e React Native (TextStyle.fontWeight)
// aceitam os dois.
const fontWeights = { regular: '400', medium: '500', semibold: '600', bold: '700' }

// Multiplicador unitless (semântica CSS) — RN não tem o conceito de line-height relativo, quem
// usar isso lá multiplica pelo fontSize na hora de montar o style (lineHeight: fontSize * ratio).
const lineHeights = { tight: 1.2, normal: 1.5, relaxed: 1.7 }

// Só faz sentido em CSS (box-shadow) — RN modela sombra com elevation/shadowOffset/shadowRadius/
// shadowOpacity separados, sem equivalente direto a uma string única. Base de cor = ink.
const shadows = {
  sm: '0 1px 2px rgba(10, 14, 26, 0.06)',
  md: '0 4px 16px rgba(10, 14, 26, 0.08)',
  lg: '0 16px 40px rgba(10, 14, 26, 0.16)',
}

// Number puro — RN aceita zIndex numérico direto, igual CSS.
const zIndices = { header: 100, overlay: 900, modal: 1000, toast: 1100 }

// Nome puro da fonte — dita_web monta a pilha de fallback CSS (`"${fontFamily}", system-ui, ...`)
// e dita_mobile monta seu próprio Platform.select em cima disso; nenhum dos dois guarda a
// pilha/seleção de plataforma aqui, isso é decisão de cada app.
const fontFamily = 'Plus Jakarta Sans'

module.exports = { colors, space, radii, fontSizes, fontWeights, lineHeights, shadows, zIndices, fontFamily }
