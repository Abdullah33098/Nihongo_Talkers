import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TSPInformationInput, SelectField } from "./ui/InputField";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  最終学歴: Yup.string().required("必須項目です"),
  専攻: Yup.string().required("必須項目です"),
  大学名: Yup.string(), 
  ご職業: Yup.string().required("必須項目です"),
});

const TSBInformation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto lg:px-4 sm:px-0 pb-8 sm:pb-[60px]">
      <Progressbar currentStep={1} />

      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[1296px] bg-[#EBF5FE] rounded-3xl py-[30px] lg:py-[50px] sm:py-[30px] sm:px-[15px] flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#5183F4]">
            背景情報
          </h2>

          <Formik
            initialValues={{
              最終学歴: "",
              専攻: "",
              大学名: "",
              ご職業: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form className="w-full max-w-[718px] flex flex-col gap-8">
                <SelectField
                  label="最終学歴"
                  name="最終学歴"
                  options={[
                    "大学院（博士）",
                    "大学院（修士）",
                    "大学卒",
                    "短大卒",
                    "高校卒",
                  ]}
                />

                <SelectField
                  label="専攻"
                  name="専攻"
                  options={[
                    "コンピューター・サイエンス",
                    "経済学",
                    "文学",
                    "教育学",
                  ]}
                />

                
                <TSPInformationInput
                  label={
                    <>
                      大学名{" "}
                      <span className="text-sm text-gray-500">(オプション)</span>
                    </>
                  }
                  name="大学名"
                  placeholder="日本語大学"
                />

                <SelectField
                  label="ご職業"
                  name="ご職業"
                  options={["会社員", "自営業", "学生", "その他"]}
                />

                <div className="flex justify-between mt-8 px-[15px] lg:px-0 sm:px-[15px]">
                  <button
                    type="button"
                    className="border border-[#5183F4] text-[#5183F4] px-8 py-3 w-[154px] rounded-full hover:bg-[#5183F4] hover:text-white transition"
                    onClick={() => navigate('/tutor-signup')}
                  >
                    戻る
                  </button>
                  <button
                    type="submit"
                    className="bg-[#5183F4] text-white px-10 w-[154px] py-3 rounded-full hover:bg-[#3b6de0] transition"
                    onClick={() => navigate('/tutor-application/step-2')}
                  >
                    次
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TSBInformation;
