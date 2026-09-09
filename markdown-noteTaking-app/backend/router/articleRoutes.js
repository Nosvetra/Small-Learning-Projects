import router from "./toolBoxRoutes.js";

router.get("/articles", (req, res) => {
  res.json({ message: "hellods" });
});

export default router;
