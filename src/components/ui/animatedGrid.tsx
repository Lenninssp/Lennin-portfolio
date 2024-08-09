interface AnimatedGridProps {
  children: React.ReactNode;
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({children}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-grid-lines" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">{children}</h1>
      </div>
    </div>
  );
};

export default AnimatedGrid;
