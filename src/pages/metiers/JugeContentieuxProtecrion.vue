<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge des contentieux de la protection"
      text="Intéressé par les préoccupations du quotidien, en tant que juge des contentieux de la protection (JCP), tu tranches un nombre important de petits conflits et en particulier tu traites des dossiers impliquant des personnes dans des situations de vulnérabilité, notamment en matière de surendettement, de logement, de crédits à la consommation et de protection des majeurs. Ta capacité à analyser et à trouver des solutions équilibrées te place au cœur des litiges essentiels à la vie en société. Le juge des contentieux de la protection exerce tant dans des grandes villes que des petites villes, pour être au plus proche des citoyens."
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
        title="Témoignage d’un juge des contentieux de la protection"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/LATuAPcB34o"

        />

    <SectionBase
      title= "Protéger les personnes vulnérables"
      text= "Le juge des contentieux de la protection (JCP) aide les personnes fragiles, en raison de leur âge ou de leur santé, qui ont besoin d’un soutien au quotidien. Il met en place des mesures (sauvegarde de justice, curatelle, tutelle ou habilitation familiale) en fonction de leurs besoins réels. Son rôle ? Protéger ces personnes tout en respectant au maximum leur liberté. Une mission particulièrement valorisante pour le juge du fait de utilité sociale forte!"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Traiter les affaires relatives à la location d’un logement"
      textSecondary="Il tranche des litiges entre locataires et propriétaires. En cas de procédure d’expulsion pour impayés, le juge des contentieux de la protection veille à l’équilibre des intérêts et droits des parties : le droit du locataire à un logement digne et le droit du propriétaire à être payé."
    />
    <SectionBase
      title= "Traiter les affaires de surendettement"
      text= "Le juge des contentieux de la protection (JCP) met en place des remboursements échelonnés des dettes pour les personnes qui n’arrivent plus à payer ce qu’elles doivent, dans le respect du droit des créanciers. Dans les situations de vie les plus difficiles, les dettes peuvent être effacées."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      titleSecondary="Traiter les affaires de crédit à la consommation"
      textSecondary="Le JCP règle les litiges entre les banques et les personnes qui ont contracté un crédit à la consommation. Il veille à l’équilibre des intérêts et droits des parties : la protection du consommateur et le droit de la banque à être payé."
    />
  <SectionBase
      title= "Juge des contentieux de la protection"
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
import Parcours from '@/assets/images/metiers/Parcours_JCP-02.webp'


</script>