 function Projects() {
  return (
    <section className="section projects">
      <h2>Projects</h2>

      <div className="card">
        <h3>Portfolio Website</h3>
        <p>
          A responsive portfolio built with React and deployed on Vercel.
        </p>
        <p><strong>Tech:</strong> React, CSS, Vercel</p>
      </div>

      <div className="card">
        <h3>Shopping Cart Application</h3>
        <p>
          Used Context API and Reducer to manage global cart state.
        </p>
        <p><strong>Tech:</strong> React, Context API</p>
      </div>

      <div className="card">
        <h3>Crypto Station</h3>
        <p>
          A cryptocurrency price tracking application that displays real-time
          rates of Bitcoin, Ethereum, and Dogecoin.
        </p>
        <p>
          The app fetches live data from a public crypto API using JavaScript
          <strong> Fetch API</strong> and <strong>Promises</strong>, handling
          asynchronous data and loading states efficiently.
        </p>
        <p><strong>Tech:</strong> Html, css, JavaScript</p>
      </div>
    
    </section>
  );
}

export default Projects;