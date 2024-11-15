export type DataResponse<T> = {
  data: T;
};

export type StrapiModel<T> = {
  id: string;
  attributes: Omit<T, "id">;
};
