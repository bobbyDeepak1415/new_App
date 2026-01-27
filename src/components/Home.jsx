
const Home = ({setEmail,setName,name,email}) => {




 
  return (
    <div>
      <h1>HomePage</h1>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <button>Enter</button>
      </form>
    </div>
  );
}

export default Home
