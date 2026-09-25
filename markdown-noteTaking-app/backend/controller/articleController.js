import services from "./../services/articleServices.js";
class articleController {
  constructor() {
    this.articleService = new services();
  }
  showLimitedArticles = async (req, res, next) => {
    const response = await this.articleService.getLimitedArticles();
    res.send(response);
  };
  articlePost = async (req, res, next) => {
    const response = await this.articleService.articlePost(req.body);
    res.send(response._id);
  };
  particularArticle = async (req, res, next) => {
    const response = await this.articleService.getParticularArticle(
      req.params.articleId,
    );
    res.send(response);
  };
  editArticle = async (req, res, next) => {
    const data = { id: req.params.articleId, article: req.body };
    const response = await this.articleService.patchArticle(
      data.id,
      data.article,
    );
    res.send(response);
  };
  deleteArticle = async (req, res, next) => {
    const response = await this.articleService.deleteArticle(
      req.params.articleId,
    );
    res.send(response);
  };
}

export default articleController;

// "/articles/new"
// "/articleid:"
// "/articleid:/edit"
// "/articleid:/delete"

// {
//     "title" : "Random Test",
//     "description" : "loremIpsum dkfdfjdjfl;kajdlfk;dl;kf",
//     "markdown" : "Hideo koijima"
// }
