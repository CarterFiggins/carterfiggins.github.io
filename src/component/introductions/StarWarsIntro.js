export default function StarWarsIntro() {
  return (
    <div className="content-body about-me-body">
      <div className="content-body__text fade-in-from-top">
        <p>
          In the boundless expanse of the technological galaxy, I stand as a Jedi Knight molded by the venerable master, <b><a href="https://www.atomicjolt.com/" target="blank" className="link-in-text">Atomic Jolt</a></b>. Under the wise teaching of this revered Jedi Master, I have honed my skills as a full stack developer, harmonizing the forces of both front-end and back-end realms. Through the luminous teachings of <b>Java Script, Ruby, Python, and Go,</b> I have learned to wield programming languages as gracefully as a Jedi wields their lightsaber, bringing balance and functionality to the digital realms.
        </p>
        <p>
          Guided by Atomic Jolt, I have embraced the path of knowledge, mastering tools and frameworks such as <b>React, GraphQL, Ruby On Rails, Vue, ORM frameworks, PostgreSQL, and Git.</b> Much like a Jedi refining their connection to the Force, I've cultivated an intuitive understanding of these tools, enabling me to create seamless user experiences and robust applications that traverse the vast landscapes of the cybernetic universe.
        </p>
        <p>
          Beyond the realm of code, I embark on exhilarating coding quests, I also tread the exhilarating trails of mountain biking, mirroring the exhilaration of mastering the Force. In moments of tranquility, I channel the teachings of my master to build and upgrade computers, similar to crafting my own technological lightsabers with which to face digital challenges.
        </p>
        <p>
          Amidst these cosmic endeavors, I treasure my time with my dear wife and young Padawans, for family bonds are stronger than any lightsaber crystal!
        </p>
      </div>
      <div className="image-container fade-in">
        <img className="about-me-img" alt={"me"} src={"/images/carter_jedi.png"} />
      </div>
    </div>
  );
}
