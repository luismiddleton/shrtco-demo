import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Inputs/Button";
import Input from "./Inputs/Input";
import useCreateLink from "../hooks/useCreateLink";

export default function Form() {
  const [url, setUrl] = useState("");
  const { mutate, isError, error, isLoading, reset } = useCreateLink();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return setUrl(e.target.value);
  }

  // reset query handler on error
  function handleReset() {
    return reset();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // cancels the event
    e.preventDefault();

    // send payload to mutation
    mutate(url);

    // reset input value state
    return setUrl("");
  }

  return (
    <>
      <form className="flex flex-row space-x-2" onSubmit={handleSubmit}>
        <Input
          value={isLoading ? "Fetching..." : url}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="luismiddleton.com.au"
          type="text"
        />
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
      {isError && (
        <div className="bg-red-200 p-4 border-2 border-red-200 rounded-lg shadow-sm space-y-2 flex flex-col">
          <p>Error occured with mutation. Please try again</p>
          <code>{(error as Error).message}</code>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      )}
    </>
  );
}
