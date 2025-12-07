import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", to: "/" },
  { label: "About", to: "/about" },
];

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 backdrop-blur-md bg-background/80">
        <div className="max-w-page mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            Ricardo Yamashiro
          </Link>
          <nav className="flex items-center gap-6 text-xs text-muted">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`uppercase tracking-[0.18em] ${
                    active ? "text-foreground" : "hover:text-foreground/80"
                  } transition-colors`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-page mx-auto px-5 pb-24 pt-10 md:pt-16">
        {children}
      </main>
    </div>
  );
}
