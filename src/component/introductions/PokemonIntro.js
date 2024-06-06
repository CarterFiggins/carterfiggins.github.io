export default function PokemonIntro() {
  return (
    <div className="content-body about-me-body">
      <div className="content-body__text fade-in-from-top">
        <p>
          Hey there, fellow trainers! I've been on an epic journey as a full-stack developer at <b><a href="https://www.atomicjolt.com/" target="blank" className="link-in-text">Atomic Jolt</a></b> for four years, where I've been crafting tools for Learning Management Systems just like training Pokémon for battle. My coding team consists of powerful creatures like Javascript, Node.js, PostgreSQL, React.js, Go, AWS, Ruby on Rails, and Typescript, each with their own unique moves and strengths, ready to tackle any challenge that comes our way!
        </p>
        <p>
          When I'm not mastering the digital battlefield, I love to train Discord bots to play games like Werewolf, giving them the skills they need to outwit and outplay. But my journey doesn't stop there - I'm always on the lookout for new knowledge and techniques in the vast world of computer science, just like discovering new Pokémon species in the tall grass.
        </p>
        <p>
          And when I'm not immersed in the digital realm, you can find me out in the wild, tearing through rugged terrains on my trusty mountain bike, just like exploring new regions in search of rare Pokémon. So join me on this adventure, fellow trainers, as we catch 'em all and master the art of software development together!
        </p>
      </div>
      <div className="image-container fade-in">
        <img className="about-me-img" alt={"me"} src={"/images/carter_pokemon_trainer.jpeg"} />
      </div>
    </div>
  );
}
