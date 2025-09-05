<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge de l'application des peines"
      text="Le juge de l’application des peines est un magistrat du siège qui intervient auprès des personnes condamnées à des peines d’emprisonnement mais aussi auprès des personnes libres condamnées à des peines qui supposent un suivi. <br>
      Il peut adapter au mieux la peine afin de favoriser l’insertion des condamnés et prévenir le risque de récidive."
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
        title="Témoignage d’un juge de l'application des peines"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/HtS4qBiiKfs?si=X6z39E2mpMc4J_Lr"

        />

    <SectionBase
      title= "Surveiller l’exécution des peines"
      text= "Le juge de l'application des peines (JAP) contrôle et supervise la mise en œuvre des sanctions pénales. Il ajuste les mesures selon le comportement des condamnés et leur évolution que ce soit en détention ou dans le cadre des suivis judiciaires hors détention afin notamment de privilégier leur insertion professionnelle."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Réinsertion et responsabilisation"
      textSecondary="Une des missions principales du juge de l’application des peines est de s’assurer de l’accomplissement par les personnes condamnées des démarches attendues de façon à ce qu’elles retrouvent une place dans la société et ne récidivent pas. Il joue ainsi un rôle clé dans le parcours des détenus après leur jugement."
    />
    <SectionBase
      title= "Donner du sens à la peine"
      text= "Le juge de l'application des peines agit en toute indépendance pour prendre les décisions les plus adaptées. Il évalue chaque situation individuelle et détermine les mesures susceptibles de réduire la récidive. Son rôle est essentiel pour s’assurer que la peine ait du sens pour le condamné, la société et les victimes, au moment de son exécution."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      titleSecondary="En étroite collaboration avec divers acteurs"
      textSecondary="Ce magistrat travaille en étroite collaboration avec les services pénitentiaires et les travailleurs sociaux tels que des conseillers d'insertion et de probation (qui accompagnent les condamnés), mais aussi des psychologues, des éducateurs..."
    />
  <SectionBase
      title= "Juge de l'application des peines"
      text= "Quels parcours suivre ?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      imgSrc2="/src/assets/icons/parcours magistrat.svg"
      />
  <SectionBase
        title="Ce métier est fait pour toi ?"
        text="Si tu veux en savoir plus sur les différents métiers de la magistrature et formations, rends-toi sur les liens suivants."
        bgColor="bg-rouge"
        iconName="code penal"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'École nationale de la magistrature',
            to: '/ENM',
            variant: 'blanc',
            class: 'mb-5 lg:mr-5 lg:mt-5'
          },
          {
            text: 'Quel magistrat es-tu ?',
            to: '/quiz',
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

</script>