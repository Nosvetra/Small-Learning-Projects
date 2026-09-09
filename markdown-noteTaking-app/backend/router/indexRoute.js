import router from "./toolBoxRoutes.js";
import articleRoutes from "./articleRoutes.js";
import homePage from "./homePage.js";

router.use("/", homePage);
router.use("/articles", articleRoutes);
export default router;
