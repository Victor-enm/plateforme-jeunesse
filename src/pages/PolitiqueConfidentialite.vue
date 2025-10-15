<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Introduction"
        text="La présente politique de confidentialité a pour objectif de vous informer de la manière dont vos données sont traitées dans le cadre de l’utilisation de l'application mobile Magistr'Hâ.
<br><br>
L'application Magistr'Hâ a été conçue pour respecter la vie privée de ses utilisateurs. Elle ne collecte, ne stocke et ne traite aucune donnée personnelle vous concernant."
        bgColor="bg-gris"
        iconName="crayons"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />

      <SectionBase
        title="Données non collectées"
        text="L'application Magistr'Hâ ne demande ni ne collecte aucune information personnelle telle que votre nom, adresse e-mail, numéro de téléphone ou position géographique."
        bgColor="bg-rouge"
        txtColor="text-gris"
        responsivTxt="lg:flex-row"
      />

      <SectionBase
        title="Renvois vers des sites externes"
        text="Le site peut contenir des liens vers des sites web externes (par exemple, YouTube). Lorsque vous cliquez sur ces liens, vous quittez l'application et vous êtes soumis aux politiques de confidentialité de ces sites tiers. Nous vous encourageons à les consulter pour connaître leurs pratiques en matière de traitement des données. L'ENM n'est pas responsable du contenu ni des pratiques de confidentialité de ces sites externes. "
        bgColor="bg-violet"
        iconName="codes"
        txtColor="text-gris"
        pictoSize="md:hidden"
      />

      <SectionBase
        title="Mesure d'audience avec Matomo"
        text="Afin d'analyser l'utilisation de l'application et d'améliorer l'expérience utilisateur, l'ENM utilise le service d'analyse d'audience Matomo Cloud.
Cette mesure d'audience est configurée de manière à ne collecter aucune donnée personnelle identifiante. En particulier :<br>
<ul><li>Les adresses IP sont anonymisées (partiellement masquées).</li>
<li>Aucun cookie n'est utilisé pour suivre les utilisateurs.</li>
<li>Aucune donnée n'est croisée ou reliée à des informations personnelles.</li></ul>
L'objectif de cette analyse est purement statistique et ne permet en aucun cas d'identifier les utilisateurs individuellement."
        bgColor="bg-gris"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />

      <SectionBase
        title="Vos droits"
        text="Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données. Cependant, comme l'application Magistr'Hâ ne collecte aucune donnée personnelle, l'exercice de ces droits (droit d'accès, de rectification, d'effacement, etc.) n'est pas applicable."
        bgColor="bg-rouge"
        responsivTxt="lg:flex-row"
        txtColor="text-gris"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />
      <SectionBase
        title="Contact"
        text="Pour toute question concernant cette politique de confidentialité, vous pouvez contacter l'École Nationale de la Magistrature à l'adresse suivante : <a href='mailto:dpo.enm@justice.fr' class='underline'>dpo.enm@justice.fr</a>."
        bgColor="bg-violet"
        txtColor="text-gris"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />
  
      <Footer />
    </main>
  
    
  </template>
  <script setup>
import Footer from '../components/Footer.vue'

</script>