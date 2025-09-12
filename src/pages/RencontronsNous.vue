<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Rencontrons-nous"
        text="Les magistrats veillent à l’application des lois en tant que juges ou procureurs, jouant ainsi un rôle clé dans la société. Découvre celle qui te correspond et les études à suivre en passant le test !"
        bgColor="bg-gris"
        iconName="codes"
        pictoSize="w-30 h-30"
        />

      
      <SectionBase
      title= "Nos prochains salons"
      text= "Si la magistrature t’intéresse n’hésite pas à venir nous rencontrer sur l’un de nos stands sur ces futurs salons"
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          description: 'Paris Studyrama - 21 Juin',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Paris Studyrama - 21 Juin',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Paris Studyrama - 21 Juin',
          css: '!bg-gris !text-violet !border-gris'
        },
      ]"
      />

      <SectionBase
      title= "Les journées portes ouvertes"
      text= "Si la magistrature t’intéresse n’hésite pas à venir nous rencontrer dans l'École sur l’une de ces dates"
      bgColor= "bg-rouge"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          description: 'Bordeaux ENM - 18 Mai',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Bordeaux ENM - 18 Mai',
          css: '!bg-gris !text-violet !border-gris'
        },
        {
          description: 'Bordeaux ENM - 18 Mai',
          css: '!bg-gris !text-violet !border-gris'
        },
      ]"
      />

      <SectionBase
      title= "On vient dans ton lycée"
      text= "Nous pouvons aussi nous déplacer dans ton lycée, pour cela suis les étapes ci-dessous."
      bgColor= "bg-gris"
      txtColor= "text-violet"
      card= "true"
      :cards= "[
        {
          description: '1) Parles-en à ton prof principal',
          css: '!bg-transparent !text-violet !border-violet',
          css: 'flex justify-start',
        },
        {
          description: '2) Nous contacter à enm@magistrat.fr',
          css: '!bg-transparent !text-violet !border-violet',
          css: 'flex justify-start',
        },
        {
          description: '3) Nous venons à ta rencontre',
          css: '!bg-transparent !text-violet !border-violet',
          css: 'flex justify-start',
        },
      ]"
      />

      <SectionBase
        title="Suis-nous sur nos différents réseaux"
        text="Instagram, Facebook, LinkedIn ou YouTube nous sommes sur tous les canaux alors n’hésite pas à nous rejoindre pour suivre l’actualité."
        bgColor="bg-violet"
        txtColor="text-gris"
        Rs="true"
        />
      <Footer />
    </main>
  </template>
  
  <script setup>
import Footer from '../components/Footer.vue'

</script>
  