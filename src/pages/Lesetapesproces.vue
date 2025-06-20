<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
        <SectionBase
        title="Les grandes étapes d'un procès"
        text="Un procès, c’est un moment important où la justice intervient pour trancher un conflit ou juger une personne accusée d’une infraction. Voici les grandes étapes d’une audience judiciaire."
        bgColor="bg-gris"
        iconName="balance"
        />

        <SectionImageStages
        title="L'ouverture de l'audience"
        text="Le procès commence avec le président de l’audience (le juge ou le président de la cour d’assises). Il rappelle les faits et présente les éléments du dossier afin que tout le monde ait bien en tête les enjeux de l’affaire. Il veille également à ce que les règles de procédure soient respectées tout au long de l’audience."
        bgColor="bg-violet"
        imgSrc="/images/test2.jpg"
        nombre="1"
        />

        <SectionImageStages
        title="L’écoute des parties"
        text="Chaque personne concernée par l’affaire prend la parole pour exprimer sa version des faits et défendre ses intérêts.
<br><br>
La personne accusée (appelée « prévenu » en correctionnelle ou « accusé » aux assises) commence par donner sa version des événements. Si une victime est impliquée, elle peut expliquer ce qu’elle a vécu. 
<br><br>
Ensuite, le Procureur de la République, représentant l’intérêt de la société, présente ses arguments et peut proposer une sanction. 
<br><br>
Enfin, l’avocat de la défense intervient pour défendre son client en plaidant en sa faveur et en mettant en avant des éléments pouvant influencer la décision du tribunal. 
<br><br>
Parfois, des témoins ou des experts (comme des médecins légistes ou des psychologues) sont appelés à témoigner pour éclairer le tribunal sur certains aspects de l’affaire."
        bgColor="bg-rouge"
        imgSrc="/images/test2.jpg"
        nombre="2"
        />

        <SectionImageStages
        title="La délibération"
        text="Une fois que tout le monde s’est exprimé, les juges (ou les jurés dans certains cas) se retirent pour discuter et prendre leur décision. 
<br><br>
Ils doivent analyser les preuves, les témoignages et les arguments des parties pour rendre un jugement juste. Parfois, ils annoncent leur verdict tout de suite, mais il arrive aussi que la décision soit rendue plus tard."
        bgColor="bg-gris "
        txtColor="text-violet"
        borderColor="border-violet"
        imgSrc="/images/test2.jpg"
        nombre="3"
        />

        <SectionImageStages
        title="L’annonce du jugement"
        text="Enfin, le tribunal revient en audience et annonce la décision : coupable ou non coupable. 
<br><br>
Si la personne est reconnue coupable, une peine est prononcée. Il peut s’agir d’une amende, d’une peine de prison avec ou sans sursis, de travaux d’intérêt général ou d’une autre sanction adaptée à l’infraction commise."
        bgColor="bg-violet "
        txtColor="text-gris"
        borderColor="border-gris"
        imgSrc="/images/test2.jpg"
        nombre="4"
        />

        <SectionImageStages
        title="L’importance du respect des droits"
        text="Durant tout le procès, chaque partie dispose de droits fondamentaux. L’accusé a le droit d’être assisté par un avocat et de se défendre, tandis que la victime peut être représentée et demander réparation. Le tribunal doit garantir une justice impartiale et équitable, en respectant les lois en vigueur.
<br><br>
Ces étapes permettent de garantir une justice équitable en écoutant toutes les parties et en prenant une décision sur la base des faits et du droit. Un procès est un moment solennel où chaque mot et chaque élément de preuve peut être déterminant dans l’issue de l’affaire."
        bgColor="bg-rouge "
        txtColor="text-gris"
        borderColor="border-gris"
        imgSrc="/images/test2.jpg"
        nombre="5"
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
            class: 'mb-5 lg:mr-5 lg:mt-5'
          },
          {
            text: 'Quel magistrat es-tu ?',
            to: '/',
            variant: 'fullRed',
            class: 'lg:hover:border-rouge'
          },
        ]"
      />
    </main>
</template>