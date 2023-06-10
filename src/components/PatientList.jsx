export default function PatientList(prop) {
  const { list } = prop;
  const arr = list.map((patient) => (
    <div
      className="grid grid-cols-4 border border-blue-900 p-2 "
      id={patient.id}
      key={patient.id}
    >
      <div>{patient.hnId}</div>
      <div>{patient.firstName + ' ' + patient.lastName}</div>
      <div>{patient.doctorFname + ' ' + patient.doctorLname}</div>
      <div>{patient.updatedAt}</div>
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
