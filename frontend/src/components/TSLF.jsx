import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { SelectField, TSPInformationInput } from "./ui/InputField";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  マンツーマン: Yup.string().required("必須項目です"),
  options: Yup.array().min(1, "少なくとも1つ選択してください"),
});

const TSLF = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto lg:px-4 sm:px-0 pb-8 sm:pb-[60px]">
      <Progressbar currentStep={2} />
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[1296px] bg-[#EBF5FE] rounded-3xl py-[30px] lg:py-[50px] sm:py-[30px] sm:px-[15px] flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#5183F4]">
            レッスンの詳細
          </h2>

          <Formik
            initialValues={{
              マンツーマン: "",
              options: [],
              体験レッスン価格: "",
              グループレッスン価格: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, setFieldValue, errors, touched }) => (
              <Form className="w-full max-w-[718px] flex flex-col gap-8">
                <p className="text-[22px] font-medium text-[#181A20]">
                  レッスン料金体系
                </p>

                {/* Dropdown selection */}
                <SelectField
                  label="マンツーマン (60分/生徒)"
                  name="マンツーマン"
                  options={["¥3000", "¥4000", "¥5000"]}
                  onChange={(e) => {
                    const price = e.target.value;
                    setFieldValue("マンツーマン", price);
                    setFieldValue("体験レッスン価格", price);
                    setFieldValue("グループレッスン価格", price);
                  }}
                />

                {/* Read-only inputs */}
                

                {/* Checkboxes */}
                <div className="flex flex-row gap-3">
                  <label className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="options"
                      value="option1"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-base text-[#181A20]">
                      体験レッスン (60分/生徒)
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <Field
                      type="checkbox"
                      name="options"
                      value="option2"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-base text-[#181A20]">
                      グループレッスン (60分/生徒)
                    </span>
                  </label>

                  {touched.options && errors.options && (
                    <span className="text-red-500 text-sm">{errors.options}</span>
                  )}
                </div>
                <TSPInformationInput
                  label="体験レッスン (60分/生徒)"
                  name="体験レッスン価格"
                  value={values.体験レッスン価格} 
                  className=" !text-[#B1B1B1] text-basic gap-[6px]"
                  readOnly
                />
                <TSPInformationInput
                  label="グループレッスン (60分/生徒)"
                  name="グループレッスン価格"
                  value={values.グループレッスン価格}
                  className=" !text-[#B1B1B1] text-basic gap-[6px]"
                  readOnly
                />

                <div className="flex justify-between mt-8 px-[15px] lg:px-0 sm:px-[15px]">
                  <button
                    type="button"
                    className="border border-[#5183F4] text-[#5183F4] px-8 py-3 w-[154px] rounded-full hover:bg-[#5183F4] hover:text-white transition"
                    onClick={() => navigate('/tutor-application/step-3')}
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

export default TSLF;
