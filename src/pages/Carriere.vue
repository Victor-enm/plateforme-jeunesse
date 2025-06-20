<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Une carrière dans la magistrature"
        text="Devenir magistrat, c’est choisir un métier au cœur de la justice. Juges et procureurs veillent à appliquer la loi, protéger les citoyens et garantir l’équité. Cette carrière exige rigueur, sens de l’éthique et esprit d’analyse. Après des études de droit et une formation spécialisée, les magistrats prennent des décisions qui impactent la société. Un choix ambitieux pour celles et ceux qui veulent s’engager pour la justice et l’intérêt général."
        bgColor="bg-gris"
        iconName="themis"
        pictoSize="w-30 h-30"
        />

        <SectionBase
        title="Pourquoi choisir ce métier ?"
        text="Devenir magistrat, c’est choisir une carrière où chaque journée est différente. <br><br>

        Tu peux aider les victimes, faire respecter la loi et avoir un impact direct sur la société. C’est aussi un métier où tu as de grandes responsabilités et où tes décisions comptent. <br><br>

        Si tu cherches un travail stimulant, utile et reconnu, cette voie est faite pour toi !"
        bgColor="bg-rouge"
        txtColor="text-gris"
        :buttons="[
          {
            text: 'Quel magistrat es-tu ?',
            to: '/',
            variant: 'white',
          },
        ]"
        
        />

      <SectionBase
      title= "Quelles études suivre ?"
      text= "Le chemin pour devenir magistrat demande de la détermination, mais il est accessible avec du travail et de la motivation. Après le bac, il faut faire des études de droit."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      card= "true"
      :cards= "[
        {
          description: 'Une licence (Bac +3) pour apprendre les bases du droit.',
        },
        {
          description: 'Un master (Bac +5) pour approfondir tes connaissances.',
        }
      ]"
      textSecondary="Ensuite, tu devras passer le concours de l’École nationale de la magistrature (ENM), qui forme les futurs juges et procureurs pendant 31 mois.<br><br>

        Si tu ne veux pas suivre le parcours classique, il existe des passerelles ! Des avocats, des greffiers ou des policiers expérimentés peuvent passer un concours spécial pour rejoindre la magistrature."
      imgSrc2= "src/assets/icons/parcours magistrat.svg"
      />

      <SectionBase
      title= "Combien gagne un magistrat ?"
      text= "L’un des avantages de ce métier, c’est aussi la sécurité financière.
<br><br>
Pendant ta formation à l’ENM, même en tant qu’élève magistrat, tu seras rémunéré. Tu percevras 1907 € net par mois pendant tes 31 mois de formation.
<br><br>
Au début de ta carrière, ton salaire sera autour de 2600 à 3000€ net par mois. Cette rémunération évoluera en même temps que ta carrière puisqu’elle attendra 4702 € à partir de la 6e année d’activité et 7260 € lorsque tu auras plus de 19 ans de carrière. "
      bgColor= "bg-rouge"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          description: 'Ton salaire pourra naturellement être plus élevé si tu évolue dans la hiérarchie judicaire',
          css: 'bg-gris !border-gris !rounded-4xl text-violet',
        }
      ]"

      />


      <SectionBase
      title= "Comment peut évoluer ta carrière ?"
      text= "Tu ne resteras pas au même poste toute ta vie ! "
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          description: 'changer de spécialité (juge pour enfants, juge d’instruction, procureur…)',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          description: 'Monter en grade et devenir président de tribunal ou procureur général',
          css: '!bg-transparent !text-gris !border-gris'
        },
        {
          description: 'Rejoindre de grandes institutions comme la Cour de cassation ou le Conseil d’État',
          css: '!bg-transparent !text-gris !border-gris'
        }
      ]"
      textSecondary="Au cours de sa carrière, tu pourras aussi évoluer entre les fonctions du siège et du parquet et exercer dans des champs d’activité variés : dans les domaines économique, international, carcéral, hospitalier, familial ou de la protection de l’enfance, bref pas de routine !"
      
      />


      <SectionDecouvre
      title= "Des opportunités en dehors des tribunaux français ?"
      text= "Au terme de quatre années d’exercice, tu pourras accéder à des fonctions en détachement au sein d’autres administrations ou à l’international.
<br><br>
Un magistrat en détachement est un juge ou un procureur qui quitte temporairement ses fonctions judiciaires habituelles pour exercer une activité professionnelle différente, tout en conservant son statut de magistrat et ses droits à l’avancement. 
<br><br>
Par exemple, tu pourras travailler dans des ministères variés tels que le ministère des Armées, de l’Intérieur, de la Santé, de l’Economie et des Finances, des Outre-Mer ou auprès d’institutions publiques telles que le Défenseur des droits. 
<br><br>
Si tu souhaites travailler à l’international, plusieurs possibilités s’offrent à toi :"
      bgColor= "bg-rouge"
      txtColor= "text-gris"
      :cards= "[
        {
          title: 'Être magistrat de liaison',
          description: 'A completer',
        },
        {
          title: 'Négociateur pour la France',
          description: 'Négocier pour la France auprès d’une organisation internationale telle que l’UE, le Conseil de l’Europe ou l’ONU.',
        },
        {
          title: 'Être un expert judiciaire français',
          description: 'A completer',
        },
        {
          title: 'Exercer des fonctions juridictionnelles',
          description: 'A completer',
        },
    ]"
    />

    <SectionBase
        title="Ce métier est fait pour toi ?"
        text="Si tu es curieux, que tu aimes argumenter, débattre et comprendre le fonctionnement de la justice, alors pourquoi ne pas envisager cette voie ? <br>
Devenir magistrat, c’est un choix ambitieux, mais qui te donnera un rôle clé dans la société. <br>
Tu veux faire respecter la loi et aider les autres ? Alors lance-toi dans cette aventure passionnante ! "
        bgColor="bg-gris"
        iconName="code penal"
        txtColor="text-violet"
        :buttons="[
          {
            text: 'École nationale de la magistrature',
            to: '/ENM',
            variant: 'violet',
            class: 'mb-5'
          },
          {
            text: 'Quel magistrat es-tu ?',
            to: '/',
            variant: 'fullRed',
          },
        ]"
      />
      
    </main>
  </template>
  
  <script setup>  
  
  </script>
  