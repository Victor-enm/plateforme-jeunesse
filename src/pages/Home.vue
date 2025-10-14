<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Être magistrat(e), c’est quoi&nbsp;?"
        text="Les magistrats veillent à l’application de la loi en tant que juges ou procureurs, jouant ainsi un rôle clé dans la société. Découvre celui qui te correspond et les études à suivre en passant le test !"
        bgColor="bg-gris"
        iconName="code penal"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90 2xl:top-15 2xl:right-135"
        :buttons="[
          {
            text: 'Je fais  le test !',
            to: '/quiz',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Quel magistrat sommeille en toi&nbsp;?"
        text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi !"
        bgColor="bg-gris"
        txtColor="text-violet"
        iconName="crayons"
        responsivTxt="lg:flex-row"
        :buttons="[
          {
            text: 'Je fais  le test !',
            to: '/autre',
            variant: 'violet',
          },
        ]"
      />

      <SectionBase
        title="Les métiers de la magistrature"
        text="Les métiers de la magistrature sont essentiels pour garantir le respect des lois et protéger la société. Juges, procureurs et autres professionnels du droit jouent un rôle fondamental dans l’équilibre de la justice. Parcours cette page pour découvrir les différents métiers et les responsabilités qui les accompagnent."
        bgColor="bg-violet"
        iconName="codes"
        txtColor="text-gris 2xl:pb-6"
        pictoSize="w-30 h-30 md:hidden"
        :buttons="[
          {
            text: 'Découvrir les métiers',
            to: '/les-metiers',
            variant: 'red',
          },
        ]"
      />

      <SectionBase
        title="L’école nationale de la magistrature"
        text="L’École nationale de la magistrature (ENM) offre une formation unique pour devenir juge ou procureur, alliant théorie et pratique."
        bgColor="bg-rouge"
        txtColor="text-gris"
        iconName="toque"
        pictoSize="w-30 h-30 pt-6"
        responsivTxt=" lg:flex-row"
        :buttons="[
          {
            text: 'Découvrir',
            to: '/ENM',
            variant: 'blanc',
          },
        ]"
      />

      <SectionBase
        title="Plonge au cœur d’un procès"
        text="Un procès, c’est un moment important où la justice intervient pour trancher un conflit ou juger une personne accusée d’une infraction. Voici les grandes étapes d’une audience judiciaire."
        iconName="balance"
        bgColor="bg-gris"
        txtColor="text-violet"
        :buttons="[
          {
            text: 'Découvre les grandes étapes',
            to: '/les-etapes-proces',
            variant: 'red',
            class: 'mt-5',
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
            text: 'Découvre les évolutions possibles',
            to: '/carriere-dans-la-magistrature',
            variant: 'white',
            class: 'mt-5',
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
            to: '/rencontrons-nous',
            variant: 'violet',
            class: 'mt-5',
          },
        ]"
      />

      <SectionBase
        title="Les Classes Prépas Talents de l’ENM"
        text="Un coup de pouce vers la magistrature"
        bgColor="bg-rouge"
        iconName="codes"
        pictoSize="w-30 h-30"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Découvre comment y accéder',
            to: '/classes-prepas-talents-enm',
            variant: 'white',
            class: 'mt-5',
          },
        ]"
      />

<Footer />  
    </main>
  
    
  </template>
  <script setup>
import Footer from '../components/Footer.vue'

</script>