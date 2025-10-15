<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Mentions légales"
        text="Ce site est édité par l’École nationale de la magistrature (ENM), établissement public à caractère administratif, dont le siège est situé :<br>     
10, rue des Frères Bonie 33000 Bordeaux       <br>
Tél. : +33 (0)5.56.00.10.10
Courriel : accueil-bdx.enm@justice.fr<br><br>
Directeur de la publication :  Henri-Pierre Godey, Chef du service communication<br>
Développement : Victor Prudhon, développeur web<br>
Design : <a href='https://www.charlesalligny.fr/' class='underline'>Charles Alligny</a>"
        bgColor="bg-gris"
        iconName="crayons"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />

      <SectionBase
        title="Hébergement"
        text="Ce site est hébergé par :<br>
Netlify, Inc.<br>
2325 3rd Street, Suite 296<br>
San Francisco, CA 94107<br>
États-Unis<br>
<a href='https://www.netlify.com' target='_blank' class='underline'>https://www.netlify.com</a>
<br><br><br>
Le code source de l’application est disponible en open-source sur la plateforme GitHub."
        bgColor="bg-rouge"
        txtColor="text-gris"
        responsivTxt="lg:flex-row"
      />

      <SectionBase
        title="Propriété intellectuelle"
        text="L’ensemble des contenus (textes, images, vidéos, éléments graphiques, logos, etc.) présents sur ce site sont la propriété exclusive de l’École nationale de la magistrature, sauf mention contraire.
<br><br>
Toute reproduction, représentation, modification, publication ou adaptation des contenus, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’ENM."
        bgColor="bg-violet"
        iconName="codes"
        txtColor="text-gris"
        pictoSize="md:hidden"
      />

      <SectionBase
        title="Crédits"
        text="Remerciements à notre cheffe de projet Laura Masurel, sa méthodologie et son dévouement ont été essentiels pour mener ce projet à bien. Nous tenons également à exprimer notre gratitude à Célia Normand, Lella Desplats pour leurs engagement et la stratégie de communication. Enfin, un grand merci à tous nos bêta-testeurs pour leurs précieux retours. Votre participation active a permis d'améliorer la qualité et l'expérience utilisateur."
        bgColor="bg-gris"
        iconName="crayons"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />
  
      <Footer />
    </main>
  
    
  </template>
  <script setup>
import Footer from '@/components/Footer.vue'

</script>