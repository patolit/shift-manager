import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Shift } from "../../types/Shift";
import { getShiftsAsync } from "./shiftsSlice";

function Shifts() {
  const avaialableShifts = useAppSelector(
    (state) => state.shift.availableShifts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShiftsAsync());
  }, []);

  useEffect(() => {
    console.log(avaialableShifts);
  }, [avaialableShifts]);

  const tableContent = avaialableShifts.map((item: Shift) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.start}</td>
        <td>{item.end}</td>
      </tr>
    );
  });

  return (
    <>
      <h1> Shifts Table </h1>
      <table>{tableContent}</table>
    </>
  );
}

export default Shifts;
