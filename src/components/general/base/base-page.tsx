import { cn } from "@/lib/utils";
import { TextLine } from "../text/text-line";
import { GeneralSwitch } from "../button/general-switch";
import { usePageColor } from "@/contexts/selected-color";
import { backgroundColor, borderColor } from "../color-format-router";

interface BasePageProps {
  children: React.ReactNode;
}

export const BasePage = ({ children }: BasePageProps) => {
  const { selectedColor, toggle } = usePageColor();
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden font-ltmono", backgroundColor[selectedColor])}>
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-80" />
      <div
        className={cn(
          "pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full blur-3xl animate-drift",
          selectedColor === "light" ? "bg-vintage-200/50" : "bg-orange-300/10"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl animate-drift",
          selectedColor === "light" ? "bg-red-200/30" : "bg-red-500/10"
        )}
      />
      <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-20 md:px-8">
        <TextLine
          className="hidden md:inline-block absolute left-8 top-6 z-10 text-xs uppercase tracking-[0.35em]"
          text="Lennin's Portfolio"
          type="subTitle"
          color="secondary"
        />

        <GeneralSwitch
          activated={selectedColor === "light"}
          onToggle={toggle}
          className="absolute right-6 top-6 z-10"
          icon1="material-symbols:clear-day-rounded"
          icon2="material-symbols:mode-night"
        />

        <div
          className={cn(
            "glass-panel relative flex min-h-[78vh] w-full max-w-7xl justify-center overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_rgba(15,23,42,0.10)]",
            selectedColor === "light" ? "bg-white/70" : "bg-zinc-950/55",
            borderColor[selectedColor]["primary"]
          )}
        >
          <div className="h-full w-full p-4 md:p-6 lg:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
