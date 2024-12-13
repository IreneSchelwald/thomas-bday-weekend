// Functie om de kaart om te draaien en inhoud bij te werken
function flipCard(option) {
  const card = document.getElementById('invitation-card');
  const cardContent = document.getElementById('card-content');
  
  // Voeg de flip-class toe om de kaart te draaien
  card.classList.add('flip');
  
  // Update de inhoud op de achterkant van de kaart
  let content = '';

  switch (option) {
    case 'read-me':
     content = `
    <h2>Lees mij eerst</h2>
    <p> Dit zijn de belangrijkste reminders over het verassingselement. Lees dit pls goed door voordat je naar Hamburg vertrekt. </p>
      <ul class="lees-mij-list">
      <li> Zet niks in je Instagram Stories. Ook geen fotos van de trein en/of autorit. </li>
      <li> Stuur Thomas' geen Snapchats die mogelijk iets weggeven. Stuur hem wél dingen die je alibi bevestigen. </li>
      <li> Zet je snaplocatie uit </li>
      <li> <strong>Deel als je in Hamburg ben je livelocatie in de chat! </strong></li>
      <li> Hou als je in Hamburg bent de livelocatie van Irene in       de gaten en AVOID AVOID AVOID.</li>
      <li> De planning van Thomas en Irene vind je hier </li>
      <li> Hou de chat vrij voor logstieke vraagstukken en locatie-updates. De tijd voor leuke stickers is VOORBIJ. ITS GO TIME.</li>
    </ul>   
  <p>  </p>
   
  `;
      break;
    case 'info':
     content = `
    <h2>Planning</h2>
    <p> Hier vind je de planning van het weekend. Mocht je iets niet kunnen vinden en/of ergens te laat komen, laat dat alsjeblieft aan Irene weten!! </p>
          <strong>Hotel:</strong> <a href="https://www.superbude.com/en/hotel-hamburg/st-georg/directions/">Superbude St. Georg </a>
      </p>
      <strong>Vrijdag 13 december </strong>
      <ul class="list-basic-info">
      <li><strong>Wat:</strong> Oesters en bubbels op de kerstmarkt; W. Schümann´s Austernkeller </li>
      <li><strong>Waar:</strong> <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b18f000d3dd655:0xba5a2828c9afcaf4?sa=X&ved=1t:8290&ictx=111">Roncalli's Historischer Weihnachtsmarkt </a> </li>
      <li><strong>Hoe laat:</strong> 19:30 - 21:00</li>
      <li><strong> Denk om:</strong> Kan moeilijk te vinden zijn als je eenmaal op de markt bent.</li>
    </ul>
    <strong>Zaterdag 14 december</strong>
      <ul class="list-basic-info">
      <li><strong>Wat:</strong> Samen eten </li>
      <li><strong>Waar:</strong> <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b18ee12cc30cb7:0x6af4acbf51e0dc12?sa=X&ved=1t:8290&ictx=111">Schifferbörse Restaurant </a> </li>
      <li><strong>Hoe laat:</strong> 18:30 - 20:15</li>
    </ul>
    <strong>Zaterdag 14 december</strong>
      <ul class="list-basic-info">
      <li><strong>Wat:</strong> Samen kerstmarkten </li>
      <li><strong>Waar:</strong> <a href="https://maps.app.goo.gl/jzWUfgDSyhYGQL3C6">Winterpride </a> </li>
      <li><strong>Hoe laat:</strong> 20:30 - 22:30</li>
           <li><strong>Denk om:</strong> Warm aankleden, is buiten!</li>
    </ul>
      <strong>Zondag 15 december</strong>
      <ul class="list-basic-info">
      <li><strong>Wat:</strong> Samen ontbijten </li>
      <li><strong>Waar:</strong> Hotel </li>
      <li><strong>Hoe laat:</strong> 10:00 </li>
    </ul>
    
  <p> Tips nodig voor hoe je de rest van de tijd gaat vullen? Die vind je hier. </p>
   
  `;
      break;
    case 'details':
      content = `<h2>Toettoet</h2><p>Kom je met de auto? Denk dan aan:</p>
      <ul>
      <li> FILES! Reken genoeg tijd in om naar Hamburg toe te komen en om door de stad te navigeren. </li>
      <li> <a href="https://www.superbude.com/en/hotel-hamburg/st-georg/directions/"> Parkeerplaats hotel </a> </li>
      `
     ;
      break;
    case 'location':
      content = `<h2>ChooChoo</h2><p>Kom je met de trein? Denk dan aan:</p>
      <ul class="trein-list">
      <li> Parkeerplaats in Leer </li>
        <ul class="parkeerplaatsen-leer">
          <li> <strong> <a href="https://maps.app.goo.gl/MxknMPBrAYEQXVqUA"> Bij de Lidl/Netto:</a></strong> Gratis, maar wel 25 minuten lopen. </li>
          <li> <strong> <a href="https://maps.app.goo.gl/R1p7BYS9UNVokd7QA"> Annenstrasse parkeerplaats:</a></strong> €12,50 per dag </li>
          <li> <strong> <a href="https://maps.app.goo.gl/j2aYjr2Yft1er2FQA"> Parkhaus Frisia Center </a></strong> €13,50 per dag, wel tegenover station </li>
          </ul>
      <li> <a href="https://www.niedersachsentarif.de/fahrkarten/niedersachsen-ticket">Niedersachsen Ticket </a></li>
      <ul>
        <li> Denk erom; géén IC(E)'s, alleen het stuk van <strong> Leer naar Bremen </strong> </li>
        <li> <a href="https://www.niedersachsentarif.de/fahrkarten/niedersachsen-ticket#nitag-map">Check deze kaart, niet de reisplanner </a></li>
        </ul>
      <li> Hou rekening met vertraging, het is immers de Deutsche Bahn! </li>
      </ul>
      `;
      break;
    case 'schedule':
      content = `<h2><strong>FAQ's</strong></h2><p>Voor al je prangende vragen</p>
      <div class="faq">
      <div class="faq-item">
        <div class="faq-question">
          <span>Wat als ik mijn mond voorbij praat?</span>
          <span class="faq-toggle">▶</span>
        </div>
        <div class="faq-answer">
          Geen stress. Probeer jezelf eruit te lullen en anders             jammer dan. Thomas is te beleefd om je erop te wijzen,          dus incasseren en door. 
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
          <span>Wat als we Thomas zien in Hamburg en erger nog, hij ons ziet?</span>
          <span class="faq-toggle">▶</span>
        </div>
        <div class="faq-answer">
          Valt het nog te vermijden? Dan dat doen. Zo niet,       lachen en door. Verwarring zaaien is ook al grappig dus dat wordt de move. 
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
          <span>Wat moet ik allemaal inpakken?</span>
          <span class="faq-toggle">▶</span>
        </div>
        <div class="faq-answer">
          Daar is een paklijst voor. Vergeet in ieder geval niet je <strong>paspoort</strong> (want grenscontroles) en goeie zin. 
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-question">
          <span>Wat als ik vertraagd ben bij een activiteit?</span>
          <span class="faq-toggle">▶</span>
        </div>
        <div class="faq-answer">
          Beter plannen xx. Nee, grapje. Gewoon mij ff appen.
        </div>
      </div>
    </div>
      `;
      break;
    case 'contact':
      content = `<h2>Niet vergeten</h2>
      <ul class="niet-vergeten">
      <li> Muts, handschoenen, sjaal </li>
        <ul class="niet-vergeten">
          <li> Reminder; de activiteit zaterdagavond is <strong>buiten</strong> dus ya gonna need it</li>
        </ul>
      <li> Paspoort </li>
        <ul class="niet-vergeten">
          <li> Laat je horen voor het shengen-verdrag!</li>
        </ul>    
      `;
      break;
    default:
      content = `<h2>Oeps!</h2><p>Er is iets mis gegaan.</p>`;
  }
  
  cardContent.innerHTML = content;
}

// Functie om de kaart weer terug te draaien
function flipCardBack() {
  const card = document.getElementById('invitation-card');
  card.classList.remove('flip');
}
document.addEventListener('click', (event) => {
  const question = event.target.closest('.faq-question');
  if (!question) return; // Stop als er niet op een vraag is geklikt

  const item = question.parentElement;
  const faqItems = document.querySelectorAll('.faq-item');

  // Sluit andere geopende items (optioneel)
  faqItems.forEach(i => {
    if (i !== item) {
      i.classList.remove('open');
    }
  });

  // Wissel de "open" klasse voor het aangeklikte item
  item.classList.toggle('open');
});
function addScrollArrows() {
  const cardBack = document.querySelector('.card-back');
  
  // Maak de pijlen
  const arrowUp = document.createElement('div');
  arrowUp.classList.add('scroll-arrow', 'up');
  arrowUp.textContent = '↑';

  const arrowDown = document.createElement('div');
  arrowDown.classList.add('scroll-arrow', 'down');
  arrowDown.textContent = '↓';

  cardBack.appendChild(arrowUp);
  cardBack.appendChild(arrowDown);

  // Toon/verberg pijlen op basis van scrollpositie
  cardBack.addEventListener('scroll', () => {
    if (cardBack.scrollTop > 0) {
      arrowUp.style.display = 'block';
    } else {
      arrowUp.style.display = 'none';
    }

    if (cardBack.scrollTop + cardBack.clientHeight < cardBack.scrollHeight) {
      arrowDown.style.display = 'block';
    } else {
      arrowDown.style.display = 'none';
    }
  });
}
addScrollArrows();