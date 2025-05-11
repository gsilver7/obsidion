function Search() {
  function handlePlus(e){
  e.preventDefault();
  alert("plus");
}
  return (
    <button onClick={handlePlus}>
      <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="16" y1="16" x2="22" y2="22" />
    </svg>

    </button>
  )
}

export default Search
