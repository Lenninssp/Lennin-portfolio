import { cn } from "@/lib/utils";

interface ContentFrameProps {
  className?: string;
  children?: React.ReactNode;
}
export const ContentFrame = ({ className, children}: ContentFrameProps) => {
  return (
    <div className={cn("rounded-2xl border-2 border-white p-5 flex w-full h-full overflow-auto custom-scrollbar", className)}>
      {children}
    </div>
  )
}