<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge d'instruction"
      text="Tu es minutieux, impartial et investi. Tu as l’âme d’un enquêteur et rechercher la vérité te motive. En tant que juge d’instruction, tu diriges les enquêtes complexes pour rassembler des éléments, sans parti pris, et établir la vérité."
      bgColor="bg-gris"
      :buttons="[
        {
          text: 'Plus d’informations sur ce métier',
          href: '#Decouvre-le-metier',
          variant: 'fullRed',
          class: 'mb-5 lg:mr-5'
        },
        {
          text: 'Découvre les autres métiers possibles',
          href: '/les-metiers#magistratsiege',
          variant: 'red',
        },
      ]"
    />

       
        <SectionVideo
        title="Témoignage d’un juge d'instruction"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/rFxPN3AROW8"

        />

    <SectionBase
      title= "Conduire l’enquête"
      text= "Le juge d'instruction travaille sur les affaires complexes nécessitant des investigations approfondies. Il dirige les enquêtes, l’action des services de police ou de gendarmerie, rassemble les indices et entend les personnes utiles pour décider ou non du renvoi devant un tribunal."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Garantir l’impartialité"
      textSecondary="Le juge d’instruction est chargé de mener l’instruction à charge et à décharge, s’assurant que toutes les parties soient entendues pour une décision équitable et justifiée."
    />
    <SectionBase
      title= "Un acteur stratégique de la justice"
      text= "En tant que magistrat indépendant, le juge d'instruction occupe un rôle crucial pour faire avancer les enquêtes judiciaires. Son travail de terrain, combiné à une analyse minutieuse des faits, assure une justice rigoureuse et impartiale."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      titleSecondary="Collaborer avec divers professionnels"
      textSecondary="Le juge d'instruction travaille aux côtés des procureurs, avocats, experts judiciaires et forces de l’ordre. Il s’assure que chaque aspect de l’enquête est traité avec précision et professionnalisme."
    />
  <SectionBase
      title= "Juge d'instruction"
      text= "Quels parcours suivre&nbsp;?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc2="Parcours"
      />
  <SectionBase
        title="Ce métier est fait pour toi&nbsp;?"
        text="Si tu veux en savoir plus sur les différents métiers de la magistrature et formations, rends-toi sur les liens suivants."
        bgColor="bg-rouge"
        iconName="code civil"
        pictoSize="rotate-335 mb-15"
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
import Parcours from '@/assets/images/metiers/Parcours_Juge_instruction-02.webp'


</script>