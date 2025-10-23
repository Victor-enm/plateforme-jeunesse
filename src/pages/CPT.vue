<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        text="Les Classes Prépas Talents de l'ENM, un coup de pouce vers la magistrature"
        bgColor="bg-gris"
        iconName="Logo_Prepa_Talents"
        pictoSize="w-90 h-90 p-0 !-m-20 2xl:w-120 2xl:h-100"
        />

      
      <SectionBase
      title= "C’est quoi une Classe Prépa Talents&nbsp;?"
      text= "Les Classes Prépas Talents de l’École nationale de la magistrature (ENM), ce sont des préparations gratuites et accompagnées pour aider des étudiants méritants à réussir le concours d’entrée."
      bgColor= "bg-violet"
      txtColor= "text-gris 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          title: 'L’objectif ?',
          description: 'Ouvrir l’accès à la magistrature à tous les profils, y compris ceux qui n’auraient pas forcément imaginé cette voie.',
          css: '!bg-transparent !text-gris !border-gris mb-12'
        }
      ]"
      instagramCPT="true"
      />

      <SectionBase
      title= "Où ça se passe&nbsp;?"
      text= "Ces classes sont réparties dans plusieurs villes en France."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      :imgSrc3="Carte"
      textSecondary="Chaque classe est liée à une université partenaire et propose un vrai accompagnement pédagogique."
      />

      <SectionBase
      title= "À qui ça s’adresse&nbsp;?"
      text= "Les Classes Prépas Talents sont ouvertes à des étudiants remplissant certains critères."
      bgColor= "bg-violet"
      txtColor= "text-gris 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          title: 'Être de nationalité française',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1 !font-inter'
        },
        {
          title: 'Être titulaire (ou en cours d’obtention) d’un Bac+4',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
        },
        {
          title: 'Être boursier sur critères sociaux',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
        },
        {
          title: 'Avoir moins de 50 ans et 5 mois au 1er janvier de l’année du concours',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
        },
        {
          title: 'Être motivé… vraiment motivé&nbsp;!',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
        },
      ]"
      textSecondary="Un dossier de candidature est à déposer, suivi d’un entretien de motivation avec un jury."
      />

      <SectionBase
      title= "Concrètement, on y fait quoi ?"
      text= "La prépa commence en octobre et dure toute l’année scolaire. Elle permet de se préparer à deux concours."
      bgColor= "bg-rouge"
      txtColor= "text-gris 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          title: 'Le 1er concours de l’ENM',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          title: 'Le 1er concours spécial “Talents”',
          css: '!bg-transparent !text-gris !border-gris'
        },
      ]"
      textSecondary="En bonus, les élèves obtiennent un diplôme de l’ENM intitulé
      <br><br>
      <h2 class='text-4xl md:text-4xl mb-4 text-gris font-sans'>“Culture juridique et pratiques judiciaires”</h2>
      Parfait pour enrichir son parcours."
      />

      <SectionBase
      iconName="piece"
      pictoSize="w-30 h-30"
      title= "Et niveau finances ?"
      text= "Bonne nouvelle : l’année est gratuite et en plus, une bourse est versée chaque mois, calculée selon les critères du CROUS."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      card= "true"
      :cards= "[
        {
          title: 'Montant minimum 382,80&nbsp;€ par mois',
          css: '!bg-transparent !text-violet !border-violet'
        },
        {
          title: 'Une aide complémentaire de 4000&nbsp;€ peut aussi être versée pendant l’année.',
          css: '!bg-transparent !text-violet !border-violet'
        },
      ]"
      />

      <SectionBase
      title= "À retenir"
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          title: 'Ce programme est une vraie chance d’accéder à un métier qui a du sens.',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          title: 'Il est ouvert à ceux qui n’oseraient pas forcément postuler autrement.',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          title: 'Il prépare sérieusement à une carrière dans la justice.',
          css: '!bg-transparent !text-gris !border-gris'
        },
      ]"
      textSecondary="Plus d’infos sur <a href='https://www.enm.justice.fr/' target='_blank' class='underline'>enm.justice.fr</a>"
      />
      
      <SectionBase
        title="Ce métier est fait pour toi ?"
        text="Si tu es curieux, que tu aimes argumenter, débattre et comprendre le fonctionnement de la justice, alors pourquoi ne pas envisager cette voie ? <br>
Devenir magistrat, c’est un choix ambitieux, mais qui te donnera un rôle clé dans la société. <br>
Tu veux faire respecter la loi et aider les autres ? Alors lance-toi dans cette aventure passionnante ! "
        bgColor="bg-rouge"
        iconName="code penal"
        txtColor="text-gris 2xl:pb-6"
        :buttons="[
          {
            text: 'École nationale de la magistrature',
            to: '/ENM',
            variant: 'white',
            class: 'mb-5 mr-5'
          },
          {
            text: 'Quel magistrat es-tu ?',
            to: '/',
            variant: 'fullViolet',
          },
        ]"
      />

    <Footer />

    </main>

  </template>
  
  <script setup>  
import Footer from '@/components/Footer.vue'
import Carte from '@/assets/images/Carte_france_low.webp'
  
  </script>
  