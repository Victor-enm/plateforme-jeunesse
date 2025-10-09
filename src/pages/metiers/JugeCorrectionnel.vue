<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge correctionnel"
      text="Tu es dynamique, rigoureux et à l’écoute.  En tant que juge correctionnel, tu es en charge de juger les personnes ayant commis un délit. Tu prépares les dossiers pour ensuite les exposer à l’audience que tu diriges tel un chef d’orchestre.  <br>
      A la fin tu décides de la culpabilité et de la peine du/des prévenu(s)."
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
        title="Témoignage d’un juge correctionnel"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/jAEKaFIrse4"

        />

    <SectionBase
      title= "Chef d’orchestre du procès"
      text= "Le juge correctionnel distribue la parole à chacune des parties (Procureur, avocats, prévenu(s), victime(s)…) et les écoute sans donner son avis. Il doit être impassible. <br>
      En tant qu’arbitre du procès il doit veiller à ce que l’audience reste calme. A défaut il dispose de pouvoirs de « police »."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Rendre la justice au nom du peuple français"
      textSecondary="Le juge correctionnel, à la fin du procès, décide de la culpabilité et de la peine la plus adaptée aux faits et au prévenu, seul ou avec l’aide de deux autres juges. Il doit connaitre et appliquer la loi pour ensuite rédiger un jugement expliquant son raisonnement."
    />
    <SectionBase
      title= "Un métier qui a du sens :"
      text= "Le juge correctionnel incarne la Justice. Il doit rendre vivant son dossier, être à l’écoute de tous les acteurs pour arbitrer et décider. A travers son action il participe à apaiser les conflits de la société et réparer les torts subis par les victimes. "
      bgColor= "bg-violet"
      txtColor= "text-gris"
    />
  <SectionBase
      title= "Juge correctionnel"
      text= "Quels parcours suivre ?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc2="Parcours"
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
import Parcours from '@/assets/images/metiers/Parcours_Juge_correctionnel-02.webp'


</script>