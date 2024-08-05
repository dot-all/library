const SkeletonBookCard: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-start bg-gray-50 p-10 rounded-3xl animate-pulse">
      <div className="mb-4 md:mb-0">
        <div className="w-42 h-56 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonBookCard;
