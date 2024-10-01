import CodeModal from '@/app/components/ui-components/CodeModal'
import React from 'react'

const HtmlFormsCodes = () => {
  return (
    <div>
      <CodeModal>
        {`
    "use client";
    import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    } from "@headlessui/react";
    import { useState } from "react";

    const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    ];

    const [selectedPerson, setSelectedPerson] = useState<string>(people[0].name);
    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

    <form action="/projects/1/assignee" method="post" className="flex gap-3">
          <Combobox
            name="assignee"
            value={selectedPerson}
            onChange={(value) => setSelectedPerson(value as string)}
            onClose={() => setQuery("")}
          >
            <ComboboxInput
              aria-label="Assignee"
              displayValue={() => selectedPerson}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full ui-form-control rounded-md"
            />
            <ComboboxOptions
              anchor="bottom"
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible"
            >
              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person.name}
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
                >
                  {person.name}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
          <button type="submit" className="ui-button bg-primary">Submit</button>
    </form>    
        `}
      </CodeModal>
    </div>
  )
}

export default HtmlFormsCodes
