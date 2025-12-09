import React, { useContext, useEffect, useState } from "react";
import { ScreenWidthContext } from "../../routes/index";
import DefaultLayout from "../../layouts/defaultlayout/index";

const FeaturedProductList = () => {
  const screenWidth = useContext(ScreenWidthContext);
  const [DesktopSkeleton, setDesktopSkeleton] = useState(null);
  const [MobileSkeleton, setMobileSkeleton] = useState(null);

  useEffect(() => {
    
    import("./Desktop/FeaturedProductList")
      .then((mod) => setDesktopSkeleton(() => mod.default))
      .catch(() => setDesktopSkeleton(null));
    import("./Mobile/FeaturedProductList")
      .then((mod) => setMobileSkeleton(() => mod.default))
      .catch(() => setMobileSkeleton(null));
    
  }, []);

  if (screenWidth >= 800) {
    return DesktopSkeleton ? <DesktopSkeleton /> : <DefaultLayout />;
  } else {
    return MobileSkeleton ? <MobileSkeleton /> : <DefaultLayout />;
  }
};

export default FeaturedProductList;
