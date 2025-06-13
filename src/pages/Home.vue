<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Être magistrat(e), c’est quoi ?"
        text="Les magistrats veillent à l’application de la loi en tant que juges ou procureurs, jouant ainsi un rôle clé dans la société. Découvre celui qui te correspond et les études à suivre en passant le test !"
        bgColor="bg-gris"
        iconName="code penal"
        :buttons="[
          {
            text: 'Je fais  le test !',
            to: '/autre',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Quel magistrat sommeille en toi ?"
        text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi !"
        bgColor="bg-rouge"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Je fais  le test !',
            to: '/',
            variant: 'fullWhite',
          },
        ]"
      />

      <SectionBase
        title="Les métiers de la magistrature"
        text="Les métiers de la magistrature sont essentiels pour garantir le respect des lois et protéger la société. Juges, procureurs et autres professionnels du droit jouent un rôle fondamental dans l’équilibre de la justice. Parcours cette page pour découvrir les différents métiers et les responsabilités qui les accompagnent."
        bgColor="bg-violet"
        iconName="codes"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Magistrat du siège',
            to: '/',
            variant: 'white',
            class: 'mb-5'
          },
          {
            text: 'Magistrat du parquet',
            to: '/',
            variant: 'red',
          },
        ]"
      />

      <SectionBase
        title="L’école nationale de la magistrature"
        text="L’École nationale de la magistrature (ENM) offre une formation unique pour devenir juge ou procureur, alliant théorie et pratique."
        bgColor="bg-gris"
        iconName="toque"
        :buttons="[
          {
            text: 'Découvrir',
            to: '/',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Plonge au cœur d’un procès"
        text="Un procès, c’est un moment important où la justice intervient pour trancher un conflit ou juger une personne accusée d’une infraction. Voici les grandes étapes d’une audience judiciaire."
        bgColor="bg-rouge"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Découvre les grandes étapes',
            to: '/',
            variant: 'white',
          },
        ]"
      />

      <SectionBase
        title="Une carrière dans la magistrature"
        text="Après des études de droit et une formation spécialisée, les magistrats prennent des décisions qui impactent la société. Un choix ambitieux pour celles et ceux qui veulent s’engager pour la justice et l’intérêt général."
        bgColor="bg-violet"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Découve les évolutions possibles',
            to: '/',
            variant: 'white',
          },
        ]"
      />

      <SectionBase
        title="Rencontrons-nous"
        text="L’École nationale de la magistrature va à la rencontre des jeunes pour faire découvrir le métier de magistrat. Conférences, salons, journées portes ouvertes ou collaborations avec des créateurs de contenus : autant d’initiatives pour mieux faire connaître cette profession essentielle. Et si c’était fait pour toi ? Passe le test et découvre les études à suivre !"
        bgColor="bg-gris"
        iconName="code penal"
        :buttons="[
          {
            text: 'Dates à venir',
            to: '/',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Les Classes Prépas Talents de l’ENM"
        text="Un coup de pouce vers la magistrature"
        bgColor="bg-rouge"
        iconName="codes"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Découvre comment y accéder',
            to: '/',
            variant: 'white',
          },
        ]"
      />
  
  
    </main>
  
    
  </template>