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

        <SectionBase
        title="Une entrée solennelle dans la magistrature"
        text="Félicitations, après 4 années universitaires et une solide préparation, le concours est réussi ! Les nouveaux élèves magistrats entament leur parcours par un moment marquant&nbsp;: la prestation de serment. Cette cérémonie solennelle symbolise leur engagement dans la magistrature. Devant les plus hautes autorités judiciaires, ils revêtent leur robe pour la première fois et prononcent leur serment, un instant riche en émotions !"
        ancre="formation"
        txtColor="text-gris"
        :imgSrc= Entree
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
Ce cursus alterne entre&nbsp;:"
        txtColor="text-violet"
        bgColor="bg-gris"
        card=true
        :cards="[
          {
            title: 'Des cours à l’ENM à Bordeaux',
            description: 'où les auditeurs apprennent les techniques professionnelles des magistrats',
            css: 'bg-transparent border-violet text-violet',
          },
           {
            title: 'Un stage en cabinet d’avocat',
            description: 'pour mieux connaitre les partenaires habituels du magistrat',
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
            css: 'bg-transparent border-violet text-violet pb-12',
          },
        ]"
        />

        <SectionVideo
        bgColor="bg-gris"
        videoId="https://www.youtube.com/embed/0pasDbselfw"

        />

        <SectionBase
        title="Une pédagogie moderne et innovante"
        text="L’ENM mise sur des méthodes d’enseignement variées et interactives. Ici, pas de théorie pure, mais une formation concrète et dynamique, adaptée aux réalités du terrain.
Les cours se déclinent sous différents formats&nbsp;:"
        txtColor="text-gris"
        bgColor="bg-rouge"
        card=true
        :cards="[
          {
            title: 'Travail en petits groupes à partir de dossiers réels',
            css: 'bg-transparent !border-gris !font-inter text-gris',
          },
           {
            title: 'Cours et conférences en amphithéâtre',
            description: 'Souvent animés par des magistrats expérimentés',
            css: 'bg-transparent !border-gris !font-inter text-gris',
          },
           {
            title: 'Tables rondes et débats',
            description: 'permettant d’analyser différents points de vue sur des questions de justice',
            css: 'bg-transparent !border-gris !font-inter text-gris',
          },
           {
            title: 'Exercices écrits et simulations',
            description: 'pour mettre les auditeurs en situation de rédaction de jugements et de prises de décisions judiciaires',
            css: 'bg-transparent !border-gris !font-inter text-gris',
          },
           {
            title: 'Apprentissage en ligne',
            description: 'offrant des modules interactifs sur le droit, la déontologie et les techniques d’audience',
            css: 'bg-transparent !border-gris !font-inter text-gris',
          },
        ]"
        />

        <SectionVideo
        bgColor="bg-rouge"
        videoId="https://www.youtube.com/embed/3noWeYM3D6c"

        />

        <SectionBase
        title="Un encadrement par des professionnels du droit"
        text="L’ENM est dirigée par une équipe expérimentée, composée de magistrats et de professionnels du monde judiciaire."
        txtColor="text-gris"
        bgColor="bg-violet"
        card=true
        :cards="[
          {
            title: '30 formateurs',
            description: 'magistrats détachés à plein temps, appelés coordonnateurs de formation, répartis par domaine de compétence (selon leur fonction d’origine), qui conçoivent les programmes pédagogiques et accompagnent les auditeurs dans leur progression',
            css: 'bg-transparent !border-gris text-gris',
          },
           {
            title: 'Mais aussi',
            description: 'un directeur des services de greffe judiciaire, une greffière, un avocat, un médiateur et un professeur de langues.',
            css: 'bg-transparent !border-gris text-gris',
          },
           {
            title: '80 juges et procureurs extérieurs',
            description: 'qui interviennent de façon régulière tout en conservant leurs activités professionnelles',
            css: 'bg-transparent !border-gris text-gris',
          },
           {
            title: '750 intervenants ponctuels',
            description: 'avocats, médecins, chercheurs et autres spécialistes en droit, sociologie, psychologie, criminologie et bien d’autres disciplines',
            css: 'bg-transparent !border-gris text-gris',
          },
        ]"
        textSecondary="Cette diversité des intervenants offre un apprentissage riche et connecté aux réalités du terrain."
        />
        <SectionVideo
        bgColor="bg-violet"
        instagram="true"

        />


         <SectionBase
        :imgSrc= VieCampus
        title="La vie de campus"
        text="L’ENM : bien plus qu’une école, une véritable immersion dans le monde judiciaire. Depuis sa création en 1958, l’Ecole nationale de la magistrature est l’unique école de formation des magistrats en France. Son rôle ? Former des juges et procureurs capables de comprendre la société dans laquelle ils rendent la justice.
<br><br>
Ici l’enseignement consiste à apprendre à utiliser ses connaissances juridiques pour exercer les fonctions de magistrat."
        txtColor="text-gris"
        bgColor="bg-rouge"
        card=true
        :cards="[
          {
            description: 'L’ENM favorise les rencontres entre les élèves magistrats et d’autres professionnels du droit comme les avocats, policiers, experts médicaux et sociologues.',
            css: 'bg-transparent text-gris !border-gris -mt-6 xl:mt-0',
          },
           {
            description: 'La formation met l’accent sur les compétences humaines et éthiques, essentielles pour être un bon magistrat.',
            css: 'bg-transparent text-gris !border-gris',
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
        card=true
        :cards="[
          {
            description: 'Le site historique Pey-Berland, situé 10 rue des Frères Bonie, est à deux pas du Palais de Justice et de nombreux lieux culturels.',
            css: 'bg-gris border-violet border-2 text-violet -mt-6 xl:mt-0',
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
        :imgSrc= Decompression
        title="Envie de décompresser après les cours&nbsp;?"
        txtColor="text-gris"
        bgColor="bg-rouge"
        card=true
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
Les élèves magistrats des promotions 2024 et 2025 partagent leurs expériences, leurs défis et leurs réussites. De la préparation du concours aux stages en juridiction, en passant par les moments forts de la formation, ils dévoilent tout&nbsp;:"
        txtColor="text-gris"
        bgColor="bg-violet"
        card=true
        :cards="[
          {
            description: 'Pourquoi avoir choisi la magistrature et comment ils se sont préparés au concours.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
           {
            description: 'Le quotidien à l’ENM entre cours, mises en situation et échanges avec des professionnels du droit.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
           {
            description: 'Les défis et réussites tout au long de l’apprentissage.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
          {
            description: 'Les émotions fortes qui marquent le parcours, des premières audiences aux stages en juridiction.',
            css: 'bg-transparent !border-gris text-gris border-2',
          },
          
        ]"
        textSecondary="Ces témoignages permettent de se projeter concrètement dans une future carrière et de mieux comprendre ce qui attend les futurs magistrats."
        />
        <section class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-34
        2xl:pt-40 bg-gris text-violet" > 
       
          <h2 class="text-4xl lg:text-2xl mb-4 xl:text-8xl lg:w-4xl 2xl:w-5xl">Découvrir leurs histoires en vidéo</h2>
          <div class="flex flex-wrap justify-center w-full max-w-6xl gap-6 mt-5">
          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DF-BapysnxQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DF-BapysnxQ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Voir cette publication sur Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DF-BapysnxQ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Une publication partagée par ENM (@enm_france)</a></p></div></blockquote>

          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DLkTVvGt3RD/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DLkTVvGt3RD/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Voir cette publication sur Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DLkTVvGt3RD/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Une publication partagée par ENM (@enm_france)</a></p></div></blockquote>

          <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJjhWl6NzXe/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DJjhWl6NzXe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Voir cette publication sur Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DJjhWl6NzXe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Une publication partagée par ENM (@enm_france)</a></p></div></blockquote>

          </div>
        </section>
        
        <Footer />
    </main>
  
    
  </template>
  <script setup>
import Footer from '@/components/Footer.vue'
import Fi1 from '@/assets/images/pageENM/FI1_.webp'
import Fi2 from '@/assets/images/pageENM/FI2_.webp'
import Campus from '@/assets/images/pageENM/Vie de campus_cour ENM Bordeaux_.webp'
import Decompression from '@/assets/images/pageENM/envie_de_decompresser.webp'
import VieCampus from '@/assets/images/pageENM/Vie_de_campus.webp'
import Entree from '@/assets/images/pageENM/Une_entree_solennelle.webp'
import { onMounted } from 'vue'


onMounted(() => {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
});

</script>