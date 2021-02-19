const DevMode = () => {
  const isDevMode = process.env.NODE_ENV === "development";
  return (
    isDevMode && (
      <div className="p-1 bg-yellow-500 font-mono text-xs text-black dark:text-black">
        Dev Mode | branch: "{process.env.CURRENT_GIT_BRANCH_NAME}"
      </div>
    )
  );
};

export default DevMode;
