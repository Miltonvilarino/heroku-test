import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/createCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory.ts/importCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController()
categoriesRoutes.post("/", createCategoryController.handle); 

const listCategoryController = new ListCategoriesController()
categoriesRoutes.get("/", listCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };
