const ComparisonTable = () => {
  return (
    <section className="bg-[#fefae0] py-20 px-6 md:px-16 text-olive">
      <h2 className="text-4xl font-bold text-center mb-8 raleway-heading">Why Choose Madhoor Pureline Oil?</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#95be47] text-center">
          <thead className="bg-[#95be47] text-white">
            <tr>
              <th className="py-3 px-4">Feature</th>
              <th className="py-3 px-4">Madhoor Pureline</th>
              <th className="py-3 px-4">Regular Market Oil</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="py-3 px-4">Actual Cold Pressed Process</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr className="bg-[#fefae0]">
              <td className="py-3 px-4">Moisture Free Process</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr className="bg-[#white]">
              <td className="py-3 px-4">No Additives</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr className="bg-[#fefae0]">
              <td className="py-3 px-4">A1 Grade Raw Material</td>
              <td>Local Farms</td>
              <td>Unknown</td>
            </tr>
            
            <tr>
              <td className="py-3 px-4">Refined</td>
              <td>❌</td>
              <td>✅</td>
            </tr>

            <tr className="bg-[#fefae0]">
              <td className="py-3 px-4">Hygienic Process</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
