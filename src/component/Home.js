export default function Home() {
  return (
    <div>
      <div className="content-column">
        <h1 className="content-title">Carter Figgins</h1>
        <p className="content-subtitle">The Computing Fig</p>
        <p className="content-subtitle-sm">Hello, welcome to my website!</p>

        <div className="content-body">
          <div className="content-body__text">
            <p>
            In a galaxy not far away...🌎 The force is strong with me as I wield my lightsaber of full stack development at <b><a href="https://www.atomicjolt.com/" target="blank" class="link-in-text">Atomic Jolt</a>!</b> 💻⚔️ A Jedi master in <b>JavaScript, Ruby, Python, and Go</b>, I stand ready to defend the digital realm from the dark side! 🚀🌟
            </p>
            <p>
              With the wisdom of the Jedi Council, I harness the power of <b>React, GraphQL, Ruby On Rails, Vue, ORM tools, and Git.</b> The force flows through these tools, guiding me in my web development quests! 🔮💫
            </p>
            {/* <p>
              But the battle doesn't end there! When I'm not taking on Sith-level coding challenges, I become a daring starfighter, navigating the treacherous trails of mountain biking with Jedi-like skill! 🚴‍♂️🌲
            </p> */}
            <p>
              Amidst these cosmic endeavors, I treasure my time with my dear wife and young Padawans, for family bonds are stronger than any lightsaber crystal! ❤️👨‍👩‍👧‍👦
            </p>
            <p>
              So, brave rebels, join me on this epic journey. Together, we shall bring balance to the digital force, one line of code at a time! <b>May the code be with you!</b>⚡
            </p>
          </div>
          <img className="home-img" alt={"me"} src={"/images/carter_jedi.png"} />
        </div>
        <p>*Image and text enhanced by AI</p>
      </div>
    </div>
  );
}
