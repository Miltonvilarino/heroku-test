import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe';
interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor( 
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {}

  i

  async execute({ name, description }: IRequest): Promise<void> {
    console.log(name);
    const categoriesAlreadyExits = await this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExits) {
      throw new Error("Category already Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
