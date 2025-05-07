<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Les métiers de la magistrature"
        text="Les métiers de la magistrature sont essentiels pour garantir le respect des lois et protéger la société. Juges, procureurs et autres professionnels du droit jouent un rôle fondamental dans l’équilibre de la justice. Parcours cette page pour découvrir les différents métiers et les responsabilités qui les accompagnent."
        bgColor="bg-gris"
        :buttons="[
          {
            text: 'Magistrat du siège',
            href: '#magistratsiege',
            variant: 'violet',
            class: 'mb-5'
          },
          {
            text: 'Magistrat du parquet',
            href: '#magistratparquet',
            variant: 'red',
          },
        ]"
        />
      <SectionDecouvre
      title= "Les magistrat(e)s du siège"
      text= "Les magistrat(e)s du siège sont ceux qui nous font face dans une salle d’audience. Ils président les débats, écoutent les parties, analysent les arguments et, après délibération, annoncent les décisions de justice. Leur rôle est essentiel pour garantir l’application des lois et assurer des jugements équitables. "
      bgColor= "bg-violet"
      txtColor= "text-gris"
      ancre= "magistratsiege"
      :cards= "[
        {
          title: 'Juge aux affaires familiales',
          description: 'Il prend des décisions dans les conflits familiaux, comme les divorces. Il veille à protéger les droits des membres de la famille et à garantir le bien-être des enfants dans ces situations.',
        },
        {
          title: 'Juge de l’application des peines',
          description: 'Il veille à ce que les peines de prison soient bien respectées et décide des mesures pour aider les condamnés à se réinsérer dans la société.',
        },
        {
            title: 'Juge civil',
            description: 'Il mène les enquêtes sur les affaires les plus complexes. Son objectif ? Comprendre ce qu’il s’est passé avant qu’un procès ait lieu.',
        },
        {
            title: 'Juge des contentieux et de la protection',
            description: 'Il traite des litiges liés à la protection des personnes vulnérables, comme les mineurs ou les adultes incapables de se défendre seuls.',
        },
        {
            title: 'Juge correctionnel',
            description: 'Il décide si une personne doit rester en prison pendant son enquête ou si elle peut être libérée. Il veille à ce que les droits de la personne soient respectés tout en protégeant la société.',
        },
        {
            title: 'Juge des enfants',
            description: 'Il prend des décisions pour protéger les mineurs en danger. Il peut aussi décider de mesures éducatives pour aider l’enfant à se reconstruire.',
        },
        {
            title: 'Juge d’instruction',
            description: 'Il mène les enquêtes sur les affaires les plus complexes. Son objectif ? Comprendre ce qu’il s’est passé avant qu’un procès ait lieu.',
        },
      ]"
      />

      <SectionDecouvre
      title= "Les magistrat(e)s du parquet"
      text= "À la sortie de l’École nationale de la magistrature, la seule fonction accessible au sein du parquet est celle de substitut du procureur. Les magistrat(e)s du parquet sont les représentants du ministère public. Dans une salle d’audience, ils se tiennent debout, à gauche, et prennent la parole pour défendre les intérêts de la société. Leur rôle est de veiller à l’ordre public, d’engager des poursuites et de requérir des peines, que les magistrats du siège sont libres de suivre ou non. Essentiels au bon fonctionnement de la justice, ils s’assurent que la loi est respectée à chaque étape de la procédure."
      bgColor= "bg-rouge"
      txtColor= "text-gris"
      ancre= "magistratparquet"
      :cards= "[
        {
          title: 'Substitut du procureur',
          description: 'Il assiste le procureur de la République dans ses fonctions. Il joue un rôle clé dans la poursuite des délits et la défense de l’ordre public.',
        },
    ]"
    />

    <SectionBase
        title="Les métiers de la magistrature"
        text="L’École nationale de la magistrature (ENM) offre une formation unique pour devenir juge ou procureur, alliant théorie et pratique. <br><br> Découvre la formation, la vie sur le campus ainsi que les témoignages d’élèves de l’ENM."
        bgColor="bg-gris"
        iconName="toque"
        :buttons="[
          {
            text: 'Découvrir',
            to: '/',
            variant: 'violet',
          },
        ]"
        />
      
    </main>
  </template>
  
  <script setup>  
  
  </script>
  