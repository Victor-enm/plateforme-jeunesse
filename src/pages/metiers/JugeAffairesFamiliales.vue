<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Juge aux affaires familiales"
        text="En tant que juge aux affaires familiales, tu es le spécialiste du droit de la famille dans un tribunal. Tu interviens en particulier pour décider de la résidence des enfants, des droits de visite et d’hébergement et du montant de la pension alimentaire ainsi que dans les procédures de divorce. Ton rôle est de chercher les solutions les plus adaptées possibles dans des situations parfois très difficiles. Tu joues aussi un rôle important de protection en matière de violences intra-familiales. Ta fonction, qui exige que tu sois rigoureux et attentif aux autres, te placera au cœur des enjeux de la famille et de la société. "
        bgColor="bg-gris"
        iconName="themis"
        pictoSize="w-30 h-30"
        :buttons="[
          {
            text: 'Plus d’informations sur ce métier',
            href: '#Decouvre-le-metier',
            variant: 'red',
          },
          {
            text: 'Découvre les autres métiers possibles',
            href: '/les-metiers#magistratsiege',
            variant: 'red',
          },
        ]"
        />

        <SectionVideo
          title="Découvre le métier de juge aux affaires familiales"
          ancre="Decouvre-le-metier"
          videoID="/src/assets/videos/juge_affaires_familiales.mp4"
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
          css: '!font-sans -mt-5 text-violet border-violet',
        },
        {
          description: 'Un master (Bac +5) pour approfondir tes connaissances.',
        }
      ]"
      textSecondary="Ensuite, tu devras passer le concours de l’École nationale de la magistrature (ENM), qui forme les futurs juges et procureurs pendant 31 mois.<br><br>

        Si tu ne veux pas suivre le parcours classique, il existe des passerelles ! Des avocats, des greffiers ou des policiers expérimentés peuvent passer un concours spécial pour rejoindre la magistrature."
      imgSrc2="/src/assets/icons/parcours magistrat.svg"
      />
        <div class="w-25 h-25 relative top-35 rotate-90 left-70 -mt-30"><Piece/></div>
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
        <div class="w-35 h-35 relative bottom-45 left-10 rotate-20 -mb-30"><Piece/></div>
        <div class="w-35 h-35 relative bottom-28 left-30 rotate-90 -mb-40"><Piece/></div>


      <SectionBase
      title= "Comment peut évoluer ta carrière&nbsp;?"
      text= "Tu ne resteras pas au même poste toute ta vie ! "
      bgColor= "bg-violet"
      txtColor= "text-gris"
      card= "true"
      :cards= "[
        {
          description: 'Changer de spécialité (juge pour enfants, juge d’instruction, procureur…)',
          css: '!bg-transparent !text-gris !border-gris',
          typoDesc: '!font-sans',
        },
        {
          description: 'Monter en grade et devenir président de tribunal ou procureur général',
          css: '!bg-transparent !text-gris !border-gris',
          typoDesc: '!font-sans',
        },
        {
          description: 'Rejoindre de grandes institutions comme la Cour de cassation ou le Conseil d’État',
          css: '!bg-transparent !text-gris !border-gris',
          typoDesc: '!font-sans',
        }
      ]"
      textSecondary="Au cours de sa carrière, tu pourras aussi évoluer entre les fonctions du siège et du parquet et exercer dans des champs d’activité variés : dans les domaines économique, international, carcéral, hospitalier, familial ou de la protection de l’enfance, bref pas de routine !"
      
      />


      <SectionDecouvre
      title= "Des opportunités en dehors des tribunaux français ?"
      text= "Au terme de quatre années d’exercice, tu pourras accéder à des fonctions en détachement au sein d’autres administrations ou à l’international.
<br><br>
Un magistrat en détachement est un juge ou un procureur qui quitte temporairement ses fonctions judiciaires habituelles pour exercer une activité professionnelle différente, tout en conservant son statut de magistrat et ses droits à l’avancement. 
<br><br>
Par exemple, tu pourras travailler dans des ministères variés tels que le ministère des Armées, de l’Intérieur, de la Santé, de l’Economie et des Finances, des Outre-Mer ou auprès d’institutions publiques telles que le Défenseur des droits. 
<br><br>
Si tu souhaites travailler à l’international, plusieurs possibilités s’offrent à toi :"
      bgColor= "bg-rouge"
      txtColor= "text-gris"
      :ExpandableCards= "[
        {
          title: 'Être magistrat de liaison',
          description: 'C\'est un magistrat français détaché auprès d\'une ambassade de France à l\'étranger, ou auprès du ministère de la Justice du pays d’accueil. Il est chargé de fluidifier les relations judiciaires entre la France et le pays d’accueil.',
        },
        {
          title: 'Négociateur pour la France',
          description: 'Négocier pour la France auprès d’une organisation internationale telle que l’UE, le Conseil de l’Europe ou l’ONU.',
        },
        {
          title: 'Être un expert judiciaire français',
          description: 'Être un expert judiciaire français auprès d\’organisations ou institutions internationales, telles que la Banque mondiale, la Commission et le Parlement européens.',
        },
        {
          title: 'Exercer des fonctions juridictionnelles',
          description: 'Exercer des fonctions juridictionnelles dans les juridictions internationales comme la Cour de justice de l’Union européenne, la Cour européenne des droits de l’homme ou encore la Cour pénale internationale.',
        },
    ]"
    />

    <SectionBase
        title="Pourquoi choisir ce métier"
        text="Devenir magistrat, c'est choisir une carrière où chaque journée est différente <br><br>
        Tu peux aider les victimes, faire respecter la loi et avoir un impact direct sur la société. C'est aussi un métier où tu as de grandes responsabilités et où tes décisions comptent.<br><br>
        Si tu cherches un travail stimulant, utile et reconnu, cette voie est faite pour toi !"
        bgColor="bg-gris"
        iconName="code penal"
        txtColor="text-violet"
        :buttons="[
          {
            text: 'Quel magistrat es-tu ?',
            to: '/quiz',
            variant: 'fullRed',
          },
        ]"
      />
      <Footer />
      
    </main>
  </template>
  
<script setup>
import Footer from '@/components/Footer.vue'
import Piece from '@/assets/icons/piece.svg'

</script>