<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionDecouvre
        v-for="(section, index) in sections"
        :key="index"
        :title="section.title"
        :text="section.text"
        :bgColor="section.bgColor"
        :txtColor="section.txtColor"
        :cards="section.cards"
      />
    </main>
  </template>
  
  <script setup>  
  const sections = [
    {
      title: "Être magistrat(e), c’est quoi ?",
      text: "Les magistrats veillent à l’application de la loi en tant que juges ou procureurs...",
      bgColor: "bg-violet",
      txtColor: "text-gris",
      cards: [
        {
          title: "Juge",
          description: "Le juge rend des décisions de justice dans des affaires civiles, pénales ou administratives.",
        },
        {
          title: "Procureur",
          description: "Le procureur représente la société et engage des poursuites pénales.",
        },
      ],
    },
    {
      title: "Découvre les missions",
      text: "Chaque rôle a ses spécificités. Explore les missions pour mieux les comprendre.",
      bgColor: "bg-gris",
      txtColor: "text-violet",
      cards: [
        {
          title: "Auditeur de justice",
          description: "Un élève magistrat en formation à l’ENM.",
        },
        {
          title: "Vice-président",
          description: "Il assiste le président dans l’organisation des audiences.",
        },
      ],
    },
  ]
  </script>
  