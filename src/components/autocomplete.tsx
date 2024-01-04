import React, { ChangeEvent, Ref, forwardRef, useRef, useState } from 'react';

type Item = {
  label: string;
  value?: any;
};

interface Props {
  items: Array<string> | Set<string> | Array<Item>;
  onClick: (value: any) => void;
  placeholder?: string;
}

const Autocomplete: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { items, placeholder, onClick }: Props,
  ref: Ref<HTMLInputElement>
) => {
  const allItems: Array<Item> = [];
  const [filteredItems, setFilteredItems] = useState<Array<Item>>([]);
  const suggestionRef = useRef<HTMLDivElement | null>(null);

  items.forEach((item) => {
    const isString = typeof item === 'string';
    const label = isString ? item : item.label;
    const value = isString ? item : item.value ?? item.label;

    allItems.push({
      label,
      value
    });
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event.target.value.trim().toLowerCase());
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' && suggestionRef.current) {
      const firstChild = suggestionRef.current.firstChild as HTMLElement | null;
      if (firstChild) {
        firstChild.focus();
      }
    }

    event.stopPropagation();
  };

  const search = (input: string) => {
    if (input.length < 1) {
      setFilteredItems([]);
      return;
    }

    // TODO: A potential optimization would be to use a filtered list
    // each time, but neglible difference for now.
    const searchingItems = allItems.filter((item) =>
      item.label.includes(input)
    );

    setFilteredItems(searchingItems);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="search-query"
          id="search-query"
          ref={ref}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="block h-9 w-full rounded bg-white placeholder-light-cyan text-cyan appearance-none pl-10 focus:outline-none"
        />
      </div>
      {filteredItems.length > 0 && (
        <div
          className="absolute w-full bg-white text-left rounded-bl rounded-br overflow-hidden"
          style={styles.container}
          ref={suggestionRef}
        >
          {filteredItems.map((item) => {
            return (
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm focus:bg-light-cyan hover:bg-light-cyan text-cyan focus:text-dark-cyan hover:text-dark-cyan"
                onClick={() => onClick(item.value)}
              >
                <span className="inline-flex items-center">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    marginTop: -2
  }
};

export default forwardRef(Autocomplete);
