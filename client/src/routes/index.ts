// import Donate from "../pages/donate";
// import GenerateAvatar from "../pages/generate-avatar";
// import Home from "../pages/home";
// import PoNetwork from "../pages/networks";
// import PictureGallery from "../pages/picture-gallery";
// import VideoGallery from "../pages/video-gallery";

import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Donate = lazy(() => import("../pages/donate"));
const GenerateAvatar = lazy(() => import("../pages/generate-avatar"));
const PoNetwork = lazy(() => import("../pages/networks"));
const PictureGallery = lazy(() => import("../pages/picture-gallery"));
const VideoGallery = lazy(() => import("../pages/video-gallery"));

type RouteType = Record<
  "home" | "donate" | "generateAvatar" | "networks" | "pictureGallery" | "videoGallery",
  {
    path: string;
    exact: boolean;
    private: boolean;
    element: any;
    index?: boolean;
  }
>;

const ROUTES: RouteType = {
  home: {
    path: "/",
    exact: true,
    private: false,
    element: Home,
    index: true,
  },
  donate: {
    path: "/donate",
    exact: true,
    private: false,
    element: Donate,
  },
  generateAvatar: {
    path: "/generate-avater",
    exact: true,
    private: false,
    element: GenerateAvatar,
  },
  networks: {
    path: "/networks",
    exact: true,
    private: false,
    element: PoNetwork,
  },
  pictureGallery: {
    path: "/picture-gallery",
    exact: true,
    private: false,
    element: PictureGallery,
  },
  videoGallery: {
    path: "/video-gallery",
    exact: true,
    private: false,
    element: VideoGallery,
  },
};

export default ROUTES;
