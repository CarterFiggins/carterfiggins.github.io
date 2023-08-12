export default function PokemonIntro() {
  return (
    <div className="content-body about-me-body">
      <div className="content-body__text fade-in-from-top">
        <p>
          Greetings, fellow trainers! In the expansive realm of programming, I'm like a seasoned Pokémon Trainer, embarking on a thrilling journey with my trusty team of coding companions.
        </p>
        <p>
          As a full-stack developer hailing from the esteemed grounds of <b><a href="https://www.atomicjolt.com/" target="blank" className="link-in-text">Atomic Jolt</a></b>, I harness the formidable powers of programming tools that mirror the abilities of Pokémon. With the agility of <b>JavaScript</b>, the adaptability of <b>Ruby</b>, the versatility of <b>Python</b>, and the precision of <b>Go</b>, I craft digital wonders that rival the strength of any battle-ready creature.
        </p>
        <p>
          My arsenal includes <b>React</b>, the electrifying force that sparks life into user interfaces, <b>GraphQL</b>, a psychic link connecting data realms, and the sturdy <b>Ruby On Rails</b>, a framework as reliable as a Charizard's wings. I also wield <b>Vue</b> like a shapeshifting Ditto, <b>ORM Frameworks</b> that streamline communication like a telepathic Alakazam, and <b>Git</b>, the guardian of version control.
        </p>
        <p>
          Beyond the screen's glow, you'll find me conquering trails on my mountain bike, just as I conquer coding challenges, and bonding with my cherished family—my steadfast support team—completing the portrait of a well-rounded Trainer who embraces the art of balance.
        </p>
      </div>
      <div className="image-container fade-in">
        <img className="about-me-img" alt={"me"} src={"/images/carter_pokemon_trainer.jpeg"} />
      </div>
    </div>
  );
}
