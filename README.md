## Architecture du projet

```
app/
├── (admin)/
└── (app)/
    ├── layout.tsx
    ├── UserContext.tsx
    │
    ├── (auth)/                          # non fourni
    ├── (index)/                         # non fourni
    ├── api/                             # non fourni pour le moment
    │
    ├── card/
    │   └── [slug]/
    │       ├── CardClient.tsx           # Gestion des tabs + pré-fetch des données
    │       ├── page.tsx                 # Page principale
    │       └── tabs/
    │           ├── CardContent.tsx      # Tab : Contenu de la fiche
    │           └── CardCourse.tsx       # Tab : Cours associé
    │
    ├── cards/                           # non fourni
    ├── challenge/                       # non fourni
    │
    ├── courses/
    │   └── _components/
    │       ├── course.css
    │       └── Course.tsx               # Composant d'affichage d'un cours
    │
    ├── explore/                         # non fourni
    ├── home/                            # non fourni
    ├── lib/                             # non fourni
    ├── onboarding/                      # non fourni
    ├── settings/                        # non fourni
    ├── shop/                            # non fourni
    ├── verify-email/                    # non fourni
    └── _components/                     # non fourni
```