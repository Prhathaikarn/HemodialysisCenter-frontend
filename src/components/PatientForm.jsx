export default function PatientForm(prop) {
  const { list } = prop;
  const arr = list.map((patient) => (
    <div className=" border border-blue-900" id={patient.id} key={patient.id}>
      <table className="table-auto overflow-x-auto">
        <tbody>
          <tr>
            <td>{patient.hnId}</td>
            <td>{patient.firstName + '  ' + patient.lastName}</td>
            <td>{patient.doctorFname + '  ' + patient.doctorLname}</td>
            <td>{patient.updatedAt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
  return (
    <div>
      <div className="mt-10 px-72 text-blue-900">
        <div className="grid grid-cols-4 border border-blue-900 text-xl font-semibold p-2 bg-blue-200">
          <div className="">HN</div>
          <div className="">Name</div>
          <div className="">Doctor's name</div>
          <div className="">Last update</div>
        </div>
        <div className="flex flex-col border border-blue-900 mb-10">{arr}</div>
      </div>
    </div>
  );
}
