import { useState } from "react";
import useLinks from "../hooks/useLinks";
import { Result } from "../types/Link";
import Button from "./Inputs/Button";

export default function Links() {
  const { isLoading, isError, data } = useLinks();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div className="bg-red-300 p-4">Error</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      {data?.map((item, i) => (
        <Link key={`${item.code}-${i}`} {...item} />
      ))}
    </div>
  );
}

function Link(props: Pick<Result, "short_link" | "original_link">) {
  const [copied, setCopied] = useState(false);

  function handleCopy(url: string) {
    return async function () {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      // mock an interaction event with a timeout.
      return setTimeout(() => setCopied(false), 1000);
    };
  }

  return (
    <div className="p-8 rounded-xl bg-slate-100 shadow-md flex flex-row space-x-4 items-center">
      <a
        className="uppercase text-sm hover:underline"
        href={props.original_link}
        target="_blank"
        rel="noreferrer"
      >
        Original
      </a>
      <input
        className="p-2 rounded-lg"
        readOnly
        type="text"
        value={props.short_link}
      />
      <Button onClick={handleCopy(props.short_link)}>
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
