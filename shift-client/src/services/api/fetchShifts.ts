import { Shift } from "../../types/Shift";
import { api } from "./api";

type FetchShiftsApiResponse = Shift[];

async function getShifts() {
  const response = await api.get<FetchShiftsApiResponse>("/shift");
  console.log(response);
  const shifts = response;
  return shifts;
}

export { getShifts };
