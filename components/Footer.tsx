"use client";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-zinc-500 text-sm">© PrivyAI. All rights reserved.</span>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#early-access" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
