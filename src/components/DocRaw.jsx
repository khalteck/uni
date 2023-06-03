const DocRaw = () => {
  return (
    <div className="min-w-[250px] bg-[#006701]/70 pl-6 pr-4 py-4 flex flex-col justify-between rounded-lg text-white">
      <div className="flex gap-4">
        <img
          alt=""
          src="/images/icons8-document-64.png"
          className="w-12 h-12"
        />
        <div>
          <p className="w-full text-[1.5rem] font-bold">Course form</p>
          <div className={`mb-auto text-[.85rem]`}>
            <p>Created: 21-12-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocRaw;
