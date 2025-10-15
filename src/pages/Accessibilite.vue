 <template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Accessibilité"
        text="Le site EMCQ est développé selon les recommandations du référentiel général d’amélioration de l’accessibilité (RGAA) pour être accessible à tous les usagers quel que soit le matériel ou le logiciel utilisé pour naviguer sur internet.
Cette déclaration d’accessibilité s’applique au site etre-magistrat-cest-quoi.fr
<br><br>
Nous nous efforçons de concevoir, développer et maintenir l'application en respectant les normes d'accessibilité. À cette fin, des tests automatisés ont été réalisés à l'aide de l'outil Lighthouse.
<br><br>
Cependant, l'École Nationale de la Magistrature n'a pas encore réalisé d'audit de conformité complet. L'accessibilité est un processus continu, et nous nous engageons à poursuivre nos efforts pour améliorer l'application. "
        bgColor="bg-gris"
        iconName="crayons"
        responsivTxt="lg:flex-row"
        pictoSize="lg:relative lg:top-20 lg:right-90"
      />

      <SectionBase
        title="Défenseur des droits"
        text="Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.<br><br>
        Plusieurs moyens sont à votre disposition :<br>
        <ul>
          <li>un <a href='https://www.defenseurdesdroits.fr/nous-contacter-355'>formulaire de contact</a></li>
          <li>la <a href='https://www.defenseurdesdroits.fr/carte-des-delegues'>liste des délégués près de chez vous</a> avec leurs informations de contact directs</li>
          <li>un numéro de téléphone : le 09 69 39 00 00 du lundi au vendredi de 8h00 à 20h00 (coût d’un appel local)</li>
          <li>une adresse postale dans <a href='https://lannuaire.service-public.fr/autorites-independantes/autorite-administrative-independante_195381'>l’annuaire de l’administration</a></li>
        </ul>
        <br>
          "
        bgColor="bg-rouge"
        txtColor="text-gris"
        responsivTxt="lg:flex-row"
      />

  
      <Footer />
    </main>
  
    
  </template>
  <script setup>
import Footer from '../components/Footer.vue'

</script>