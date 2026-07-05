"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiGithub, FiMenu, FiTerminal, FiX } from "react-icons/fi";
import { FlickeringGrid } from "@/components/ui/flickering-grid"

import { NAV } from "./landing-data";

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand via-brand to-brand-3 text-white shadow-lg shadow-brand/30">
            <FiTerminal className="size-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            PTSC<span className="text-muted-foreground font-normal"> · KNIT</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<a href="https://github.com" />}
          >
            <FiGithub className="size-4" /> GitHub
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-brand to-brand-3 text-white hover:opacity-90"
            nativeButton={false}
            render={<a href="#join" />}
          >
            Join the club <FiArrowRight className="size-4" />
          </Button>
        </div>

        <button
          className="grid size-9 place-items-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
        </button>
      </nav>

      {open && (
          <div className="border-t border-white/5 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
                <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gradient-to-r from-brand to-brand-3 px-3 py-2.5 text-center text-sm font-medium text-white"
            >
              Join the club
            </a>
          </div>

        </div>
      )}
    </header>
  );
}