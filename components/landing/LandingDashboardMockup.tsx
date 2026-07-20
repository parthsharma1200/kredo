import BrowserMockup from "../shared/BrowserMockup";

export default function LandingDashboardMockup() {
  return (
    <div className="mx-auto mt-16 max-w-7xl scale-95 transition-all duration-500 hover:scale-100">
      <BrowserMockup>
        <div className="flex h-[700px] overflow-hidden bg-slate-100">

          {/* Sidebar */}
          <aside className="w-64 border-r border-slate-200 bg-white">
            Sidebar
          </aside>

          {/* Main */}
          <div className="flex flex-1 flex-col">

            {/* Header */}
            <header className="border-b border-slate-200 bg-white p-6">
              Header
            </header>

            {/* Dashboard */}
            <main className="flex-1 p-8">
              Dashboard Content
            </main>

          </div>

        </div>
      </BrowserMockup>
    </div>
  );
}