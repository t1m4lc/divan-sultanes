<template>
  <div>
    <!-- SEO Meta Tags -->
    <Head>
      <Title>Le Divan des Sultanes - Leadership Féminin d'Excellence</Title>
      <Meta name="description" content="Le Divan des Sultanes - Programme d'accompagnement pour développer un leadership féminin puissant, entre excellence et bienveillance." />
      <Meta name="keywords" content="leadership féminin, coaching, formation, management, femmes leaders" />
      <Meta property="og:title" content="Le Divan des Sultanes - Leadership Féminin d'Excellence" />
      <Meta property="og:description" content="Programme d'accompagnement pour développer un leadership féminin puissant, entre excellence et bienveillance." />
      <Meta property="og:image" content="/img/anna-alcaide-portrait.png" />
      <Meta name="twitter:card" content="summary_large_image" />
    </Head>

    <!-- Header -->
    <header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/img/hero-woman-ocean.jpg"
          alt="Woman by the ocean"
          class="w-full h-full object-cover opacity-30"
          loading="eager"
          placeholder
        />
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 class="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          ✨ Le Divan des Sultanes ✨
        </h1>
        <p class="text-xl md:text-2xl mb-8 font-light opacity-95">
          Incarner un leadership puissant, entre excellence et bienveillance
        </p>
        
        <div class="mb-8">
          <NuxtImg
            src="/img/anna-alcaide-portrait.png"
            alt="Anna Alcaide Villanueva"
            class="w-64 h-64 mx-auto rounded-2xl shadow-2xl object-cover"
            loading="eager"
          />
        </div>
        
        <div class="space-y-4">
          <Button 
            as="a" 
            href="#waitlist" 
            size="lg"
            class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Rejoindre la liste d'attente
          </Button>
          
          <p class="text-lg font-semibold mt-6">
            Démarrage en Octobre 2025 – Places limitées !
          </p>
        </div>
      </div>
    </header>

    <!-- Introduction -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Intégrez une communauté de femmes puissantes
          </h2>
          <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            En commençant par un programme adapté à votre agenda, mêlant ateliers collectifs et coaching individuel.
          </p>
        </div>
        
        <Card class="max-w-4xl mx-auto bg-slate-50 border-l-4 border-red-600 p-8">
          <blockquote class="text-2xl font-light italic text-slate-700 mb-4">
            « Embrassez ce qui vous rend unique, même si cela rend les autres mal à l'aise »
          </blockquote>
          <cite class="text-lg font-semibold text-slate-800">— Aretha Franklin</cite>
        </Card>
      </div>
    </section>

    <!-- Pour qui / Pas pour qui -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <Card class="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="font-playfair text-2xl font-bold text-slate-800 mb-6">
              Ce programme est pour vous si
            </h3>
            <ul class="space-y-4">
              <li v-for="item in forYouItems" :key="item" class="flex items-start space-x-3">
                <span class="text-green-500 text-xl mt-1">✅</span>
                <span class="text-slate-700 leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </Card>
          
          <Card class="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="font-playfair text-2xl font-bold text-slate-800 mb-6">
              Ce programme n'est pas pour vous si
            </h3>
            <ul class="space-y-4">
              <li v-for="item in notForYouItems" :key="item" class="flex items-start space-x-3">
                <span class="text-red-500 text-xl mt-1">❌</span>
                <span class="text-slate-700 leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>

    <!-- Section DRH -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-center mb-12">
          <NuxtImg
            src="/img/women-at-work.png"
            alt="Femmes au travail"
            class="w-96 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        <div class="text-center mb-12">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Vous êtes DRH, dirigeant·e ou responsable d'équipes ?
          </h2>
          <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Le Divan des Sultanes est un parcours d'excellence destiné aux femmes managers qui portent en elles un potentiel à valoriser, à révéler et à consolider.
          </p>
          <p class="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Que ce soit pour accompagner une collaboratrice en questionnement, ou pour capitaliser sur les compétences et la posture d'une manageuse à fort impact, ce programme offre un espace confidentiel et exigeant où se réinterrogent rapport au pouvoir, à l'autorité et au leadership authentique.
          </p>
          <p class="text-2xl font-semibold text-red-600">
            Proposer ce parcours, c'est reconnaître et investir dans le leadership féminin de votre organisation.
          </p>
        </div>
      </div>
    </section>

    <!-- Ce que vous allez vivre -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-center mb-12">
          <NuxtImg
            src="/img/woman-arms-raised.jpg"
            alt="Femme bras en l'air"
            class="w-96 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        <div class="text-center mb-12">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Ce que vous allez vivre
          </h2>
        </div>
        
        <Card class="bg-white p-8 shadow-lg">
          <ul class="space-y-6">
            <li v-for="item in experienceItems" :key="item.title" class="flex items-start space-x-4">
              <span class="text-2xl mt-1">✨</span>
              <div>
                <strong class="text-slate-800">{{ item.title }}</strong>
                <span class="text-slate-700"> {{ item.description }}</span>
              </div>
            </li>
          </ul>
        </Card>
        
        <div class="text-center mt-12">
          <Button 
            as="a" 
            href="#waitlist"
            size="lg"
            class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Je m'inscris sur la liste d'attente
          </Button>
        </div>
      </div>
    </section>

    <!-- Ce que vous allez obtenir -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Ce que vous allez obtenir
          </h2>
          
          <NuxtImg
            src="/img/leadership-toolbox.jpg"
            alt="Boîte à outils leadership"
            class="w-96 h-64 mx-auto object-cover rounded-2xl shadow-lg mb-12"
          />
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <Card v-for="benefit in benefits" :key="benefit.title" class="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="font-playfair text-xl font-bold text-slate-800 mb-4">
              {{ benefit.title }}
            </h3>
            <ul class="space-y-2">
              <li v-for="item in benefit.items" :key="item" class="text-slate-700 leading-relaxed">
                • {{ item }}
              </li>
            </ul>
          </Card>
        </div>
        
        <Card class="max-w-4xl mx-auto bg-slate-50 border-l-4 border-red-600 p-8">
          <blockquote class="text-2xl font-light italic text-slate-700 mb-4">
            « Je suis persuadée que les rêves d'aujourd'hui seront les réalités de demain. »
          </blockquote>
          <cite class="text-lg font-semibold text-slate-800">— Malala Yousafzai</cite>
        </Card>
      </div>
    </section>

    <!-- Comment ça se passe -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-center mb-12">
          <NuxtImg
            src="/img/group-women-ocean.webp"
            alt="Groupe de femmes inspirantes"
            class="w-96 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        <div class="text-center mb-12">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Comment vous allez le vivre
          </h2>
          <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Le programme <strong>Le Divan des Sultanes</strong> se déroule en parallèle de votre activité (en distanciel) sur une amplitude de 9 mois.
          </p>
        </div>
        
        <Card class="bg-white p-8 shadow-lg">
          <h3 class="font-playfair text-2xl font-bold text-slate-800 mb-6">Au programme :</h3>
          <ul class="space-y-6">
            <li v-for="item in programItems" :key="item.title" class="flex items-start space-x-4">
              <span class="text-2xl mt-1">✨</span>
              <div>
                <strong class="text-slate-800">{{ item.title }}</strong>
                <span class="text-slate-700"> {{ item.description }}</span>
              </div>
            </li>
          </ul>
        </Card>
        
        <div class="text-center mt-12">
          <Button 
            as="a" 
            href="#waitlist"
            size="lg"
            class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Je m'inscris sur la liste d'attente
          </Button>
        </div>
      </div>
    </section>

    <!-- Coach Section -->
    <section class="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            À propos de votre Coach certifiée
          </h2>
          <h3 class="text-3xl font-semibold text-red-600 mb-8">
            Anna Alcaide Villanueva
          </h3>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-12 items-center mb-12">
          <div class="lg:col-span-1">
            <NuxtImg
              src="/img/anna-profile.png"
              alt="Anna Alcaide Villanueva"
              class="w-full max-w-sm mx-auto rounded-full shadow-lg"
            />
          </div>
          <div class="lg:col-span-2 space-y-6">
            <h4 class="font-playfair text-2xl font-bold text-slate-800">
              Qui je suis : un parcours entre exigence, épreuve et renaissance
            </h4>
            <p class="text-lg text-slate-700 leading-relaxed">
              Avant d'accompagner les leaders et les équipes en quête de sens, <strong>j'ai moi-même dirigé</strong>.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              <strong>Cheffe de cuisine, puis directrice de restauration</strong>, j'ai exercé dans des établissements où la rigueur, la précision et l'excellence étaient une seconde nature.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              Mon chemin m'a menée vers <strong>la formation, le développement du leadership, puis le coaching</strong>. Un chemin d'accompagnement qui s'ancre dans l'expérience, le corps, les émotions, les systèmes vivants.
            </p>
            <p class="text-lg text-red-600 font-semibold">
              En 2023, j'ai choisi de vivre au Maroc, dans un village berbère face à l'océan, pour me rapprocher de l'essentiel. C'est là qu'est né <strong>le Divan des Sultanes</strong>.
            </p>
          </div>
        </div>
        
        <div class="text-center">
          <Badge variant="outline" class="text-slate-600 px-4 py-2 text-base">
            <strong>Certifiée Coach&Team© reconnue par l'état (RNCP)</strong>
          </Badge>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            C'est elles qui en parlent le mieux
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card v-for="testimonial in testimonials" :key="testimonial.name" class="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-600">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <NuxtImg
                  :src="testimonial.photo"
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                />
                <div>
                  <h4 class="font-semibold text-slate-800">{{ testimonial.name }}</h4>
                  <p class="text-sm text-slate-600">{{ testimonial.title }}</p>
                </div>
              </div>
              <div class="text-yellow-400 text-xl">
                ★★★★★
              </div>
            </div>
            <blockquote class="text-slate-700 italic leading-relaxed">
              "{{ testimonial.quote }}"
            </blockquote>
          </Card>
        </div>
      </div>
    </section>

    <!-- Waitlist Form -->
    <section id="waitlist" class="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Prête à révéler la sultane en vous ?
          </h2>
          <p class="text-xl leading-relaxed opacity-90">
            Trouvez enfin une clarté profonde sur la trajectoire que vous souhaitez emprunter, portée par l'inspiration et le rayonnement.
          </p>
        </div>
        
        <Card class="bg-white/10 backdrop-blur-lg border border-white/20 p-8 max-w-2xl mx-auto">
          <iframe 
            data-tally-src="https://tally.so/embed/3q8k8O?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
            loading="lazy" 
            width="100%" 
            height="412" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            title="Lead generation form"
            class="rounded-lg"
          />
          
          <p class="text-center mt-6 text-sm opacity-80">
            <strong>Démarrage en Octobre 2025 – Places limitées !</strong>
          </p>
        </Card>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-800 text-white py-12">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="mb-2">&copy; 2025 Le Divan des Sultanes - Anna Alcaide Villanueva</p>
        <p class="text-slate-300">Leadership féminin d'excellence • Coaching certifié • Accompagnement transformation</p>
      </div>
    </footer>

    <!-- Tally Form Script -->
    <ClientOnly>
      <script>
        var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
      </script>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// Content data
const forYouItems = [
  'Vous êtes manager, dirigeante ou entrepreneure',
  'Vous souhaitez développer un leadership authentique et puissant',
  'Vous cherchez un équilibre entre ambition et bienveillance',
  'Vous voulez faire partie d\'une communauté de femmes inspirantes',
  'Vous êtes prête à vous investir sur 9 mois'
]

const notForYouItems = [
  'Vous cherchez une solution miracle sans engagement',
  'Vous n\'êtes pas prête à remettre en question vos habitudes',
  'Vous préférez travailler seule sans partage d\'expérience',
  'Vous n\'avez pas le temps de vous investir dans un programme',
  'Vous cherchez uniquement des techniques de management'
]

const experienceItems = [
  {
    title: 'Coaching personnalisé & dynamique de groupe',
    description: 'pour clarifier vos objectifs et avancer avec confiance'
  },
  {
    title: 'Expérimenter des outils concrets',
    description: 'pour développer un leadership inspirant, authentique et impactant'
  },
  {
    title: 'Des rencontres et échanges',
    description: 'avec des femmes qui partagent vos valeurs et vos défis, pour s\'entraider et grandir ensemble'
  },
  {
    title: 'Un final magique au Maroc',
    description: 'une immersion face à l\'océan pour célébrer votre transformation et ancrer vos nouvelles forces'
  }
]

const benefits = [
  {
    title: 'Transformation personnelle',
    items: [
      'Plus de confiance en vous et dans votre leadership',
      'Une vision claire de vos objectifs professionnels et personnels',
      'Un équilibre entre vos ambitions et votre bien-être personnel'
    ]
  },
  {
    title: 'Outils pratiques',
    items: [
      'Une boîte à outils pratique et efficiente',
      'Des méthodes en communication',
      'Un accompagnement professionnel par une coach certifiée'
    ]
  },
  {
    title: 'Réseau et soutien',
    items: [
      'La capacité à engager vos équipes et s\'entourer de talents',
      'Le soutien d\'un réseau de femmes leaders inspirantes'
    ]
  }
]

const programItems = [
  {
    title: '2 Sessions collectives mensuelles pendant 9 mois',
    description: 'pour échanger, apprendre et grandir ensemble'
  },
  {
    title: '5 séances de Coaching individuel',
    description: 'pour vous aider à surmonter vos blocages et à mettre en place des actions concrètes'
  },
  {
    title: 'Des exercices puissants',
    description: 'inter séance à faire seules ou en groupe de paires'
  },
  {
    title: 'Rencontres inspirantes',
    description: 'avec des femmes leaders, des modèles de réussite et des experts du domaine'
  },
  {
    title: 'Un voyage au Maroc',
    description: 'tout frais compris (hors vol) avec 3 jours de coaching d\'équipe pour un final immersif'
  }
]

const testimonials = [
  {
    name: 'Virginie THIEBAUD',
    title: 'Responsable régionale, France Travail',
    photo: '/img/testimonial-virginie.png',
    quote: 'Anna incarne un leadership inspirant et motivant. Son approche audacieuse et accessible marque les esprits.'
  },
  {
    name: 'Marion ANDRE',
    title: 'Responsable qualité, Hermès',
    photo: '/img/testimonial-marion.png',
    quote: 'Transmettre avec passion et sincérité, c\'est sa force. Anna sait viser juste et toucher les cœurs.'
  },
  {
    name: 'Françoise PONS',
    title: 'Gestionnaire formation - Région Sud - Systeme U',
    photo: '/img/testimonial-francoise.jpeg',
    quote: 'Anna ALCAIDE est une de nos meilleures formatrices indépendantes chez Système U. Très pédagogue, elle possède de grandes qualités d\'écoute, de bienveillance, de générosité.'
  },
  {
    name: 'Anne-Lise SAMIZAFY',
    title: 'DRH - Groupe Bourassin - Systeme U',
    photo: '/img/testimonial-anne-lise.png',
    quote: 'Transmettre avec passion et sincérité, c\'est sa force. Anna sait viser juste et toucher les cœurs. Ta gentillesse, ta bonne humeur et ta grande capacité d\'écoute ont conquis ton "public" !'
  }
]

// SEO and prerendering
definePageMeta({
  prerender: true
})
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
