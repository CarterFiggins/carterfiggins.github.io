export default function WizardIntro() {
  return (
    <div className="content-body about-me-body">
      <div className="content-body__text fade-in-from-top">
        <p>
          I am a seasoned wizard of the digital realm, casting spells of code and crafting enchanting software as a full stack developer at Hogwarts School of Witchcraft and Wizardry. My journey began as a student under the guidance of the respected <b><a href="https://www.atomicjolt.com/" target="blank" className="link-in-text">Atomic Jolt</a></b>, who also shares their wisdom as a professor at Hogwarts. With a wand fashioned from the essence of <b>JavaScript, Ruby, Python, and Go,</b> I channel the magic of programming languages to bring intricate incantations to life. 
        </p>
        <p>
          Just as a wizard chooses their spells, I wield the potent tools and frameworks of the trade. <b>React and GraphQL</b> flow through my veins like the very essence of a patronus, while <b>Ruby On Rails and Vue</b> dance to the rhythm of my incantations. The mystical <b>ORM frameworks and PostgreSQL</b> are like the whispers of enchanted creatures guiding me through the intricacies of the digital labyrinth, and <b>Git</b>, a spell of version control, ensures my creations remain unblemished by the sands of time.
        </p>
        <p>
          When not immersed in the art of coding, I find solace in the physical world, be it soaring through the digital skies or embarking on daring mountain biking quests. Alongside my cherished wife and magical children, I revel in moments of respite, weaving the threads of family into the rich tapestry of my life. Just as a wizard balances their studies with leisure, I merge the realms of technology and family, forever enchanted by the journey.
        </p>
      </div>
      <div className="image-container fade-in">
        <img className="about-me-img" alt={"me"} src={"/images/carter_wizard.jpeg"} />
      </div>
    </div>
  );
}
