import React from "react";
import Categories from "./components/Categories";
import PropertyList from "./components/propertylist.tsx/PropertyList";

export default function Home() {
  return (
    <main className="container max-w-screen-xl mx-auto px-6">
      <Categories theme="light" />
      <div className="mt-4 Grid grid-cols-1 md:grid-cols-4 LG-GRIF-COLS-5 gap-6">
        <PropertyList />
      </div>
    </main>
  );
}
