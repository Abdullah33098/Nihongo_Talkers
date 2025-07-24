import { Select } from "antd";

const { Option } = Select;

const RoleSelector = ({ role, setRole, step }) => {
  return (
    <div className="field-wrapper">
      <div className="icon-left">
        <img
          src={step === 1 ? "/box.svg" : "/Layer_1.svg"}
          alt="role icon"
          className="w-[20px] h-[20px] pointer-events-none"
        />
      </div>

      <Select
        value={role}
        onChange={(value) => setRole(value)}
        placeholder="Select role"
        className="w-full role-selector"
        dropdownStyle={{ zIndex: 10000 }}
      >
        <Option value="tutor">Tutor</Option>
        <Option value="student">Student</Option>
      </Select>
    </div>
  );
};

export default RoleSelector;
