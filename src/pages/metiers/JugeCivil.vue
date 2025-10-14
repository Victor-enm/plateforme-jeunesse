<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge civil"
      text="Tu es naturellement rigoureux, tu aimes réfléchir et trouver des solutions, en tant que juge civil, tu es au cœur de la vie en société. Le juge civil traite des petits désaccords civils de la vie quotidienne (dettes impayées, travaux mal exécutés, etc.). Il s’occupe également de conflits sociétaux délicats (ex : la filiation d’un enfant issu d’une gestation pour autrui faite à l’étranger, le préjudice écologique) et de conflits économiques majeurs (ex : droit des marques)."
      bgColor="bg-gris"
      :buttons="[
        {
          text: 'Plus d’informations sur ce métier',
          href: '#Decouvre-le-metier',
          variant: 'fullRed',
          class: 'mb-5'
        },
        {
          text: 'Découvre les autres métiers possibles',
          href: '/les-metiers#magistratsiege',
          variant: 'red',
        },
      ]"
    />

       
        <SectionVideo
        title="Un jour dans la vie d’un juge civil"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/P1G7qfW2F0E"

        />

    <SectionBase
      title= "Un juge aux décisions variées"
      text= "On devrait parler des juges civils plus que d’un juge civil puisqu’ils traitent de matières variées (dommages corporels, successions, constructions, expropriations…) et prennent des décisions très différentes. Ils condamnent à réparer un préjudice, payer une facture, rembourser une dette, rendre un produit, quitter un lieu ou interdisent de faire quelque chose (ex : troubles du voisinage) "
      bgColor= "bg-gris"
      txtColor= "text-violet"
    />
    <SectionBase
      title= "Un juge aux multiples facettes"
      text= "Les juges civils président les audiences, rédigent les jugements mais font bien plus encore. Ils essayent de rapprocher les parties pour parvenir à un accord, ils peuvent se déplacer sur les lieux et ils animent une équipe constituée de greffiers et d’assistants du juge. Ils échangent avec de nombreux partenaires comme les avocats, les notaires ou encore les mandataires judiciaires et les experts."
      bgColor= "bg-violet"
      txtColor= "text-gris"
    />
  <SectionBase
      title= "Juge civil"
      text= "Quels parcours suivre ?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc2="Parcours"
      />
  <SectionBase
        title="Ce métier est fait pour toi ?"
        text="Pour en savoir plus sur la formation et la vie à l’ENM, consulte la rubrique dédiée sur la plateforme. Découvre également les autres métiers de la magistrature."
        bgColor="bg-rouge"
        iconName="code civil"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'École nationale de la magistrature',
            to: '/ENM',
            variant: 'blanc',
            class: 'mb-5 lg:mr-5 lg:mt-5'
          },
          {
            text: 'Les métiers de la magistrature',
            to: '/les-metiers',
            variant: 'fullViolet',
            class: 'lg:hover:border-rouge'
          },
        ]"
      />

    <Footer />  
  </main>
</template>
  
<script setup>
import Footer from '@/components/Footer.vue'
import Parcours from '@/assets/images/metiers/Parcours_Juge_civil-02.webp'


</script>