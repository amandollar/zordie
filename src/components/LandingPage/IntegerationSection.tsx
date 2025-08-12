function IntegerationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Integrate whatever you want
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Connect effortlessly with popular apps, expanding functionality and
          enabling smooth workflows between tools you already use.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[
            "Slack",
            "LinkedIn",
            "Gmail",
            "Zoom",
            "Teams",
            "Calendar",
            "Greenhouse",
            "ATS",
            "HRIS",
            "Salesforce",
            "HubSpot",
            "Workday",
          ].map((integration) => (
            <div
              key={integration}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">{integration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegerationSection;
