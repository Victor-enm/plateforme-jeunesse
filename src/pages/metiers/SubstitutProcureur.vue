<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Substitut du procureur"
      text="Tu es dynamique, rigoureux et investi dans la défense de l’intérêt public. En tant que substitut du procureur, tu prépares et soutiens les dossiers lors des audiences, préconises des peines adaptées et représentes le ministère public. Tes décisions influencent directement l’application de la justice et son équité."
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
        title="Témoignage d’un substitut du procureur"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/TSSdhhkrDt0"

        />

    <SectionBase
      title= "Défendre les intérêts de la société"
      text= "Le substitut du procureur dirige les enquêtes, instruit et oriente les dossiers pénaux, poursuit les personnes suspectées d’avoir commis une infraction, met à exécution les peines prononcées par le tribunal… Il exprime, dans ses réquisitoires, à l’écrit ou à l’oral, la position du ministère public. Il veille, avant, pendant et après le procès, à ce que les intérêts de la société soient respectés, tout en garantissant une justice équitable."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Travailler en équipe et en partenariat"
      textSecondary="Le substitut travaille en équipe au sein du parquet, et en partenariat avec de nombreux professionnels au sein du palais de justice (greffe, juge d’instruction, juge d’application des peines et autres magistrats, avocats…), mais aussi avec des professionnels variés hors du palais de justice : services d’enquête, éducateurs, élus, administration pénitentiaire, associations… "
    />
    <SectionBase
      title= "Un acteur essentiel qui veille à l’application de la loi"
      text= "Subordonné au procureur de la République, le substitut joue un rôle indispensable dans le bon fonctionnement du parquet. Il gère une multitude d’affaires allant des infractions mineures aux dossiers plus complexes, en s’assurant à chaque étape de la procédure que la loi est appliquée et respectée."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      titleSecondary="Au sein des tribunaux judiciaires"
      textSecondary="Le substitut du procureur exerce principalement dans les tribunaux judiciaires, soit dans son bureau (pour traiter les plaintes et procédures qui lui sont soumises, rédiger des synthèses de dossier, préparer ses audiences, coordonner l’action des services d’enquête), soit dans les salles d’audience où il va représenter la position du ministère public oralement."
    />
  <SectionBase
      title= "Substitut du procureur"
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
import Parcours from '@/assets/images/metiers/Parcours_substitut_proc-02.webp'


</script>