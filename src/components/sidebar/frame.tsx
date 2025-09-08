interface SidebarFrameProps {
  children: React.ReactNode
}
export const SidebarFrame = ({children}: SidebarFrameProps) => {
  return (
    <div className=" w-fit h-full border-2 rounded-2xl p-4 flex flex-col">{children}</div>
  )
}