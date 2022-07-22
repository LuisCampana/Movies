import { FaSearch } from "react-icons/fa";

import { useNavigate, useSearchParams } from "react-router-dom";
export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); //para que no se recargue el formulario
    navigate(+searchParams);
  };
  let search = "";

  return (
    <form className="ContainerSearch" onSubmit={handleSubmit}>
      <div className="Search">
        <input
          placeholder="search movie"
          className="SearchInput"
          type="text"
          value={searchParams.get("search") || ""}
          onChange={(e) => {
            e.preventDefault();
            search = e.target.value;
            if (search) {
              setSearchParams({ search });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button className="Buttomsearch" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
