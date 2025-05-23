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
            to: '/',
            variant: 'white',
          },
        ]"
        />

        <SectionImage
        title="Une entrée solennelle dans la magistrature"
        text="Félicitations, après 4 années passées sur les bancs de l’université et une solide préparation, le concours est réussi ! Les nouveaux élèves magistrats, appelés auditeurs de justice, entament leur parcours par un moment marquant : la prestation de serment. Cette grande cérémonie solennelle symbolise leur engagement dans la magistrature. Ce jour-là, devant les plus hautes autorités judiciaires, ils revêtent leur robe pour la première fois et prononcent leur serment, un instant riche en émotions qui marque le début de leur engagement."
        imgSrc="src/assets/images/test2.jpg"
        bgColor="bg-violet"
        cardTitle="Bon à savoir !"
        cardText="A compter de leur entrée à l’ENM, les élèves magistrats perçoivent une rémunération de 1907€ par mois."
        />
          
        <SectionVideo
        bgColor="bg-violet"
        videoId="https://www.youtube.com/embed/I59NnurT_jE"

        />
    </main>
  
    
  </template>