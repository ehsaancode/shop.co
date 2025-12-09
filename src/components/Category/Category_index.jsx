import React, { useContext, useEffect, useState } from "react";
import { ScreenWidthContext } from "../../routes/index";
import DefaultLayout from "../../layouts/defaultlayout/index";

const Category = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const [DesktopSkeleton, setDesktopSkeleton] = useState(null);
  const [MobileSkeleton, setMobileSkeleton] = useState(null);

  useEffect(() => {
    
    import("./Desktop/Category")
      .then((mod) => setDesktopSkeleton(() => mod.default))
      .catch(() => setDesktopSkeleton(null));
    import("./Mobile/Category")
      .then((mod) => setMobileSkeleton(() => mod.default))
      .catch(() => setMobileSkeleton(null));
    
  }, []);

  if (screenWidth >= 800) {
    return DesktopSkeleton ? <DesktopSkeleton /> : <DefaultLayout />;
  } else {
    return MobileSkeleton ? <MobileSkeleton /> : <DefaultLayout />;
  }
};

export default Category;
