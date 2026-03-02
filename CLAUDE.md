# Projet Video Presentation - Contexte Claude Code

## Vue d'ensemble
Projet de création de vidéos avec **Remotion** (React pour la vidéo programmatique).

## Structure du projet

```
videopresentation/
├── CLAUDE.md                    # Ce fichier - contexte pour Claude Code
├── my-video/                    # Projet Remotion principal
│   ├── src/
│   │   ├── Root.tsx            # Point d'entrée - définit les compositions
│   │   ├── Composition.tsx     # Composition "VISION 360" avec animations
│   │   └── index.css           # Styles TailwindCSS v4
│   ├── package.json            # Dépendances (remotion, react, tailwind)
│   └── remotion.config.ts      # Config Remotion
├── .agents/skills/remotion-best-practices/  # Skill Remotion installé
│   ├── SKILL.md                # Index des règles
│   └── rules/                  # Bonnes pratiques par sujet
│       ├── animations.md       # Animations de base
│       ├── text-animations.md  # Animations de texte
│       ├── transitions.md      # Transitions entre scènes
│       ├── audio.md            # Audio et musique
│       ├── voiceover.md        # TTS avec ElevenLabs
│       ├── subtitles.md        # Sous-titres
│       ├── 3d.md               # React Three Fiber
│       └── ...                 # Autres règles
└── .claude/skills/             # Symlink vers skills
```

## Composition actuelle

**"VISION 360"** - Une intro animée avec:
- Background avec zoom progressif et gradient
- Titre "VISION 360" avec animation spring (scale, blur, opacity)
- Sous-titre avec effet machine à écrire
- Ligne décorative animée
- Durée: 150 frames @ 30fps = 5 secondes
- Résolution: 1280x720

## Commandes

```bash
cd my-video

# Lancer le studio de preview (localhost:3000)
npm run dev

# Rendre la vidéo en MP4
npx remotion render MyComp out/video.mp4

# Rendre un GIF
npx remotion render MyComp out/video.gif

# Mettre à jour Remotion
npm run upgrade
```

## Stack technique

- **Remotion 4.0.431** - Framework vidéo React
- **React 19** - UI
- **TailwindCSS v4** - Styles
- **TypeScript** - Typage

## Skill Remotion

Le skill `remotion-best-practices` est installé. Pour l'utiliser, lire les fichiers dans `.agents/skills/remotion-best-practices/rules/` selon le besoin:

| Besoin | Fichier à lire |
|--------|----------------|
| Animations | rules/animations.md |
| Texte animé | rules/text-animations.md |
| Transitions | rules/transitions.md |
| Audio/Son | rules/audio.md |
| Voix off IA | rules/voiceover.md |
| Sous-titres | rules/subtitles.md |
| 3D | rules/3d.md |
| Graphiques | rules/charts.md |
| Cartes | rules/maps.md |

## Prochaines étapes possibles

1. Ajouter de nouvelles scènes/compositions
2. Intégrer de l'audio ou voiceover
3. Ajouter des sous-titres
4. Créer des transitions entre scènes
5. Rendre la vidéo finale

## Notes

- Le projet utilise les hooks Remotion: `useCurrentFrame()`, `useVideoConfig()`
- Animations avec `interpolate()` et `spring()`
- TailwindCSS v4 avec classes utilitaires
