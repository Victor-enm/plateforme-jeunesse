<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge des enfants"
      text="D’un naturel empathique, tu souhaites protéger les mineurs en danger, en aidant les familles en difficulté. Tu mesures aussi l’importance de sanctionner et surtout d’accompagner les mineurs qui ont commis des infractions. Ton écoute et ta capacité à comprendre les situations difficiles sont des atouts pour assurer ces missions."
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
        title="Témoignage d’un juge des enfants"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/M9FsZS8YK8w"

        />

    <SectionBase
      title= "Protéger les mineurs"
      text= "Le juge des enfants intervient pour protéger les mineurs en danger quand leurs parents sont en difficulté pour le faire seuls. Il peut alors ordonner des mesures afin d’aider les parents et quelques fois placer les enfants quand ils sont gravement en danger."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Juger les jeunes délinquants"
      textSecondary="Le juge des enfants, seul ou avec deux assesseurs pour les faits les plus graves, juge les infractions commis par les mineurs. Il peut prononcer des mesures éducatives, mais également des peines.  La justice des mineurs met l’accent sur l'éducation plutôt que sur la sanction. Il cherche avant tout à comprendre pourquoi le jeune a commis l'infraction et à l'aider à s’insérer dans la société."
    />
    <SectionBase
      title= "Entouré de spécialistes"
      text= "Le juge des enfants travaille avec différents professionnels (assistants sociaux, éducateurs, psychologues). Il leur confie l’accompagnement des enfants à protéger et de leurs familles, ainsi que celui des jeunes qui ont commis des infractions pour les guider dans leur parcours"
      bgColor= "bg-violet"
      txtColor= "text-gris"
    />
  <SectionBase
      title= "Juge des enfants"
      text= "Quels parcours suivre ?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc2="Parcours"
      />
  <SectionBase
        title="Ce métier est fait pour toi ?"
        text="Si tu veux en savoir plus sur les différents métiers de la magistrature et formations, rends-toi sur les liens suivants."
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
import Parcours from '@/assets/images/metiers/Parcours_JE-02.webp'


</script>