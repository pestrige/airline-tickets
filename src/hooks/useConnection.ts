import { useStoreContext } from "../store/filterStore";

export const useConnection = (id: number) => {
  const { filter, setFilter } = useStoreContext();

  const handleClick = (id: number, isOnlyThisID?: boolean) => {
    if (isOnlyThisID) {
      setFilter([id]);
      return;
    }

    if (filter.every((item) => item === id)) {
      return;
    }

    filter.includes(id)
      ? setFilter(filter.filter((item) => item !== id))
      : setFilter([...filter, id]);
  };

  return {
    checked: filter.includes(id),
    handleClick,
  };
};
