<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Être magistrat(e), c’est quoi ?"
        text="Les magistrats veillent à l’application de la loi en tant que juges ou procureurs, jouant ainsi un rôle clé dans la société. Découvre celui qui te correspond et les études à suivre en passant le test !"
        bgColor="bg-gris"
        iconName="code penal"
        :buttons="[
          {
            text: 'Je fais le test !',
            to: '/',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Quel magistrat sommeille en toi ?"
        text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi !"
        bgColor="bg-rouge"
        buttonText="Je fais le test !"
        buttonVariant="fullWhite"
        buttonTo="/de"
        txtColor="text-gris"
      />

      <SectionBase
        title="Les métiers de la magistrature"
        text="Les métiers de la magistrature sont essentiels pour garantir le respect des lois et protéger la société. Juges, procureurs et autres professionnels du droit jouent un rôle fondamental dans l’équilibre de la justice. Parcours cette page pour découvrir les différents métiers et les responsabilités qui les accompagnent."
        bgColor="bg-violet"
        buttonText="Magistrat du siège"
        buttonText2="Magistrat du parquet"
        buttonVariant="white"
        buttonVariant2="red"
        buttonTo="/autre"
        buttonTo2="/autre"
        txtColor="text-gris"
        iconName="codes"
      />

      <SectionBase
        title="L’école nationale de la magistrature"
        text="L’École nationale de la magistrature (ENM) offre une formation unique pour devenir juge ou procureur, alliant théorie et pratique."
        bgColor="bg-gris"
        buttonText="Découvrir"
        buttonVariant="violet"
        buttonTo="/bonjour"
        iconName="toque"
      />

      <SectionBase
        title="Plonge au cœur d’un procès"
        text="Un procès, c’est un moment important où la justice intervient pour trancher un conflit ou juger une personne accusée d’une infraction. Voici les grandes étapes d’une audience judiciaire."
        bgColor="bg-rouge"
        buttonText="Découvre les grandes étapes"
        buttonVariant="white"
        buttonTo="/bonjour"
        txtColor="text-gris"
      />

      <SectionBase
        title="Une carrière dans la magistrature"
        text="Après des études de droit et une formation spécialisée, les magistrats prennent des décisions qui impactent la société. Un choix ambitieux pour celles et ceux qui veulent s’engager pour la justice et l’intérêt général."
        bgColor="bg-violet"
        buttonText="Découvre les évolutions possibles"
        buttonVariant="white"
        buttonTo="/bonjour"
        txtColor="text-gris"
      />

      <SectionBase
        title="Rencontrons-nous"
        text="L’École nationale de la magistrature va à la rencontre des jeunes pour faire découvrir le métier de magistrat. Conférences, salons, journées portes ouvertes ou collaborations avec des créateurs de contenus : autant d’initiatives pour mieux faire connaître cette profession essentielle. Et si c’était fait pour toi ? Passe le test et découvre les études à suivre !"
        bgColor="bg-gris"
        buttonText="Dates à venir"
        buttonVariant="violet"
        buttonTo="/bonjour"
        iconName="code penal"
      />

      <SectionBase
        title="Les Classes Prépas Talents de l’ENM"
        text="Un coup de pouce vers la magistrature"
        bgColor="bg-rouge"
        buttonText="Découvre comment y accéder"
        buttonVariant="white"
        buttonTo="/bonjour"
        iconName="codes"
        txtColor="text-gris"
      />
  
  
    </main>
  
    
  </template>