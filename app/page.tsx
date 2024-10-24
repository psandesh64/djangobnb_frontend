import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";
import PropertyListItem from "./components/properties/PropertyListItem";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories/>

      <PropertyList/>

    </main>
  );
}
