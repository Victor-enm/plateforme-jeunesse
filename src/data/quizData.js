export const questions = [
  {
    text: "Quel environnement préfères-tu ?",
    options: [
      { text: "En intérieur", type: "A" },
      { text: "En extérieur", type: "B" },
    ],
  },
  {
    text: "Tu aimes travailler :",
    options: [
      { text: "En équipe", type: "B" },
      { text: "En autonomie", type: "A" },
    ],
  },
  {
    text: "Tu préfères :",
    options: [
      { text: "Créer", type: "A" },
      { text: "Organiser", type: "B" },
    ],
  },
];

export const results = {
  A: {
    title: "Créatif·ve indépendant·e",
    description: "Tu es fait·e pour les métiers artistiques ou techniques autonomes.",
    to: "/autre",
  },
  B: {
    title: "Coordinateur·rice d'équipe",
    description: "Tu es à l’aise en collectif, idéal pour les métiers de terrain.",
    to: "/autre",
  },
};
