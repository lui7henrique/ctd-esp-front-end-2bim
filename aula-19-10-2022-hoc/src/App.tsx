import { useCallback, useState } from "react";
import { Input } from "./components/Input";
import { LoadingInput } from "./components/LoadingInput";
import { debounce } from "lodash";
import { api } from "./services/api";
import { Character } from "./types/character";

const HOCInput = LoadingInput(Input);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character | null>(null);

  const search = useCallback(
    debounce(async (query: string) => {
      setIsLoading(true);

      if (query === "") {
        setIsLoading(false);
        return setCharacter(null);
      }

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const { data } = await api.get(`/character/${query}`);

        setCharacter(data);
      } catch {
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  return (
    <>
      <HOCInput
        isLoading={isLoading}
        placeholder="Search by ID"
        onChange={(e) => search(e.target.value)}
      />

      <p />

      {character ? (
        <div>
          <img src={character.image} alt="" />
          <h1>{character.name}</h1>
          <div>
            <span>{character.status}</span> | <span>{character.species}</span> |{" "}
            <span>{character.gender}</span>
          </div>
        </div>
      ) : (
        <p> no one :(</p>
      )}
    </>
  );
}

export default App;
