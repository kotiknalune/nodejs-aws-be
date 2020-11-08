import { DB } from '../../common/inMemory.DB';

const getAll = async (): Promise<Product[]> => DB;

const getById = async (id: number): Promise<Product> => DB.find( item => item.id === id);

export default {
  getAll, getById
};