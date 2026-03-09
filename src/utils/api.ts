import { RESTRUANT_API} from "./constant";
export const fetchRestruant = async (
  searchTerm: string, 
  ratingFilter: number) => {
  const query = `${RESTRUANT_API}${encodeURIComponent(
    searchTerm ?? ""
  )}&ratingFilter=${ratingFilter ?? 0}`;
  const response = await fetch(
    query
  );

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const json = await response.json();

  const cards = json?.data?.cards;
  console.debug("cards array:", cards); // line 17 equivalent log

  if (!Array.isArray(cards)) {
    console.warn("Unexpected cards field (not an array):", cards);
    return [];
  }

  // look through cards for the first one containing a restaurants array
  const restaurants =
    cards
      .map(c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      .find(Array.isArray) || [];

  if (!Array.isArray(restaurants)) {
    // fallback; should never hit because find ensures an array or undefined -> []
    console.warn("Restaurants field missing or not an array:", restaurants);
    return [];
  }

  console.log("✅ Extracted restaurants:", restaurants);

  return restaurants;
};