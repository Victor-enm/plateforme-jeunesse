<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Les Classes Prépas Talents de l'ENM"
        text="Un coup de pouce vers la magistrature"
        bgColor="bg-gris"
        iconName="codes"
        pictoSize="w-30 h-30"
        />

      
      <SectionBase
      title= "C’est quoi une Classe Prépa Talents ?"
      text= "Les Classes Prépas Talents de l’École nationale de la magistrature (ENM), ce sont des préparations gratuites et accompagnées pour aider des étudiants méritants à réussir le concours d’entrée."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          title: 'L’objectif ?',
          description: 'Ouvrir l’accès à la magistrature à tous les profils, y compris ceux qui n’auraient pas forcément imaginé cette voie.',
          css: '!bg-gris !text-violet !border-gris'
        }
      ]"
      />

      <SectionBase
      title= "Où ça se passe ?"
      text= "Ces classes sont réparties dans plusieurs villes en France."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      card= "true"
      :cards= "[
        {
          title: 'Bordeaux',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1 !pt-3 !pb-1'
        },
        {
          title: 'Paris',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
        {
          title: 'Lyon',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
        {
          title: 'Limoges',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
        {
          title: 'Orléans',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
        {
          title: 'Besançon',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
        {
          title: 'Douai',
          css: '!bg-transparent !text-violet !border-violet !pt-3 !pb-1'
        },
      ]"
      textSecondary="Chaque classe est liée à une université partenaire et propose un vrai accompagnement pédagogique."
      />

      <SectionBase
      title= "À qui ça s’adresse ?"
      text= "Les Classes Prépas Talents sont ouvertes à des étudiants remplissant certains critères."
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          title: 'Être de nationalité française',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
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
          title: 'Être motivé… vraiment motivé !',
          css: '!bg-transparent !text-gris !border-gris !pt-3 !pb-1'
        },
      ]"
      textSecondary="Un dossier de candidature est à déposer, suivi d’un entretien de motivation avec un jury."
      />

      <SectionBase
      title= "Concrètement, on y fait quoi ?"
      text= "La prépa commence en octobre et dure toute l’année scolaire. Elle permet de se préparer à deux concours."
      bgColor= "bg-rouge"
      txtColor= "text-gris"
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
      <h2 class='text-4xl md:text-4xl mb-4 text-gris'>“Culture juridique et pratiques judiciaires”</h2>
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
          title: 'Montant minimum 382,80 € par mois',
          css: '!bg-transparent !text-violet !border-violet'
        },
        {
          title: 'Une aide complémentaire de 4000 € peut aussi être versée pendant l’année.',
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
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          title: 'Il est ouvert à ceux qui n’oseraient pas forcément postuler autrement.',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          title: 'Il prépare sérieusement à une carrière dans la justice.',
          css: '!bg-gris !text-violet !border-gris'
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
        txtColor="text-gris"
        :buttons="[
          {
            text: 'École nationale de la magistrature',
            to: '/ENM',
            variant: 'white',
            class: 'mb-5'
          },
          {
            text: 'Quel magistrat es-tu ?',
            to: '/',
            variant: 'fullViolet',
          },
        ]"
      />
    </main>
  </template>
  
  <script setup>  
  
  </script>
  