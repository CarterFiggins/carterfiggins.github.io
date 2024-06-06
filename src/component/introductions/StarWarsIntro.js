export default function StarWarsIntro() {
  return (
    <div className="content-body about-me-body">
      <div className="content-body__text fade-in-from-top">
        <p>
          In the vast galaxy of software development, I am a Jedi Knight serving the revered <b><a href="https://www.atomicjolt.com/" target="blank" className="link-in-text">Atomic Jolt</a></b>. For four rotations around our twin suns, I have honed my skills as a full-stack developer, forging powerful tools for Learning Management Systems, akin to lightsabers in the hands of knowledge seekers.
        </p>
        <p>
          My arsenal includes the versatile Javascript, the steadfast Node.js, the resilient PostgreSQL, the dynamic React.js, the swift Go, the cloud-based AWS, the multifaceted Ruby on Rails, and the structured Typescript. Each language and tool, a Force power that I wield with precision and grace.
        </p>
        <p>
        Beyond the realm of professional duty, I venture into the creation of Discord bots, crafting interactive games like Werewolf, reminiscent of ancient Jedi trials. My thirst for knowledge in the grand holocron of computer science is insatiable, driving me to constantly expand my understanding of the digital Force.
        </p>
        <p>
        When not immersed in the virtual cosmos, I traverse the rugged terrains on my mountain bike, finding balance and harmony with nature, much like a Jedi seeking peace within the Force.
        </p>
        <p>
          May the code be with you.
        </p>
      </div>
      <div className="image-container fade-in">
        <img className="about-me-img" alt={"me"} src={"/images/carter_jedi.png"} />
      </div>
    </div>
  );
}
