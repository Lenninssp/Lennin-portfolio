import { cn } from "@/lib/utils";

interface SidebarFrameProps {
  className?: string;
  children: React.ReactNode;
}
export const SidebarFrame = ({ className, children }: SidebarFrameProps) => {
  return (
    <div
      className={cn(
        " w-fit max-w-52 h-full border-2 rounded-2xl p-4 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
