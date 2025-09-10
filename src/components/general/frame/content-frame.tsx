import { cn } from "@/lib/utils";

interface GeneralContentFrameProps {
  className?: string;
  children?: React.ReactNode;
}
export const GeneralContentFrame = ({ className, children}: GeneralContentFrameProps) => {
  return (
    <div className={cn("rounded-2xl border-2 border-white p-5 flex flex-col w-full h-full overflow-auto custom-scrollbar", className)}>
      {children}
    </div>
  )
}