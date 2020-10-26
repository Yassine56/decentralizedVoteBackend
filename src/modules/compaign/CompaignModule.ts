import GenericModule from "../GenericModule";
import { Compaign } from "../../models";
import RepositoryFactory from "../../repositories/RepositoryFactory";
import IGenericRepository from "../../repositories/IGenericRepository";
export default class CompaignModule extends GenericModule<Compaign> {
  constructor(repository: IGenericRepository<Compaign> = RepositoryFactory.buildCompaignRepository()) {
    super(repository);
  }
}
