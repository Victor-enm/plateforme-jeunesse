<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Rencontrons-nous"
        text="Les magistrats veillent à l’application des lois en tant que juges ou procureurs, jouant ainsi un rôle clé dans la société. Découvre celle qui te correspond et les études à suivre en passant le test !"
        bgColor="bg-gris"
        iconName="codes"
        pictoSize="w-30 h-30 2xl:w-45 2xl:h-45"
        down="true"
        />

      
      <SectionBase
      title= "Nos prochains salons"
      text= "Si la magistrature t’intéresse n’hésite pas à venir nous rencontrer sur l’un de nos stands sur ces futurs salons"
      bgColor= "bg-violet"
      txtColor= "text-gris 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          description: 'Samedi 15 novembre 2025 – Salon grandes écoles – L’Etudiant à Rennes ',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Mercredi 26 novembre 2025 – Forum des métiers du droit à Paris',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Du jeudi 11 au dimanche 14 décembre 2025 – Mondial des métiers à Lyon',
          css: '!bg-gris !text-violet !border-gris'
        },
      ]"
      />

      <SectionBase
      title= "Les journées portes ouvertes"
      text= "Si la magistrature t’intéresse n’hésite pas à venir nous rencontrer dans l'École sur l’une de ces dates"
      bgColor= "bg-rouge"
      txtColor= "text-gris 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          description: 'Bordeaux ENM - À venir',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Paris ENM - À venir',
          css: '!bg-gris !text-violet !border-gris'
        },
      ]"
      />

      <SectionBase
      title= "On vient dans ton lycée"
      text= "Nous pouvons aussi nous déplacer dans ton lycée, pour cela suis les étapes ci-dessous."
      bgColor= "bg-gris"
      txtColor= "text-violet 2xl:pb-6"
      card= "true"
      :cards= "[
        {
          description: '1) Parles-en à ton prof principal',
          css: 'flex justify-start !bg-transparent !text-violet !border-violet',
        },
        {
          description: '2) Nous contacter à enm@magistrat.fr',
          css: 'flex justify-start !bg-transparent !text-violet !border-violet',
        },
        {
          description: '3) Nous venons à ta rencontre',
          css: 'flex justify-start !bg-transparent !text-violet !border-violet',
        },
      ]"
      />

      <SectionBase
        title="Suis-nous sur nos différents réseaux"
        text="Instagram, Facebook, LinkedIn ou YouTube nous sommes sur tous les canaux alors n’hésite pas à nous rejoindre pour suivre l’actualité."
        bgColor="bg-violet"
        txtColor="text-gris 2xl:pb-6"
        Rs=true
        />
      <Footer />
    </main>
  </template>
  
  <script setup>
import Footer from '../components/Footer.vue'

</script>
  