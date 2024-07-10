import type { CollectionEntry } from "astro:content";
import { atom } from "nanostores";

// Types
export type Data = CollectionEntry<"startups">["data"][];
export type AllCategories = CollectionEntry<"startups">["data"]["categories"];
type Category = CollectionEntry<"startups">["data"]["categories"][number];

// Startups Collection State
export const $startups = atom<Data | undefined>(undefined);
export const setStartups = (data: Data) => $startups.set(data);

// Search String State
export const $searchString = atom<string>("");
export const setSearchString = (data: string) => $searchString.set(data);

// Filters State
export const $selectedCategory = atom<Category | null>(null);
export const setFilters = (data: Category | null) => $selectedCategory.set(data);
