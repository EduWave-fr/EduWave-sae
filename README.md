La page d'affichage d'une fiche de révision : Endpoint /card se compose des routes et components suivants : 

/card
   /[slug]
	/(card_revise) //code permettant de gérer la révision d'un utilisateur (affichage)
	/_components //composants essentiels à la fiche
	/elements //Composants elements d'une fiche
	/tabs 
	   CardContent.tsx
           CardCourse.tsx
           CardFeedback.tsx
           CardSettings.tsx
           CardStats.tsx	
 CardClient.tsx //Gestion de l'affichage des tabs / pré-fetch des données importantes (contenus de la fiche)
 DragAndDrop.tsx //Gestion du dragAndDrop des éléments de la fiche
 page.tsx //Page card
	
