const App = () => {
  return (
    <>
      <header className="h-14 border-b"></header>
      <div className="flex flex-row flex-1">
        <aside className="p-4 w-[280px] h-dvh relative bg-red-500 lg:flex hidden">
          SideBar
        </aside>
        <main className="px-4 sm:px-6 lg:px-8 pt-8 bg-slate-500 flex-1">
          Main
        </main>
      </div>
    </>
  );
};

export default App;
