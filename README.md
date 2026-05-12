## Structure du système de Cours

### Endpoint `/card`

```
/card
└── /[slug]
    ├── /(card_revise)        # Gestion de la révision (affichage)
    ├── /_components          # Composants essentiels à la fiche
    ├── /elements             # Composants éléments d'une fiche
    ├── /tabs
    │   ├── CardContent.tsx
    │   ├── CardCourse.tsx
    │   ├── CardFeedback.tsx
    │   ├── CardSettings.tsx
    │   └── CardStats.tsx
    ├── CardClient.tsx        # Gestion des tabs + pré-fetch des données
    ├── DragAndDrop.tsx       # Drag & drop des éléments
    └── page.tsx              # Page principale
```
	
