import router from "./toolBoxRoutes.js";

router.get("/", (req, res) => {
  res.json({ message: "this is the usuasl / route" });
});
export default router;
