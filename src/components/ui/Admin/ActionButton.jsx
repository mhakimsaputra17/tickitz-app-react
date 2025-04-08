import React from "react";

function ActionButton() {
  return (
    <>
      <td className="action-cell w-[90px] sm:w-[120px] p-[8px] sm:p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[12px] sm:text-[14px] not-italic font-normal leading-[normal]">
        <div className="action-buttons flex justify-center gap-[6px] sm:gap-[12px]">
          <img
            className="action-button bg-[#2563eb] text-[white] w-[26px] h-[26px] sm:w-[31px] sm:h-[31px] rounded-[6px] p-[6px] sm:p-[7px] flex items-center justify-center cursor-pointer hover:scale-110 hover:filter brightness-[90%] [transition:transform_0.3s_ease,_filter_0.3s_ease] view-button cursor-pointer"
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/eyeget.svg"
            alt="look icon"
          />
          <img
            className="action-button bg-[#5d5fef] text-[white] w-[26px] h-[26px] sm:w-[31px] sm:h-[31px] rounded-[6px] p-[6px] sm:p-[7px] flex items-center justify-center cursor-pointer hover:scale-110 hover:filter brightness-[90%] [transition:transform_0.3s_ease,_filter_0.3s_ease] edit-button cursor-pointer"
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/edit.svg"
            alt="edit icon"
          />
          <img
            className="action-button bg-[#ef4444] text-[white] w-[26px] h-[26px] sm:w-[31px] sm:h-[31px] rounded-[6px] p-[6px] sm:p-[7px] flex items-center justify-center cursor-pointer hover:scale-110 hover:filter brightness-[90%] [transition:transform_0.3s_ease,_filter_0.3s_ease] delete-button cursor-pointer"
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/delete.svg"
            alt="delete icon"
          />
        </div>
      </td>
    </>
  );
}

export default ActionButton;
