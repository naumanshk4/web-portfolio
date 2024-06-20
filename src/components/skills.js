function Skills(props) {
  const hoverImg = (key) => {
    const updatedSkills = props.skills.map((acc) => {
      if (acc.key === key) {
        return { ...acc, isactive: !acc.isactive };
      } else {
        return { ...acc, isactive: false };
      }
    });
    props.setSkills(updatedSkills);
  };

  const hoverSoftwareImg = (key) => {
    const updatedSkills = props.softwareDev.map((acc) => {
      if (acc.key === key) {
        return { ...acc, isactive: !acc.isactive };
      } else {
        return { ...acc, isactive: false };
      }
    });
    props.setSoftwareDev(updatedSkills);
  };

  return (
    <>
      <div className="mt-20 ml-[40px] text-[22px]">
        <h3 className="text-white">Programming Languages</h3>
        <div className="flex justify-between flex-wrap mt-[20px] h-[100px]">
          {props.skills.map((data) => (
            <div className="flex  flex-col items-center text-center w-[80px] ">
              <img
                alt={data.skillName}
                onMouseEnter={() => hoverImg(data.key, props.skills)}
                onMouseLeave={() => {
                  hoverImg();
                }}
                className="w-12 pr-2 object-contain grayscale hover:grayscale-0 w-[55px] h-[55px]"
                src={data.logoSrc}
              ></img>
              <div>
                {data.isactive && (
                  <h3 className="text-white text-[16px] mt-[10px]">
                    {data.skillName}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-white mt-10">Software Development</h3>
        <div className="flex justify-between flex-wrap mt-[20px] ">
          {props.softwareDev.map((data) => (
            <div className="flex  flex-col items-center text-center w-[80px] ">
              <img
                alt={data.skillName}
                onMouseEnter={() => hoverSoftwareImg(data.key)}
                onMouseLeave={() => {
                  hoverSoftwareImg();
                }}
                className="w-12 pr-2 object-contain grayscale hover:grayscale-0 w-[55px] h-[55px]"
                src={data.logoSrc}
              ></img>
              <div>
                {data.isactive && (
                  <h3 className="text-white text-[16px] mt-[10px]">
                    {data.skillName}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
