import { DataProvider, RaRecord } from 'react-admin';

// Define the specific record type
export interface MeterRecord extends RaRecord {
  id: number;
  material: string;
  meterGUID: string;
  meterState: string;
  poleId: string;
  customerId: string;
}

const mockData: MeterRecord[] = [
  {
    id: 1,
    material: '01-00023100',
    meterGUID: 'woa4vslz-2kg44etz-2gjyvyac',
    meterState: 'Assign',
    poleId: '63800',
    customerId: '64300',
  },
  {
    id: 2,
    material: '01-00023101',
    meterGUID: 'l0y7deua-x9rkox15-j3i1jene',
    meterState: 'Assign',
    poleId: '63801',
    customerId: '64301',
  },
];

export const dataProvider: any = {
  getList: () =>
    Promise.resolve({
      data: mockData,
      total: mockData.length,
    }),

  getOne: ({ id }:any) =>
    Promise.resolve({ data: mockData.find((item) => item.id === id)! }),

  update: ({ id, data }:any) =>
    Promise.resolve({ data: { ...data, id } }),

  create: ({ data }:any) =>
    Promise.resolve({ data: { ...data, id: Math.random() } }),

  delete: ({ id }:any) =>
    Promise.resolve({ data: { id } }),

  getMany: () =>
    Promise.resolve({ data: [] }),

  getManyReference: () =>
    Promise.resolve({ data: [], total: 0 }),

  deleteMany: () =>
    Promise.resolve({ data: [] }),

  updateMany: () =>
    Promise.resolve({ data: [] }),
};
