function Graph() {
  function handlePlus(e){
  e.preventDefault();
  alert("plus");
}
  return (
    <button onClick={handlePlus}>
      <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="16" r="5" fill="white" />
    <circle cx="44" cy="16" r="5" fill="white" />
    <circle cx="32" cy="48" r="7" fill="white" />
    <line x1="20" y1="16" x2="32" y2="32" stroke="white" strokeWidth="3" />
    <line x1="44" y1="16" x2="32" y2="32" stroke="white" strokeWidth="3" />
    <line x1="32" y1="32" x2="32" y2="48" stroke="white" strokeWidth="3" />
    </svg>

    </button>
  )
}

export default Graph
