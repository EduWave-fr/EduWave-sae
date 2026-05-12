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

Suite à une réflexion concernant le fonctionnement des cours, je suis en train de réflechir à une nouvelle organisation en route et non plus en Components.

Une fiche de révision doit pouvoir contenir plusieurs cours. L'utilisateur doit pouvoir selectionner le cours qu'il souhaite afficher. Pour cela, il serait plus interessant de garder un système de routes (référencement, bonne séparation des récupérations des données).

Cela donnerait : 

```
/card
└── /[slug]
    ├── /(card_revise)        # Gestion de la révision (affichage)
    ├── /_components          # Composants essentiels à la fiche
    │   ├── /elements 		  # Composants éléments d'une fiche
    ├── /content
    │   ├── page.tsx
    ├── /course.tsx
    │   ├── page.tsx
    ├── /feedbacks
    │   ├── page.tsx
    ├── /settings
    │   ├── page.tsx
    ├── /stats
    │   ├── page.tsx
    ├── CardClient.tsx        # Gestion des tabs + pré-fetch des données
    ├── DragAndDrop.tsx       # Drag & drop des éléments
    └── page.tsx              # Page principale
```
	
