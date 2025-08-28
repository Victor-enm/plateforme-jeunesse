<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="L’école nationale de la magistrature"
        text="L’École nationale de la magistrature (ENM) offre une formation unique pour devenir juge ou procureur, alliant théorie et pratique. 
<br><br>
Découvre la formation, la vie sur le campus ainsi que les témoignages d’élèves de l’ENM."
        bgColor="bg-gris"
        iconName="toque"
        pictoSize="w-30 h-30"
        />

        <SectionBase
        title="La formation à l’école nationale de la magistrature"
        text="Une formation d’excellence pour devenir magistrat"
        txtColor="text-gris"
        bgColor="bg-rouge"
        :buttons="[
          {
            text: 'Découvrir la formation',
            href: '#formation',
            variant: 'fullWhite',
            class: 'lg:mt-5',
          },
        ]"
        />

        <SectionImage
        title="Une entrée solennelle dans la magistrature"
        text="Félicitations, après 4 années universitaires et une solide préparation, le concours est réussi ! Les nouveaux élèves magistrats entament leur parcours par un moment marquant : la prestation de serment. Cette cérémonie solennelle symbolise leur engagement dans la magistrature. Devant les plus hautes autorités judiciaires, ils revêtent leur robe pour la première fois et prononcent leur serment, un instant riche en émotions !"
        ancre="formation"
        :imgSrc=Fi1
        bgColor="bg-violet"
        piece="relative !w-20 !h-20 -top-15 rotate-25 -mb-20"
        cardTitle="Bon à savoir !"
        cardText="A compter de leur entrée à l’ENM, les élèves magistrats perçoivent une rémunération de 1907€ par mois."
        />
          
        <SectionVideo
        bgColor="bg-violet"
        videoId="https://www.youtube.com/embed/HtS4qBiiKfs?si=X6z39E2mpMc4J_Lr"

        />
        <SectionBase
        :imgSrc=Fi2
        title="Une formation immersive de 2 ans et demi"
        text="L’ENM propose un parcours complet combinant enseignements théoriques et mises en situation réelles. L’objectif ? Apprendre à juger avec compétence, éthique, discernement et humanité, tout en comprenant les enjeux sociaux et institutionnels du système judiciaire.
Ce cursus alterne entre :"
        txtColor="text-violet"
        bgColor="bg-gris"
        card="true"
        :cards="[
          {
            title: 'Des cours à l’ENM à Bordeaux',
            description: 'où les auditeurs apprennent les techniques professionnelles des magistrats',
            css: 'bg-transparent border-violet text-violet',
          },
           {
            title: 'Un stage en cabinet d’avocat',
            description: 'Pour mieux connaitre les partenaires habituels du magistrat',
            css: 'bg-transparent border-violet text-violet',
          },
           {
            title: 'Un stage en tribunal judiciaire',
            description: 'où les auditeurs s’exercent à toutes les fonctions en participant à de véritables audiences et assistent les magistrats dans leur décision',
            css: 'bg-transparent border-violet text-violet',
          },
           {
            title: 'Un passage en unité de police ou de gendarmerie',
            description: 'afin de comprendre les procédures d’enquête et le travail des forces de sécurité intérieure',
            css: 'bg-transparent border-violet text-violet',
          },
           {
            title: 'Un stage en milieu pénitentiaire',
            description: 'pour mieux appréhender les enjeux de l’exécution des peines et le rôle des juges dans le suivi des condamnés',
            css: 'bg-transparent border-violet text-violet',
          },
        ]"
        />

        <SectionVideo
        bgColor="bg-gris"
        videoId="https://www.youtube.com/embed/I59NnurT_jE"

        />

        <SectionBase
        title="Une pédagogie moderne et innovante"
        text="L’ENM mise sur des méthodes d’enseignement variées et interactives. Ici, pas de théorie pure, mais une formation concrète et dynamique, adaptée aux réalités du terrain.
Les cours se déclinent sous différents formats :"
        txtColor="text-gris"
        bgColor="bg-rouge"
        card="true"
        :cards="[
          {
            title: 'Travail en petits groupes à partir de dossiers réels',
            css: 'bg-gris !border-gris !font-inter text-rouge',
          },
           {
            title: 'Cours et conférences en amphithéâtre',
            description: 'Souvent animés par des magistrats expérimentés',
            css: 'bg-gris !border-gris !font-inter text-rouge',
          },
           {
            title: 'Tables rondes et débats',
            description: 'permettant d’analyser différents points de vue sur des questions de justice',
            css: 'bg-gris !border-gris !font-inter text-rouge',
          },
           {
            title: 'Exercices écrits et simulations',
            description: 'pour mettre les auditeurs en situation de rédaction de jugements et de prises de décisions judiciaires',
            css: 'bg-gris !border-gris !font-inter text-rouge',
          },
           {
            title: 'Apprentissage en ligne',
            description: 'offrant des modules interactifs sur le droit, la déontologie et les techniques d’audience',
            css: 'bg-gris !border-gris !font-inter text-rouge',
          },
        ]"
        />

        <SectionVideo
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/I59NnurT_jE"

        />

        <SectionBase
        title="Un encadrement par des professionnels du droit"
        text="L’ENM est dirigée par une équipe expérimentée, composée de magistrats et de professionnels du monde judiciaire."
        txtColor="text-gris"
        bgColor="bg-violet"
        card="true"
        :cards="[
          {
            title: '30 formateurs',
            description: 'magistrats détachés à plein temps, appelés coordonnateurs de formation, répartis par domaine de compétence (selon leur fonction d’origine), qui conçoivent les programmes pédagogiques et accompagnent les auditeurs dans leur progression',
            css: 'bg-gris border-gris text-violet',
          },
           {
            title: 'Mais aussi',
            description: 'Un directeur des services de greffe judiciaire, une greffière, un avocat, un médiateur et un professeur de langues.',
            css: 'bg-gris border-gris text-violet',
          },
           {
            title: '80 juges et procureurs extérieurs',
            description: 'Près de 80 juges et procureurs extérieurs qui interviennent de façon régulière tout en conservant leurs activités professionnelles',
            css: 'bg-gris border-gris text-violet',
          },
           {
            title: '750 intervenants ponctuels',
            description: 'Plus de 750 intervenants ponctuels (avocats, médecins, chercheurs et autres spécialistes en droit, sociologie, psychologie, criminologie et bien d’autres disciplines',
            css: 'bg-gris border-gris text-violet',
          },
        ]"
        textSecondary="Cette diversité des intervenants offre un apprentissage riche et connecté aux réalités du terrain."
        />
        <SectionVideo
        bgColor="bg-violet"
        videoId="https://www.youtube.com/embed/I59NnurT_jE"

        />


         <SectionBase
        :imgSrc=Campus
        title="La vie de campus"
        text="L’ENM : bien plus qu’une école, une véritable immersion dans le monde judiciaire
Depuis sa création en 1958, l’Ecole nationale de la magistrature est l’unique école de formation des magistrats en France. Son rôle ? Former des juges et procureurs capables de comprendre la société dans laquelle ils rendent la justice.
<br><br>
Ici l’enseignement consiste à apprendre à utiliser ses connaissances juridiques pour exercer les fonctions de magistrat."
        txtColor="text-gris"
        bgColor="bg-rouge"
        card="true"
        :cards="[
          {
            description: 'L’ENM favorise les rencontres entre les élèves magistrats et d’autres professionnels du droit comme les avocats, policiers, experts médicaux et sociologues.',
            css: 'bg-gris text-rouge !border-gris',
          },
           {
            description: 'La formation met l’accent sur les compétences humaines et éthiques, essentielles pour être un bon magistrat.',
            css: 'bg-gris text-rouge !border-gris',
          }
        ]"
        textSecondary="L’ENM, c’est l’endroit où l’on devient magistrat non seulement en apprenant la pratique judiciaire (le raisonnement et tous les actes juridiques), mais aussi en comprenant la réalité sociale et humaine des affaires jugées au quotidien."
        />

        <SectionBase
        :imgSrc=Campus
        title="Une localisation idéale au cœur de Bordeaux"
        text="L’ENM est implantée en plein centre-ville de Bordeaux, une métropole dynamique classée au patrimoine mondial de l’UNESCO."
        txtColor="text-violet"
        bgColor="bg-gris"
        card="true"
        :cards="[
          {
            description: 'Le site historique Pey-Berland, situé 10 rue des Frères Bonie, est à deux pas du Palais de Justice et de nombreux lieux culturels.',
            css: 'bg-gris border-violet border-2 text-violet',
          },
           {
            description: 'En 2024, face à l’augmentation du nombre d’auditeurs de justice, un second campus a ouvert ses portes dans un quartier moderne et éco-conçu, à seulement 20 minutes du site principal.',
            css: 'bg-gris border-violet border-2 text-violet',
          },
           {
            description: 'Bordeaux, ville étudiante, offre une vie culturelle et sociale riche : festivals, concerts, expositions, et bien sûr, une scène gastronomique incontournable !',
            css: 'bg-gris border-violet border-2 text-violet',
          },
          
        ]"
        />

        <SectionBase
        :imgSrc=Campus
        title="Envie de décompresser après les cours ?"
        txtColor="text-gris"
        bgColor="bg-rouge"
        card="true"
        :cards="[
          {
            description: 'Les plages de l’Atlantique sont à seulement une heure de route, parfaites pour une session de surf ou un moment de détente au soleil.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
           {
            description: 'Le Bassin d’Arcachon, avec sa Dune du Pilat et ses paysages magnifiques, est un lieu incontournable pour s’évader le temps d’un week-end.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
           {
            description: 'Les vignobles bordelais, mondialement connus, entourent la ville et offrent de belles excursions pour découvrir le patrimoine régional.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
          
        ]"
        />

        <SectionBase
        title="Les élèves racontent leur parcours"
        text="Curieux de savoir ce que signifie réellement être élève magistrat à l’ENM ? Rien de mieux que d’écouter ceux qui le vivent au quotidien !
<br><br>
Les élèves magistrats des promotions 2024 et 2025 partagent leurs expériences, leurs défis et leurs réussites. De la préparation du concours aux stages en juridiction, en passant par les moments forts de la formation, ils dévoilent tout :"
        txtColor="text-gris"
        bgColor="bg-violet"
        card="true"
        :cards="[
          {
            description: 'Pourquoi avoir choisi la magistrature et comment ils se sont préparés au concours.',
            css: 'bg-gris border-gris text-violet border-2',
          },
           {
            description: 'Le quotidien à l’ENM entre cours, mises en situation et échanges avec des professionnels du droit.',
            css: 'bg-gris border-gris text-violet border-2',
          },
           {
            description: 'Les défis et réussites tout au long de l’apprentissage.',
            css: 'bg-gris border-gris text-violet border-2',
          },
          {
            description: 'Les émotions fortes qui marquent le parcours, des premières audiences aux stages en juridiction.',
            css: 'bg-gris border-gris text-violet border-2',
          },
          
        ]"
        textSecondary="Ces témoignages permettent de se projeter concrètement dans une future carrière et de mieux comprendre ce qui attend les futurs magistrats."
        />
        <Footer />
    </main>
  
    
  </template>
  <script setup>
import Footer from '@/components/Footer.vue'
import Fi1 from '@/assets/images/pageENM/FI1_.webp'
import Fi2 from '@/assets/images/pageENM/FI2_.webp'
import Campus from '@/assets/images/pageENM/Vie de campus_cour ENM Bordeaux_.webp'

</script>