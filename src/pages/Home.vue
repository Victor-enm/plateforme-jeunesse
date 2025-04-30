<template>
    <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
      <SectionBase
        title="Bienvenue !"
        text="Découvre les métiers de la justice à travers une expérience interactive."
        bgColor="bg-red-800"
        buttonText="Commencer"
        buttonVariant="fullWhite"
        buttonTo="/autre"
      />
  
      <section class="h-screen w-screen snap-start bg-red-300 flex items-center justify-center">
        <h1 class="text-4xl font-bold">Section 1</h1>
      </section>
      <section class="h-auto w-screen snap-start scroll-mt-16 bg-green-300 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Section 2</h1>
        <p v-for="i in 50" :key="i" class="mb-2">Ligne {{ i }} — du texte pour tester le scroll libre dans cette section.</p>
        </section>
      <section class="h-screen w-screen snap-start bg-blue-300 flex items-center justify-center">
        <h1 class="text-4xl font-bold">Section 3</h1>
      </section>
    </main>
  
    
  </template>