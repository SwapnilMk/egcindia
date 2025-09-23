export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm z-50">
      <div className="relative w-[65px] aspect-square">
        <span className="absolute inset-0 rounded-full animate-loaderAnim shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
        <span className="absolute inset-0 rounded-full animate-loaderAnim animation-delay shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
      </div>

      <style>
        {`
          @keyframes loaderAnim {
            0% { inset: 0 35px 35px 0; }
            12.5% { inset: 0 35px 0 0; }
            25% { inset: 35px 35px 0 0; }
            37.5% { inset: 35px 0 0 0; }
            50% { inset: 35px 0 0 35px; }
            62.5% { inset: 0 0 0 35px; }
            75% { inset: 0 0 35px 35px; }
            87.5% { inset: 0 0 35px 0; }
            100% { inset: 0 35px 35px 0; }
          }

          .animate-loaderAnim {
            animation: loaderAnim 2.5s infinite;
          }
          .animation-delay {
            animation-delay: -1.25s;
          }
        `}
      </style>
    </div>
  );
};
