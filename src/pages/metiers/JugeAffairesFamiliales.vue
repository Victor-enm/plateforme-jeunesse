<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <SectionBase
      title="Juge aux affaires familiales"
      text="En tant que juge aux affaires familiales, tu es le spécialiste du droit de la famille dans un tribunal. Tu interviens en particulier pour décider de la résidence des enfants, des droits de visite et d’hébergement et du montant de la pension alimentaire ainsi que dans les procédures de divorce. Ton rôle est de chercher les solutions les plus adaptées possibles dans des situations parfois très difficiles. Tu joues aussi un rôle important de protection en matière de violences intra-familiales. Ta fonction, qui exige que tu sois rigoureux et attentif aux autres, te placera au cœur des enjeux de la famille et de la société. "
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
        title="Découvre le métier de juge aux affaires familiales"
        ancre="Decouvre-le-metier"
        bgColor="bg-rouge"
        linkVideo="https://www.youtube.com/embed/hWZAtk2vBQQ"
        :photo="Photo"

        />

    <SectionBase
      title= "Un juge au cœur des situations familiales "
      text= "Le juge aux affaires familiales intervient dans beaucoup de situations différentes mais il est saisi le plus souvent en cas de séparation, que les parents soient mariés ou non. Il est en audience plusieurs fois par semaine. Il cherche à concilier les parties et à apaiser les conflits. Il peut entendre les enfants. Il doit ensuite prendre, expliquer et rédiger sa décision."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      titleSecondary="Un juge protecteur"
      textSecondary="Le juge aux affaires familiales doit toujours veiller à l’intérêt supérieur des enfants quand il prend une décision. 
        Son rôle de protection se manifeste particulièrement dans les situations de violences qui peuvent concerner les enfants mais aussi un des parents."
    />
    <SectionBase
      title= "Un juge aux décisions importantes"
      text= "Le juge aux affaires familiales prend des décisions  qui ont des conséquences importantes sur la vie quotidienne des personnes et l’avenir des enfants. Chaque situation est unique et demande une grande capacité d’analyse et d’écoute. "
      bgColor= "bg-violet"
      txtColor= "text-gris"
      titleSecondary="Un juge qui travaille en équipe "
      textSecondary="Le juge aux affaires familiales rend le plus souvent ses décisions tout seul mais il travaille en équipe, avec des greffiers et des attachés de justice. Il est aussi en lien avec le procureur et d’autres juges (en particulier le juge des enfants) ainsi qu’avec des avocats, des notaires, des enquêteurs sociaux, des psychologues ou des médiateurs. "
    />
  <SectionBase
      title= "Juge aux affaires familiales"
      text= "Quels parcours suivre ?"
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc2= "Parcours"
      />
  <SectionBase
        title="Ce métier est fait pour toi ?"
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
import Parcours from '@/assets/images/metiers/Parcours_JAF_violet-02.webp'
import Photo from '@/assets/images/metiers/Robin.webp'

</script>