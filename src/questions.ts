export type QuestionData =
  | { question: string; answer?: string; time?: number }
  | { question: string; pasFaux: true; time?: number };

export type Questions = Array<QuestionData>;

export const QUESTIONS: Questions = [
  {
    question: 'Notre Dame de Paris se situe dans quelle **ville** belge ?',
    pasFaux: true,
  },
  {
    question: 'Le drapeau francais comporte quelles **trois couleurs** ?',
    answer: 'Bleu, blanc, rouge',
  },
  { question: 'De quel **sens** est privé un sourd ?', answer: "L'ouie" },
  {
    question: 'Les livres se rangent dans quel **meuble** ?',
    answer: 'La bibliothèque',
  },
  {
    question: 'Nommez un/e **chanteur/se** venant du Québec',
    answer: 'Garou, Céline Dion ...',
  },
  {
    question: `Quel **conte** relate l'histoire d'une jeune fille qui dort longtemps ?`,
    answer: 'La Belle au bois dormant',
  },
  {
    question: `Quelle **planète** est connue pour ses anneaux ?`,
    answer: `Saturne`,
  },
  {
    question: `Une sorcière utilise quel **objet ménager** pour voler ?`,
    answer: `Un balai`,
  },
  {
    question: `Quel **savant connu** aurait reçu une pomme sur la tête ?`,
    answer: `Isaac Newton`,
  },
  {
    question: `Quelle **ville française** est la plus peuplée ?`,
    answer: `Paris`,
  },
  { question: `Une bulle a quelle **forme** ?`, answer: `Ronde` },
  {
    question: `Nommez un **instrument de musique** que l'on trouve normalement dans un groupe rock.`,
    answer: `Guitare, basse, batterie`,
  },
  { question: `La vache produit quelle **céréale** ?`, pasFaux: true },
  {
    question: `De quelle **couleur** est le lait de la vache ?`,
    answer: `Blanc`,
  },
  {
    question: `Comment se nomme **l'habitat** de l'abeille ?`,
    answer: `La ruche`,
  },
  {
    question: `Nommez un **super-héros** dont le nom ne se termine pas par -man`,
    answer: `Wolverine, Flash, Hulk ...`,
  },
  {
    question: `Nommez un **légume** qui n'est pas vert`,
    answer: `Carotte, navet`,
  },
  { question: `Le mot ananas commence par quelle **lettre** ?`, answer: `A` },
  { question: `Le mot wagon commence par quelle **lettre** ?`, answer: `W` },
  { question: `**Combien** de lettres comporte le mot chat ?`, answer: `4` },
  { question: `Quel **mot de cette phrase** contient un U ?`, answer: `Quel` },
  {
    question: `Donnez une **valeur** inférieure à 55-7`,
    answer: `Toutes valeurs inférieures à 48`,
  },
  {
    question: `Nommez un **sport** ne terminant pas par -ball`,
    answer: `Tennis, hockey...`,
  },
  { question: `Un pianiste joue de quel **instrument** ?`, answer: `Du piano` },
  { question: `Un tennisman joue de quel **sport** ?`, answer: `Tennis` },
  {
    question: `Nommez une **couleur** qui n'est pas sur le drapeau de la france`,
    answer: `Toutes sauf bleu, blanc et rouge`,
  },
  {
    question: `Quelle **partie de la voiture** permet de se diriger ?`,
    answer: `Le volant`,
  },
  { question: `Quelle **heure** est il ?` },
  { question: `Quel **jour de la semaine** sommes-nous ?` },
  {
    question: `Quel **personnage d'Asterix** est tombé dans la potion magique quand il était petit ?`,
    answer: `Obelix`,
  },
  {
    question: `Avec quel **accessoire sportif** jouent les footballeurs ?`,
    answer: `Un ballon`,
  },
  { question: `Quelle **saison** précède l'hiver ?`, answer: `Automne` },
  { question: `Quelle **saison** suit le printemps ?`, answer: `Eté` },
  { question: `Quelle **saison** précède l'automne ?`, answer: `Eté` },
  {
    question: `Quel **insecte** est rouge à points noirs ?`,
    answer: `La coccinelle`,
  },
  {
    question: `Le violet se compose de quelles **deux couleurs**?`,
    answer: `Rouge et bleu`,
  },
  { question: `Quel **jour** précède le vendredi ?`, answer: `Samedi` },
  { question: `Quel **jour** suit le dimanche ?`, answer: `Lundi` },
  { question: `Dans quel **fruit** Adam a-t-il croqué ?`, answer: `La pomme` },
  {
    question: `Quelle **langue** se parle principalement en France ?`,
    answer: `Français`,
  },
  {
    question: `Quelle **forme géométrique** a 4 côtés ?`,
    answer: `Carré, rectangle ...`,
  },
  {
    question: `Quel **personnage de Kaamelott** a inventé la botte secrète ?`,
    answer: `Karadoc`,
  },
  { question: `Sur quel **continent** se trouve la Chine ?`, answer: `Asie` },
  {
    question: `Sur quel **continent** se trouve l'Allemagne ?`,
    answer: `L'Europe`,
  },
  {
    question: `Dans quel **pays** se situe Londres ?`,
    answer: `Au Royaume-Uni`,
  },
  { question: `Dans quel **pays** se situe Mexico ?`, answer: `Au Mexique` },
  { question: `De quelle **couleur** est la salade ?`, answer: `Verte` },
  { question: `De quelle **couleur** est la carotte ?`, answer: `Orange` },
  { question: `De quelle **couleur** sont les Schtroumpfs ?`, answer: `Bleu` },
  { question: `Quel **mot de cette phrase** est un verbe ?`, answer: `"Est"` },
  { question: `Quel **alcool** est a base de houblon ?`, answer: `La bière` },
  { question: `Sur quel **meuble** êtes-vous assis ?` },
  { question: `Quel **arbre** décore-t-on a Noël ?`, answer: `Un sapin` },
  {
    question: `Quel **fruit** est produit par le cerisier ?`,
    answer: `La cerise`,
  },
  {
    question: `Quel **type** de bijou porte-t-on au poignet ?`,
    answer: `Un bracelet`,
  },
  {
    question: `Quel **type** de bijou porte-t-on au doigt ?`,
    answer: `Une bague`,
  },
  { question: `De quelle **couleur** est le blanc d'oeuf ?`, answer: `Blanc` },
  { question: `Quel **joueur** se trouve à votre droite ?` },
  { question: `Quel **joueur** se trouve à votre gauche ?` },
  {
    question: `Quelle **partie de la voiture** uilise-t-on pour freiner ?`,
    answer: `Les freins`,
  },
  {
    question: `Dans quel **jeu** trouve-t-on l'idiot du village ?`,
    answer: `Le loup-garou`,
  },
  {
    question: `Dans quelle **pièce** se trouve le four ?`,
    answer: `La cuisine`,
  },
  {
    question: `Dans quelle **pièce** se trouve la douche ?`,
    answer: `La salle de bain`,
  },
  {
    question: `Quel est le **satellite naturel** de la Terre ?`,
    answer: `La Lune`,
  },
  {
    question: `**Combien** y a-t-il de planètes dans le système solaire ?`,
    answer: `8`,
  },
  { question: `Quelle est la 3ème **lettre** de l'alphabet ?`, answer: `C` },
  {
    question: `Nommez une **note de musique** contenant 2 lettres`,
    answer: `Toutes sauf Sol`,
  },
  { question: 'Avec **combien** de pattes marche un serpent ?', pasFaux: true },
  { question: "Quelle est la 27ème **lettre** de l'alphabet ?", pasFaux: true },
  { question: 'Que **crie** une araignée quand elle a peur ?', pasFaux: true },
  { question: "Quelle **année** suit l'été ?", pasFaux: true },
  { question: 'Quel **légume** produit le poirier ?', pasFaux: true },
  { question: 'A quel **orteil** porte-t-on une alliance ?', pasFaux: true },
  {
    question: 'Quel **animal** est dévoré par le Petit Chaperon Rouge ?',
    pasFaux: true,
  },
  { question: 'Dans quelle **rue** se trouve le lit ?', pasFaux: true },
  {
    question: 'Dans quel **musée** est exposée la Tour Eiffel ?',
    pasFaux: true,
  },
  {
    question: 'Le drapeau allemeand comporte quelles **2 couleurs** ?',
    pasFaux: true,
  },
  {
    question: `Par quelle **lettre** commence le mot "haricot" ?`,
    answer: `H`,
  },
  { question: `**Combien* font 36+6 ?`, answer: `42` },
  {
    question: `Avec quel **couvert** mange-t-on de la soupe ?`,
    answer: `Une cuillère`,
  },
  {
    question: `Dans quel **contenant** boit-on du thé ?`,
    answer: `Une tasse, un bol`,
  },
  {
    question: `Avec quel **fruit rouge** fait-on du gaspacho ?`,
    answer: `De la tomate`,
  },
  { question: `Quel **vêtement** met-on quand on a froid ?`, answer: `Pull` },
  { question: `De quelle **couleur** sont les yeux de ton voisin de droite ?` },
];
